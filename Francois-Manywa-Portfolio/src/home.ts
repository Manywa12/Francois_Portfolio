import { ArrowComponent } from "./arrow";
import { LanguageService } from "./language";
import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  inject,
  signal,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featuredProjects, projects } from "./projects";
import { VisualComponent } from "./visual";
import { RevealDirective, reduced } from "./motion";
@Component({
  selector: "home-page",
  standalone: true,
  imports: [ArrowComponent, RouterLink, VisualComponent, RevealDirective],
  template: `
    <section class="hero" aria-labelledby="hero-title">
      <p class="eyebrow hero-eyebrow">{{ lang.t("VAN IDEE NAAR WERKENDE SOFTWARE", "FROM AN IDEA TO WORKING SOFTWARE") }}</p>
      <h1 id="hero-title" class="hero-title">
        @if (lang.en()) {
          <span>SOFTWARE <i>with</i></span><span><i>a</i> SOLID</span><span>FOUNDATION<span class="title-note">AN EYE FOR DETAIL</span></span>
        } @else {
          <span>SOFTWARE <i>met</i></span><span><i>een</i> HELDERE</span><span>BASIS<span class="title-note">EN OOG VOOR DETAIL</span></span>
        }
      </h1>
      <span class="hero-location">{{ lang.t("JUNIOR DEVELOPER", "JUNIOR DEVELOPER") }}<br />{{ lang.t("ANTWERPEN, BELGIË", "ANTWERP, BELGIUM") }}</span>
      <p class="hero-intro">
        {{ lang.t("Ik ben François, softwareontwikkelaar. Ik verbind .NET, data en interfaces tot doordachte oplossingen. Nieuwsgierig naar wat er achter én voor het scherm gebeurt.", "I am François, a software developer. I connect .NET, data and interfaces to build thoughtful solutions. Curious about what happens behind the screen and in front of it.") }}
      </p>
      <a
        class="hero-preview preview-left"
        routerLink="/work/btp-planning"
        [attr.aria-label]="lang.t('Bekijk BTP Planning', 'View BTP Planning')"
        ><project-visual [id]="2" [eager]="true" /><span
          >BTP Planning · .NET / Blazor <ui-arrow /></span
        ></a
      >
      <a
        class="hero-preview preview-right"
        routerLink="/work/tillit-genai"
        [attr.aria-label]="lang.t('Bekijk Tillit GenAI', 'View Tillit GenAI')"
        ><project-visual [id]="1" [eager]="true" /><span
          >Tillit · GenAI & data <ui-arrow /></span
        ></a
      >
      <a href="#focus" class="scroll-hint">scroll to explore <span><ui-arrow direction="down" /></span></a>
    </section>
    <section class="focus-section" id="focus">
      <p class="eyebrow">{{ lang.t("MIJN FOCUS", "MY FOCUS") }}</p>
      <div class="focus-grid">
        <div>
          <h2 reveal>
            @if (lang.en()) { SOLID LOGIC.<br />CLEAR <i>in</i> USE.<br />BUILT <i>to</i><br />BUILD UPON. }
            @else { STERKE LOGICA.<br />HELDER <i>in</i> GEBRUIK.<br />GEBOUWD <i>om</i><br />OP VOORT TE BOUWEN. }
          </h2>
          <div class="focus-copy">
            <p>
              {{ lang.t("VAN REQUIREMENTS EN DATAMODEL TOT API EN INTERFACE. IK WERK GRAAG AAN ONDERHOUDBARE SOFTWARE, MET AANDACHT VOOR BEVEILIGING EN SAMENWERKING.", "FROM REQUIREMENTS AND DATA MODELS TO APIs AND INTERFACES. I ENJOY BUILDING MAINTAINABLE SOFTWARE WITH ATTENTION TO SECURITY AND COLLABORATION.") }}
            </p>
            <a routerLink="/about" class="serif-link">{{ lang.t("Meer over mij", "More about me") }} <ui-arrow /></a>
          </div>
        </div>
        <div class="focus-stack">
          <p class="eyebrow">{{ lang.t("WAAR IK MEE WERK", "WHAT I WORK WITH") }}</p>
          <ul>
            <li>.NET & C#</li>
            <li>REST API’s & SQL</li>
            <li>Blazor, Angular & React</li>
            <li>Clean Architecture & CQRS</li>
            <li>{{ lang.t("AI & data-integraties", "AI & data integrations") }}</li>
            <li>Git, Docker & Azure</li>
          </ul>
        </div>
      </div>
    </section>
    <section
      id="selected-work"
      class="work-scroll"
      [style.height]="(projects.length + 1) * 100 + 'svh'"
      [attr.aria-label]="lang.t('Vijf geselecteerde projecten', 'Five selected projects')"
    >
      <div
        class="work-stage"
        [style.background-color]="projects[active()].color"
      >
        <h2 class="work-letters" aria-label="Work">
          <span>W</span><span>O</span><span>R</span><span>K</span>
        </h2>
        <span class="scene-counter count-left">0{{ active() + 1 }}</span
        ><span class="scene-counter count-right">/0{{ projects.length }}</span>
        @for (p of projects; track p.slug; let i = $index) {
          <article
            class="project-scene scene-{{ i }}"
            [class.current]="active() === i"
            [class.previous]="active() > i"
            [class.next]="active() < i"
            [attr.aria-hidden]="active() !== i"
            [attr.inert]="active() !== i ? '' : null"
          >
            <a
              [routerLink]="'/work/' + p.slug"
              class="scene-link"
              [attr.tabindex]="active() === i ? 0 : -1"
              [attr.aria-label]="lang.t('Bekijk ', 'View ') + p.title"
            >
              <div
                class="scene-image main-image"
                [style.view-transition-name]="
                  active() === i ? 'image-' + p.slug : 'none'
                "
              >
                <project-visual [id]="p.id" />
              </div>
              <div class="scene-image secondary-image">
                <project-visual [id]="p.id" [index]="1" />
              </div>
              <div class="scene-image tertiary-image"><project-visual [id]="p.id" [index]="2" /></div>
              <div class="scene-title">
                <span class="eyebrow">{{ p.category }}</span>
                <h3
                  [style.view-transition-name]="
                    active() === i ? 'title-' + p.slug : 'none'
                  "
                >
                  {{ p.line1 }}<br /><span>{{ p.line2 }}</span>
                </h3>
                <span class="scene-subtitle"
                  >{{ p.stack[0] }} <i>{{ lang.t(" / bekijk project", " / view project") }} <ui-arrow /></i></span
                >
              </div>
            </a>
          </article>
        }
        <div class="stage-bottom">
          <a routerLink="/work">{{ lang.t("Alle", "All") }} {{ totalProjects }} {{ lang.t("projecten", "projects") }} <ui-arrow /></a
          ><span>SELECTED WORK · 0{{ active() + 1 }} / 0{{ projects.length }}</span>
        </div>
      </div>
    </section>
    <section class="play-teaser">
      <span class="eyebrow">{{ lang.t("RUIMTE OM TE ONTDEKKEN", "ROOM TO EXPLORE") }}</span>
      <h2 reveal>{{ lang.t("Serieus over code.", "Serious about code.") }}<br /><i>{{ lang.t("Nieuwsgierig naar de rest.", "Curious about everything else.") }}</i></h2>
      <div>
        <p>
          {{ lang.t("Van een leen-app tot Woods Knight.", "From a lending app to Woods Knight.") }}<br />{{ lang.t("Projecten waarin ik nieuwe ideeën uitprobeer.", "Projects where I try out new ideas.") }}
        </p>
        <a routerLink="/play" class="serif-link">{{ lang.t("Naar Play", "Explore Play") }} <ui-arrow /></a>
      </div>
    </section>
  `,
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  lang = inject(LanguageService);
  get projects() { return featuredProjects.map(p => this.lang.project(p)); }
  totalProjects = projects.length;
  active = signal(0);
  el = inject(ElementRef);
  ctx?: gsap.Context;
  mm?: gsap.MatchMedia;
  private cleanup?: () => void;
  ngAfterViewInit() {
    const root = this.el.nativeElement as HTMLElement;
    this.ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".work-scroll",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (s) =>
          this.active.set(Math.min(this.projects.length - 1, Math.floor(s.progress * this.projects.length))),
      });
      this.mm = gsap.matchMedia();
      this.mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-title > span", {
          y: 45,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          delay: sessionStorage.getItem("fm-intro-v4") ? 0 : 1.2,
        });
        gsap.to(".work-letters span", {
          x: (i: number) => [-17, -6, 6, 17][i] + "vw",
          y: (i: number) => [-32, 32, -32, 32][i] + "vh",
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: ".work-scroll",
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        });
      });
    }, root);
    if (
      matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !reduced()
    ) {
      const stage = root.querySelector(".work-stage") as HTMLElement;
      const move = (e: MouseEvent) => {
        if (reduced() || innerWidth <= 768) return;
        stage.style.setProperty(
          "--mx",
          `${(e.clientX / innerWidth - 0.5) * 15}px`,
        );
        stage.style.setProperty(
          "--my",
          `${(e.clientY / innerHeight - 0.5) * 12}px`,
        );
      };
      const reset = () => {
        stage.style.setProperty("--mx", "0px");
        stage.style.setProperty("--my", "0px");
      };
      stage.addEventListener("mousemove", move);
      stage.addEventListener("mouseleave", reset);
      this.cleanup = () => {
        stage.removeEventListener("mousemove", move);
        stage.removeEventListener("mouseleave", reset);
      };
    }
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }
  ngOnDestroy() {
    this.ctx?.revert();
    this.mm?.revert();
    this.cleanup?.();
  }
}
