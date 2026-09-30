import { ArrowComponent } from "./arrow";
import { LanguageService } from "./language";
import { galleries, liveWebsites } from "./media";
import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  inject,
  signal,
  computed,
} from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { projects, experiments } from "./projects";
import { VisualComponent } from "./visual";
import { RevealDirective, reduced } from "./motion";
import { Subscription } from "rxjs";
@Component({
  selector: "work-page",
  standalone: true,
  imports: [ArrowComponent, RouterLink, VisualComponent],
  template: `<section class="work-index">
    <div class="index-heading">
      <p class="eyebrow">WORK / {{ projects.length }} {{ lang.t("PROJECTEN", "PROJECTS") }}</p>
      <h1>@if (lang.en()) { A look <i>at</i><br />my work. } @else { Een blik <i>op</i><br />mijn werk. }</h1>
      <p>{{ lang.t(".NET, data en interfaces.", ".NET, data and interfaces.") }}<br />{{ lang.t("Van analyse tot implementatie.", "From analysis to implementation.") }}</p>
    </div>
    <div class="index-list">
      @for (p of projects; track p.slug; let i = $index) {
        <a
          [routerLink]="'/work/' + p.slug"
          (mouseenter)="active.set(i)"
          (focus)="active.set(i)"
          (mouseleave)="active.set(-1)"
          (blur)="active.set(-1)"
          [class.is-active]="active() === i"
          ><span class="index-number">0{{ p.id }}</span
          ><span
            class="index-name"
            [style.view-transition-name]="'title-' + p.slug"
            >{{ p.line1 }} <i>{{ p.line2 }}</i></span
          ><span class="index-category">{{ p.category }}</span
          ><span class="index-arrow"><ui-arrow /></span>
          <div
            class="index-preview"
            [style.view-transition-name]="
              active() === i ? 'image-' + p.slug : 'none'
            "
          >
            <project-visual [id]="p.id" /></div
        ></a>
      }
    </div>
    <div class="index-bottom">
      <span>{{ lang.t("ANTWERPEN, BELGIË", "ANTWERP, BELGIUM") }}</span><span>BACKEND / FULL STACK</span>
    </div>
  </section>`,
})
export class WorkComponent {
  lang = inject(LanguageService);
  get projects() { return projects.map(p => this.lang.project(p)); }
  active = signal(-1);
}
@Component({
  selector: "project-page",
  standalone: true,
  imports: [ArrowComponent, RouterLink, VisualComponent, RevealDirective],
  template: `@if (project(); as p) {
    <article
      class="detail"
      [style.--project-color]="p.color"
      [style.--project-accent]="p.accent"
    >
      <header class="detail-header">
        <a routerLink="/work" class="back-link"><ui-arrow direction="left" /> {{ lang.t("Alle projecten", "All projects") }}</a>
        <div class="detail-heading">
          <div>
            <span class="eyebrow">0{{ p.id }} / {{ p.category }}</span>
            <h1 [style.view-transition-name]="'title-' + p.slug">
              {{ p.line1 }}<br />{{ p.line2 }}
            </h1>
          </div>
          <div class="detail-context">
            <p>{{ p.description }}</p>
            <span>{{ p.role }}</span>
          </div>
        </div>
      </header>
      <figure
        class="detail-hero"
        [style.view-transition-name]="'image-' + p.slug"
      >
        <project-visual [id]="p.id" [eager]="true" />
        <figcaption>
          @if (websites[p.id]; as url) { {{ lang.t('Screenshot van', 'Screenshot of') }} <a [href]="url" target="_blank" rel="noopener noreferrer">{{ url }}</a> }
          @else if (images[p.id][0].viewport) { {{ lang.t('Aangeleverd interfaceontwerp uit het project.', 'Supplied interface design from the project.') }} }
          @else { {{ lang.t('Conceptillustratie bij het project. Geen productscreenshot.', 'Project concept illustration. Not a product screenshot.') }} }
        </figcaption>
      </figure>
      <div class="project-meta">
        <div>
          <span class="eyebrow">PROJECT</span>
          <p>{{ p.title }}</p>
        </div>
        <div>
          <span class="eyebrow">{{ lang.t("TECHNOLOGIE", "TECHNOLOGY") }}</span>
          <p>{{ p.stack.join(" · ") }}</p>
        </div>
      </div>
      <section class="detail-story">
        <span class="eyebrow">01 / {{ lang.t("CONTEXT & AANPAK", "CONTEXT & APPROACH") }}</span>
        <div>
          <h2 reveal>{{ p.sections[0].title }}</h2>
          <p>{{ p.sections[0].body }}</p>
        </div>
      </section>
      <section class="project-gallery" [attr.aria-label]="lang.t('Projectbeelden', 'Project images')">
        @for (image of images[p.id].slice(1); track image.src; let i = $index) {
          <figure [class.gallery-offset]="i === 1" [class.portrait-interface]="image.viewport && image.viewport.width < 500">
            <project-visual [id]="p.id" [index]="i + 1" />
            <figcaption><span>0{{ i + 2 }} / 03</span><span>{{ lang.t(image.nl, image.en) }}</span></figcaption>
          </figure>
        }
      </section>
      <div class="detail-composition">
        <div
          class="detail-quote"
          [style.background]="p.accent"
          [style.color]="p.color"
        >
          <span class="eyebrow">{{ lang.t("DE KERN", "THE CORE") }}</span>
          <p>{{ p.context }}</p>
          <span class="eyebrow">FRANÇOIS MANYWA / PROJECT 0{{ p.id }}</span>
        </div>
        <div class="architecture-panel">
          <span class="eyebrow">{{ lang.t("TECHNISCHE BOUWSTENEN", "TECHNICAL BUILDING BLOCKS") }}</span>
          @for (tech of p.stack.slice(0, 4); track tech; let i = $index) {
            <div>
              <span>0{{ i + 1 }}</span
              ><strong>{{ tech }}</strong
              ><span><ui-arrow /></span>
            </div>
          }
          <span class="panel-caption"
            >{{ lang.t("Schematische presentatie van de gebruikte stack.", "An overview of the technology stack.") }}</span
          >
        </div>
      </div>
      <section class="detail-story second-story">
        <span class="eyebrow">02 / {{ lang.t("UITWERKING", "IMPLEMENTATION") }}</span>
        <div>
          <h2 reveal>{{ p.sections[1].title }}</h2>
          <p>{{ p.sections[1].body }}</p>
          <h3>{{ lang.t("Wat dit project omvat", "What this project includes") }}</h3>
          <ul class="deliverables">
            @for (item of p.deliverables; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </div>
      </section>
      @for (section of p.sections.slice(2); track section.title; let i = $index) {
        <section class="detail-story additional-story">
          <span class="eyebrow">0{{ i + 3 }} / {{ lang.t("VERDIEPING", "IN DETAIL") }}</span>
          <div><h2 reveal>{{ section.title }}</h2><p>{{ section.body }}</p></div>
        </section>
      }
      <div class="next-project">
        <span class="eyebrow">{{ lang.t("VOLGEND PROJECT", "NEXT PROJECT") }} / 0{{ next().id }}</span
        ><a [routerLink]="'/work/' + next().slug"
          ><span
            >{{ next().line1 }}<br /><i>{{ next().line2 }}</i></span
          ><span><ui-arrow /></span></a
        ><a routerLink="/work" class="back-link"><ui-arrow direction="left" /> {{ lang.t("Terug naar alle projecten", "Back to all projects") }}</a>
      </div>
    </article>
  }`,
})
export class ProjectComponent implements OnDestroy {
  route = inject(ActivatedRoute);
  lang = inject(LanguageService);
  selected = signal(projects[0]);
  project = computed(() => this.lang.project(this.selected()));
  next = computed(() => this.lang.project(projects[(projects.indexOf(this.selected()) + 1) % projects.length]));
  images = galleries;
  websites = liveWebsites;
  sub: Subscription;
  constructor() {
    this.sub = this.route.paramMap.subscribe((m) => {
      const p = projects.find((p) => p.slug === m.get("slug")) || projects[0];
      this.selected.set(p);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
@Component({
  selector: "about-page",
  standalone: true,
  imports: [ArrowComponent, RouterLink, RevealDirective],
  template: `<section class="about-page portrait-about">
    <div class="about-backdrop" aria-hidden="true">
      <img src="/assets/francois-portrait.jpg" alt="" width="1368" height="1824" fetchpriority="high" decoding="async" />
    </div>
    <div class="about-content">
    <header class="about-portrait-intro">
    <span class="eyebrow">{{ lang.t("DE PERSOON ACHTER DE CODE", "THE PERSON BEHIND THE CODE") }}</span>
    <h1 reveal>
      {{ lang.t("Ik ben François.", "I am François.") }}<br />{{ lang.t("Ik denk in structuren,", "I think in structures,") }}<br />{{ lang.t("maar blijf", "and stay") }}
      <span>{{ lang.t("nieuwsgierig.", "curious.") }}</span>
    </h1>
    <div class="portrait-caption"><span>FRANÇOIS MANYWA</span><span>{{ lang.t('SOFTWAREONTWIKKELAAR · ANTWERPEN', 'SOFTWARE DEVELOPER · ANTWERP') }}</span></div>
    </header>
    <div class="about-intro">
      <span class="eyebrow">{{ lang.t("ANTWERPEN, BELGIË", "ANTWERP, BELGIUM") }}</span>
      <p>
        {{ lang.t("Junior softwareontwikkelaar met een focus op .NET backend en full stack. Ik vind het interessant hoe een idee verandert in een datamodel, een API en uiteindelijk iets dat iemand kan gebruiken.", "A junior software developer focused on .NET backend and full stack. I am interested in how an idea becomes a data model, an API and eventually something people can use.") }}
      </p>
    </div>
    <div class="about-columns">
      <section>
        <span class="eyebrow">01 / {{ lang.t("OPLEIDING", "EDUCATION") }}</span>
        <h2>{{ lang.t("De basis.", "The foundation.") }}</h2>
        <h3>{{ lang.t("Toegepaste Informatica", "Applied Computer Science") }}</h3>
        <p>
          {{ lang.t("AP Hogeschool Antwerpen", "AP University of Applied Sciences Antwerp") }}<br />2023–2026<br />{{ lang.t("Specialisatie Software ·", "Software specialisation ·") }}
          minor Maker
        </p>
        <p>
          {{ lang.t("Mijn projecten verbinden softwareontwikkeling met analyse, ontwerp en praktische samenwerking.", "My projects connect software development with analysis, design and practical collaboration.") }}
        </p>
      </section>
      <section>
        <span class="eyebrow">02 / {{ lang.t("ERVARING", "EXPERIENCE") }}</span>
        <h2>{{ lang.t("In de praktijk.", "In practice.") }}</h2>
        <h3>{{ lang.t("Stage bij Tillit", "Internship at Tillit") }}</h3>
        <p>{{ lang.t("Software Developer · vanaf februari 2026", "Software Developer · since February 2026") }}</p>
        <p>
          {{ lang.t("Ik werk mee aan een GenAI-platform voor het bevragen van bedrijfsdata in natuurlijke taal. Van een technische blueprint tot .NET-functionaliteit, React-schermen, beveiliging en tests.", "I contribute to a GenAI platform for querying business data in natural language. From a technical blueprint to .NET features, React interfaces, security and tests.") }}
        </p>
        <a routerLink="/work/tillit-genai" class="serif-link"
          >{{ lang.t("Het project bekijken", "View the project") }} <ui-arrow /></a
        >
      </section>
      <section>
        <span class="eyebrow">03 / {{ lang.t("WERKWIJZE", "APPROACH") }}</span>
        <h2>{{ lang.t("Eerst begrijpen.", "Understand first.") }}<br />{{ lang.t("Dan bouwen.", "Then build.") }}</h2>
        <p>
          {{ lang.t("Ik vertaal requirements naar schermflows, datamodellen en architectuurdiagrammen. Daarna werk ik stap voor stap aan een oplossing die begrijpelijk en onderhoudbaar blijft.", "I translate requirements into screen flows, data models and architecture diagrams. Then I build a solution step by step, keeping it understandable and maintainable.") }}
        </p>
        <p>
          {{ lang.t("Ik leer graag bij, communiceer duidelijk en werk graag samen in kleine en internationale teams.", "I enjoy learning, communicating clearly and collaborating in small and international teams.") }}
        </p>
      </section>
    </div>
    <div class="about-end">
      <p>{{ lang.t("Naast de code?", "Beyond the code?") }}</p>
      <h2>{{ lang.t("Voetbal. Reizen.", "Football. Travel.") }}<br /><i>{{ lang.t("En nog een side project.", "And another side project.") }}</i></h2>
      <a routerLink="/play" class="serif-link">{{ lang.t("Mijn verkenningen", "My explorations") }} <ui-arrow /></a>
    </div>
    </div>
  </section>`,
})
export class AboutComponent { lang = inject(LanguageService); }
@Component({
  selector: "play-page",
  standalone: true,
  imports: [ArrowComponent, RevealDirective, RouterLink, VisualComponent],
  template: `<section class="play-page">
    <div class="play-heading">
      <span class="eyebrow">{{ lang.t("KLEINE PROJECTEN, NIEUWE IDEEËN", "SMALL PROJECTS, NEW IDEAS") }}</span>
      <h1>PLAY<span>ground.</span></h1>
      <p>
        {{ lang.t("Ruimte om iets uit te proberen.", "Room to try something new.") }}<br />{{ lang.t("Mobiele ideeën en een wereld in pixels.", "Mobile ideas and a world in pixels.") }}
      </p>
    </div>
    <div class="experiment-grid">
      @for (e of experiments; track e.n) {
        <article class="experiment experiment-{{ e.kind }}">
          <a class="experiment-art-link" [routerLink]="'/work/' + e.slug" [attr.aria-label]="lang.t('Bekijk ', 'View ') + e.name">
            <project-visual [id]="e.projectId" />
          </a>
          <div class="experiment-caption">
            <span>{{ e.n }}</span>
            <div>
              <h3><a [routerLink]="'/work/' + e.slug">{{ e.name }} <ui-arrow /></a></h3>
              <p>{{ e.body }}</p>
            </div>
          </div>
        </article>
      }
    </div>
    <section class="physics-section" [attr.aria-label]="lang.t('Speelse interactieve cirkels', 'Playful interactive circles')">
      <div class="physics-copy">
        <h2>{{ lang.t("Een beetje", "A little") }} <i>{{ lang.t("speelruimte.", "room to play.") }}</i></h2>
        <p>{{ lang.t("Beweeg je cursor tussen de cirkels.", "Move your cursor between the circles.") }}</p>
        <button type="button" (click)="toggle()">
          {{ paused() ? lang.t("Animatie hervatten", "Resume animation") : lang.t("Animatie pauzeren", "Pause animation") }}
        </button>
      </div>
      <div class="physics-canvas" #canvasHost aria-hidden="true"></div>
    </section>
  </section>`,
})
export class PlayComponent implements AfterViewInit, OnDestroy {
  lang = inject(LanguageService);
  get experiments() { return experiments.map(e => ({...e, name: this.lang.project(projects.find(p => p.id === e.projectId)!).title, body: this.lang.en() ? ({6: 'A mobile lending app with distance search, a map and chat.',7: 'Sightings on a map, with photo uploads and local storage.',9: 'A 2D platform game with custom collision logic, enemies, power-ups and forest levels.'} as Record<number,string>)[e.projectId] : e.body})); }
  el = inject(ElementRef);
  paused = signal(false);
  private observer?: IntersectionObserver;
  private dispose?: () => void;
  private playing = false;
  private control?: (run: boolean) => void;
  private destroyed = false;
  toggle() {
    this.paused.update((v) => !v);
    this.control?.(this.playing && !this.paused() && !reduced());
  }
  async ngAfterViewInit() {
    const host = this.el.nativeElement.querySelector(
      ".physics-canvas",
    ) as HTMLElement;
    if (reduced()) {
      host.classList.add("static-balls");
      return;
    }
    const M = await import("matter-js");
    if (this.destroyed) return;
    const { Engine, Render, Runner, Bodies, Composite, Body, Events } =
      M.default || M;
    const engine = Engine.create();
    const w = host.clientWidth,
      h = host.clientHeight;
    const render = Render.create({
      element: host,
      engine,
      options: {
        width: w,
        height: h,
        wireframes: false,
        background: "transparent",
        pixelRatio: Math.min(devicePixelRatio, 2),
      },
    });
    const runner = Runner.create();
    const palette = ["#ff3e39", "#a35bc7", "#fea800", "#ee95b1"];
    const balls = Array.from({ length: 10 }, (_, i) =>
      Bodies.circle(
        40 + ((i % 5) * (w - 80)) / 5,
        35 + Math.floor(i / 5) * 70,
        Math.min(w / 12, 40) + (i % 3) * 6,
        {
          restitution: 0.75,
          friction: 0.02,
          render: { fillStyle: palette[i % 4] },
        },
      ),
    );
    let walls: any[] = [];
    const boundaries = () => {
      Composite.remove(engine.world, walls);
      const width = host.clientWidth,
        height = host.clientHeight;
      Render.setSize(render, width, height);
      walls = [
        Bodies.rectangle(width / 2, height + 30, width + 100, 60, {
          isStatic: true,
        }),
        Bodies.rectangle(-30, height / 2, 60, height * 3, { isStatic: true }),
        Bodies.rectangle(width + 30, height / 2, 60, height * 3, {
          isStatic: true,
        }),
        Bodies.rectangle(width / 2, -100, width, 60, { isStatic: true }),
      ];
      Composite.add(engine.world, walls);
    };
    Composite.add(engine.world, balls);
    boundaries();
    let mouse = { x: -1000, y: -1000 };
    const move = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const leave = () => (mouse = { x: -1000, y: -1000 });
    host.addEventListener("pointermove", move);
    host.addEventListener("pointerleave", leave);
    Events.on(engine, "beforeUpdate", () => {
      for (const b of balls) {
        const dx = b.position.x - mouse.x,
          dy = b.position.y - mouse.y,
          d = Math.hypot(dx, dy);
        if (d < 140 && d > 0)
          Body.applyForce(b, b.position, {
            x: (dx / d) * 0.003,
            y: (dy / d) * 0.003,
          });
      }
    });
    let running = false;
    this.control = (run) => {
      if (run === running) return;
      running = run;
      if (run) {
        Runner.run(runner, engine);
        Render.run(render);
      } else {
        Runner.stop(runner);
        Render.stop(render);
      }
    };
    this.observer = new IntersectionObserver((entries) => {
      this.playing = entries[0].isIntersecting;
      this.control?.(
        this.playing && !this.paused() && !document.hidden && !reduced(),
      );
    });
    this.observer.observe(host);
    const visibility = () =>
      this.control?.(
        this.playing && !this.paused() && !document.hidden && !reduced(),
      );
    document.addEventListener("visibilitychange", visibility);
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    preference.addEventListener("change", visibility);
    const resize = new ResizeObserver(boundaries);
    resize.observe(host);
    this.dispose = () => {
      this.control?.(false);
      resize.disconnect();
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", visibility);
      preference.removeEventListener("change", visibility);
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }
  ngOnDestroy() {
    this.destroyed = true;
    this.observer?.disconnect();
    this.dispose?.();
  }
}
@Component({
  selector: "not-found",
  standalone: true,
  imports: [ArrowComponent, RouterLink],
  template: `<section class="not-found">
    <p class="eyebrow">{{ lang.t("404 / NIET GEVONDEN", "404 / NOT FOUND") }}</p>
    <h1>{{ lang.t("Even de weg", "A little") }} <i>{{ lang.t("kwijt.", "lost.") }}</i></h1>
    <a routerLink="/work">{{ lang.t("Terug naar mijn werk", "Back to my work") }} <ui-arrow /></a>
  </section>`,
})
export class NotFoundComponent { lang = inject(LanguageService); }
