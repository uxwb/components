import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'uxwb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  badgeClass = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-info', 'bg-warning', 'bg-danger'];

  curr?:number;

  @Input() title?: string;

  @Input() list: ListModel[] = [];

  @Output() event: EventEmitter<ListModel> = new EventEmitter();

  do(i: number, v: ListModel): void {
    this.curr = i;
    this.event.emit(v);
  }

  trackFn(i: number, v: ListModel): any {
    return v.title;
  }
}

export class ListModel {
  title!: string;

  description?: string;

  meta: any;

  badge?: string[];
}
