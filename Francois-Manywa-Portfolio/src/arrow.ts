import { Component, Input } from '@angular/core';

/** Decorative vector icon: independent of system fonts and emoji substitution. */
@Component({
  selector: 'ui-arrow',
  standalone: true,
  host: { 'aria-hidden': 'true', '[attr.data-direction]': 'direction' },
  template: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" stroke-width="1.8" stroke-linecap="square" stroke-linejoin="miter" /></svg>`,
  styles: [`
    :host { display: inline-block; width: .85em; height: .85em; vertical-align: -.04em; line-height: 1; flex-shrink: 0; }
    svg { display: block; width: 100%; height: 100%; overflow: visible; }
    :host([data-direction="left"]) svg { transform: rotate(-135deg); }
    :host([data-direction="up"]) svg { transform: rotate(-45deg); }
    :host([data-direction="down"]) svg { transform: rotate(135deg); }
  `],
})
export class ArrowComponent {
  @Input() direction: 'diagonal' | 'left' | 'up' | 'down' = 'diagonal';
}
