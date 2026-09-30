import { ArrowComponent } from "./arrow";
import { LanguageService } from "./language";
import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
@Component({
  selector: "site-footer",
  standalone: true,
  imports: [ArrowComponent, RouterLink],
  template: `<footer class="footer">
    <div class="see-you" aria-label="See you">
      <span>S</span><span>E</span><span>E</span><span>Y</span><span>O</span
      ><span>U</span>
    </div>
    <div class="footer-grid">
      <h2>{{ lang.t("Tot binnenkort.", "See you soon.") }}</h2>
      <div>
        <p>
          {{ lang.t("Een vraag, een idee of een plek in je team?", "A question, an idea or a place on your team?") }}<br />{{ lang.t("Ik hoor graag van je.", "I would love to hear from you.") }}
        </p>
        <a class="email" href="mailto:frans.zawi@gmail.com"
          >frans.zawi&#64;gmail.com <ui-arrow /></a
        >
      </div>
      <div class="footer-links">
        <a
          href="https://www.linkedin.com/in/françois-manywa-417910364/"
          target="_blank"
          rel="noopener noreferrer"
          >LinkedIn <ui-arrow /></a
        ><a routerLink="/about">{{ lang.t("Over mij", "About me") }} <ui-arrow /></a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>FRANÇOIS MANYWA · {{ lang.t("ANTWERPEN, BE", "ANTWERP, BE") }}</span><span>© 2026</span
      ><a routerLink="/">{{ lang.t("Terug naar home", "Back to home") }} <ui-arrow direction="up" /></a>
    </div>
  </footer>`,
})
export class FooterComponent { lang = inject(LanguageService); }
