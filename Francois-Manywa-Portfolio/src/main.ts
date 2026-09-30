import "@angular/compiler";
import { LanguageService } from "./language";
import {
  Component,
  AfterViewInit,
  inject,
  signal,
  enableProdMode,
} from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import {
  provideRouter,
  Router,
  RouterOutlet,
  RouterLink,
  NavigationEnd,
  NavigationStart,
  withRouterConfig,
  Scroll,
  withInMemoryScrolling,
  withViewTransitions,
} from "@angular/router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HomeComponent } from "./home";
import {
  WorkComponent,
  ProjectComponent,
  AboutComponent,
  PlayComponent,
  NotFoundComponent,
} from "./pages";
import { FooterComponent } from "./shared";
import { MotionService, reduced } from "./motion";
import "./styles.css";
import "./editorial.css";
import { projects } from "./projects";
if (import.meta.env.PROD) enableProdMode();
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, FooterComponent],
  template: `<a class="skip-link" href="#main">{{ lang.t("Ga naar inhoud", "Skip to content") }}</a>
    <div class="intro-overlay" aria-hidden="true" [class.hidden]="introDone()">
      @for (letter of lang.t("HALLO", "HELLO").split(""); track $index) { <span>{{ letter }}</span> }<small>FRANÇOIS MANYWA</small>
    </div>
    <header class="site-header" [class.dark-header]="page() !== 'hello'" [class.on-home]="page() === 'hello'">
      <nav [attr.aria-label]="lang.t('Hoofdnavigatie', 'Main navigation')">
        <div class="nav-left">
          @if (page() === "hello") {
            <a routerLink="/work">work</a><a routerLink="/play">play</a>
          } @else {
            <a routerLink="/">home</a
            ><a [routerLink]="page() === 'work' ? '/play' : '/work'">{{
              page() === "work" ? "play" : "work"
            }}</a>
          }
        </div>
        <a
          routerLink="/"
          class="nav-center"
          aria-label="François Manywa · home"
          >@if (page() === 'hello') { FRANÇOIS MANYWA } @else { {{ page() }} }</a
        ><a
          [routerLink]="page() === 'about' ? '/play' : '/about'"
          class="nav-about"
          >{{ page() === "about" ? "play" : "about" }}</a
        >
        <div class="language-switch" [attr.aria-label]="lang.t('Taal', 'Language')" role="group">
          <button type="button" (click)="lang.set('nl')" [attr.aria-pressed]="!lang.en()" aria-label="Nederlands">NL</button>
          <span aria-hidden="true">/</span>
          <button type="button" (click)="lang.set('en')" [attr.aria-pressed]="lang.en()" aria-label="English">EN</button>
        </div>
      </nav>
    </header>
    <main id="main" tabindex="-1"><router-outlet /></main>
    <site-footer />`,
})
class AppComponent implements AfterViewInit {
  lang = inject(LanguageService);
  router = inject(Router);
  private savedLanguageScroll: number | null = null;
  motion = inject(MotionService);
  page = signal("hello");
  introDone = signal(
    !!sessionStorage.getItem("fm-intro-v4") ||
      reduced() ||
      location.pathname !== "/",
  );
  constructor() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart && e.navigationTrigger === "imperative" && e.url !== this.router.url && e.url.split(/[?#]/)[0] === this.router.url.split(/[?#]/)[0]) {
        this.savedLanguageScroll = window.scrollY;
      }
      if (e instanceof NavigationEnd) {
        const path = e.urlAfterRedirects.split(/[?#]/)[0];
        this.page.set(
          path === "/"
            ? "hello"
            : path.startsWith("/work/")
              ? "project"
              : path.slice(1),
        );
        document.documentElement.dataset["page"] = this.page();
        setTimeout(() => {
          ScrollTrigger.refresh();
          const main = document.getElementById("main");
          if (this.router.lastSuccessfulNavigation()?.previousNavigation)
            main?.focus({ preventScroll: true });
        }, 80);
      }
      if (e instanceof Scroll) {
        requestAnimationFrame(() => {
          if (this.savedLanguageScroll !== null) {
            this.motion.scroll(this.savedLanguageScroll);
            this.savedLanguageScroll = null;
          } else if (e.position) this.motion.scroll(e.position[1]);
          else if (e.anchor)
            document.getElementById(e.anchor)?.scrollIntoView();
          else this.motion.scroll(0);
          ScrollTrigger.refresh();
        });
      }
    });
  }
  ngAfterViewInit() {
    if (this.introDone()) return;
    sessionStorage.setItem("fm-intro-v4", "1");
    const end = () => {
      this.introDone.set(true);
      window.removeEventListener("keydown", skip);
    };
    const tl = gsap.timeline({ onComplete: end });
    tl.fromTo(".intro-overlay > span", { y: 40, opacity: 0 }, {
      y: (i: number) => i % 2 === 0 ? 12 : -12,
      opacity: 1,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
    }).to(
      ".intro-overlay",
      { opacity: 0, duration: 0.55, ease: "power2.inOut" },
      "+=.15",
    );
    const skip = () => {
      tl.kill();
      end();
    };
    window.addEventListener("keydown", skip, { once: true });
  }
}
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        { path: "", component: HomeComponent },
        { path: "work", component: WorkComponent },
        {
          path: "work/:slug",
          component: ProjectComponent,
          canActivate: [
            (route) =>
              projects.some((p) => p.slug === route.params["slug"])
                ? true
                : inject(Router).parseUrl("/not-found"),
          ],
        },
        { path: "about", component: AboutComponent },
        { path: "play", component: PlayComponent },
        { path: "**", component: NotFoundComponent },
      ],
      withRouterConfig({ defaultQueryParamsHandling: "preserve" }),
      withInMemoryScrolling({
        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled",
      }),
      withViewTransitions({
        skipInitialTransition: true,
        onViewTransitionCreated: ({ transition }) => {
          if (reduced()) transition.skipTransition();
        },
      }),
    ),
  ],
}).catch(console.error);
