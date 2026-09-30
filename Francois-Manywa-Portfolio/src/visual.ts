import { Component, Input, inject } from '@angular/core';
import { galleries, liveWebsites } from './media';
import { LanguageService } from './language';
@Component({
  selector: 'project-visual', standalone: true,
  template: `<div class="project-visual visual-{{ id }}" [class.secondary]="secondary" [class.website-capture]="isScreenshot" [class.interface-capture]="!!image.viewport" [style.--capture-ratio]="ratio">
    @if (image.viewport; as v) {
      <div class="interface-window" [style.aspect-ratio]="ratio">
        <img [src]="'/assets/' + image.src" [attr.loading]="eager ? 'eager' : 'lazy'" decoding="async" [width]="v.fullWidth" [height]="v.fullHeight" [style.width.%]="v.fullWidth / v.width * 100" [style.left.%]="-v.x / v.width * 100" [style.top.%]="-v.y / v.height * 100" [alt]="lang.t(image.nl, image.en)" />
      </div>
    } @else {
      <img [src]="'/assets/' + image.src" [attr.loading]="eager ? 'eager' : 'lazy'" decoding="async" [attr.width]="isScreenshot ? 1348 : 1536" [attr.height]="isScreenshot ? 900 : 1024" [alt]="lang.t(image.nl, image.en)" />
    }
  </div>`,
})
export class VisualComponent {
  lang = inject(LanguageService);
  @Input() id = 1;
  @Input() index = 0;
  @Input() secondary = false;
  @Input() eager = false;
  get image() { return galleries[this.id][this.index]; }
  get isScreenshot() { return !!liveWebsites[this.id]; }
  get ratio() { const v = this.image.viewport; return v ? `${v.width} / ${v.height}` : null; }
}
