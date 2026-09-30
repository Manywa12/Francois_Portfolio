import {
  Injectable,
  Directive,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  inject,
} from "@angular/core";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
gsap.registerPlugin(ScrollTrigger);
export const reduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
@Injectable({ providedIn: "root" })
export class MotionService implements OnDestroy {
  lenis?: Lenis;
  private tick = (time: number) => this.lenis?.raf(time * 1000);
  private preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  private change = () => {
    this.stop();
    this.start();
    ScrollTrigger.refresh();
  };
  constructor() {
    this.start();
    this.preference.addEventListener("change", this.change);
  }
  start() {
    if (!reduced()) {
      this.lenis = new Lenis({
        duration: 1.08,
        smoothWheel: true,
        syncTouch: false,
        anchors: true,
      });
      this.lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(this.tick);
      gsap.ticker.lagSmoothing(0);
    }
  }
  stop() {
    gsap.ticker.remove(this.tick);
    this.lenis?.destroy();
    this.lenis = undefined;
  }
  scroll(y: number) {
    if (this.lenis) this.lenis.scrollTo(y, { immediate: true });
    else window.scrollTo(0, y);
  }
  ngOnDestroy() {
    this.stop();
    this.preference.removeEventListener("change", this.change);
  }
}
@Directive({ selector: "[reveal]", standalone: true })
export class RevealDirective implements AfterViewInit, OnDestroy {
  el = inject(ElementRef);
  ctx?: gsap.Context;
  ngAfterViewInit() {
    if (reduced()) return;
    this.ctx = gsap.context(() => {
      gsap.from(this.el.nativeElement, {
        y: 32,
        opacity: 0.28,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: this.el.nativeElement,
          start: "top 90%",
          once: true,
        },
      });
    });
  }
  ngOnDestroy() {
    this.ctx?.revert();
  }
}
