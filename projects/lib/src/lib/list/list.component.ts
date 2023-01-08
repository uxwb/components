import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Colors } from '../core/variables';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ListStyle = '' | 'line';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export interface ListData {
  key: string;

  name: string;

  desc?: string;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'uxwb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  key?:string;

  @Input() color: Colors = '';

  @Input() style: ListStyle = '';

  @Input() data: ListData[] = [];

  @Output() selected = new EventEmitter<string>();

  emitData(key: string): void {
    this.key = key;
    this.selected.emit(key);
  }
}
