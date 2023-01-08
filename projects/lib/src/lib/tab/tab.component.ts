import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren, Directive,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  Renderer2, TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Colors } from '../core/variables';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type TabStyle = '' | 'btn' | 'line';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ng-template[tab]',
})
export class TabDirective {
  @Input() tab!: string;

  constructor(public template: TemplateRef<any>) {
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'uxwb-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements AfterContentInit, AfterViewInit {

  private embeddedViewRef?: EmbeddedViewRef<any>;

  curr?: string;

  tabs: string[] = [];

  @Input() default: string = '';

  @Input() color: Colors = '';

  @Input() style: TabStyle = '';

  @Output() switch: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('content', { static: false }) out!: ElementRef;

  @ContentChildren(TabDirective) contents!: QueryList<TabDirective>;

  constructor(
    private renderer2: Renderer2,
    private viewContainerRef: ViewContainerRef,
  ) {}

  ngAfterContentInit(): void {
    this.contents.forEach((item) => {
      this.tabs.push(item.tab);
    });

    if (this.tabs.indexOf(this.default) === -1) {
      this.default = this.tabs.map((v) => v).shift() || '';
    }
  }

  ngAfterViewInit(): void {
    this.setTab(this.default);
  }

  setTab(name: string): void {
    if (name === this.curr) {
      return;
    }

    this.embeddedViewRef?.detach();
    this.embeddedViewRef?.destroy();

    this.contents.forEach((item) => {
      if (item.tab === name) {
        this.embeddedViewRef = this.viewContainerRef.createEmbeddedView(item.template);
        this.embeddedViewRef.detectChanges();
        this.embeddedViewRef.rootNodes.forEach(value => {
          this.renderer2.appendChild(this.out.nativeElement, value);
        });
        
        this.curr = name;
        this.switch.emit(name);
      }
    });
  }

}
