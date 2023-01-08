import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uxwbClass]',
})
export class ClassDirective implements OnInit {

  @Input('uxwbClass') value: string = '';

  @Input('uxwbClassList') list: string[] = [];

  constructor(private ref: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    const index = this.calc(this.value, this.list.length);
    const cls = this.list[index] || this.list[index - 1] || this.list[0];
    this.render.addClass(this.ref.nativeElement, cls);
  }

  private calc(value: string, len: number): number {
    let out = 0;
    value.split('').forEach(value1 => {
      out += value1.charCodeAt(0);
    });
    return out & len;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
