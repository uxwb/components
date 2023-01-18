import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorsShort } from '../core/variables';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ListStyle = 'box' | 'btn' | 'line';

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
})
export class ListComponent {
  @Input() key: string = '';

  @Output() keyChange = new EventEmitter<string>();

  @Input() color: ColorsShort = 'secondary';

  @Input() style: ListStyle = 'box';

  @Input() data: ListData[] = [];

  @Output() selected = new EventEmitter<string>();

  emitData(key: string): void {
    this.key = key;
    this.keyChange.emit(key);
    this.selected.emit(key);
  }
}
