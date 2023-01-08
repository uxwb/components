import { AfterViewInit, Component, ContentChild, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tmpl',
  templateUrl: './tmpl.component.html',
  styleUrls: ['./tmpl.component.scss'],

})
export class TmplComponent implements AfterViewInit {

  @ContentChild('code', { descendants: true }) code!: ElementRef;

  @ContentChild('preview', { descendants: true }) preview!: ElementRef;

  @ViewChild('code', { static: false }) vcc!: ElementRef;

  @ViewChild('preview', { static: false }) vcp!: ElementRef;

  constructor(
    protected renderer: Renderer2,
  ) {
  }

  ngAfterViewInit() {
    const data = (this.code.nativeElement as HTMLElement).outerHTML
      .replace('<pre>', '')
      .replace('</pre>', '')
      .replace(new RegExp('&lt;', 'g'), '<')
      .replace(new RegExp('&gt;', 'g'), '>')
      .replace(/[ ]{25}/ig, ' ') || '';
    const rows = data.match(/\n/ig)?.length || 3;

    this.renderer.setProperty( this.vcc.nativeElement, 'value', data );
    this.renderer.setAttribute( this.vcc.nativeElement, 'rows', rows.toString() );

    this.renderer.appendChild(this.vcp.nativeElement, this.preview.nativeElement);
  }

}
