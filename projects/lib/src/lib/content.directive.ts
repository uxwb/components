import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uxwbContent]',
})
export class ContentDirective implements OnInit {

  @Input('uxwbContent') value?: string;

  constructor(private ref: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    if (this.value && this.value.length > 0) {
      this.render.addClass(this.ref.nativeElement, 'uxwb-block__title');
      this.render.setAttribute(this.ref.nativeElement, 'ctx', this.value);
    }
  }

}
