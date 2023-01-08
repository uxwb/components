import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Colors, Delay } from '../core/variables';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type Type = 'text' | 'password' | 'color' | 'date' | 'datetime-local' | 'email' | 'number' | 'tel' | 'search';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'uxwb-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnDestroy {
  private sub$?: Subscription;

  value = '';

  buffer = '';

  changed = false;
  
  @Input() title?: string;

  @Input() color: Colors = '';

  @Input() type: Type = 'text';

  @Input()
  set data(value: string) {
    this.value = value;
    this.buffer = value;
    this.changed = false;
  }

  @Output() dataChange = new EventEmitter<string>();

  ngOnDestroy() {
    this.focusOut();
  }

  input(data: Event): void {
    this.buffer = (data.target as HTMLInputElement).value;
    this.changed = true;
  }

  private emitData(): void {
    if (this.changed) {
      this.dataChange.emit(this.buffer);
      this.value = this.buffer;
      this.changed = false;
    }
  }

  focusIn(): void {
    this.changed = false;
    this.sub$?.unsubscribe();
    this.sub$ = interval(Delay).subscribe(() => {
      this.emitData();
    });
  }

  focusOut(): void {
    this.sub$?.unsubscribe();
    this.emitData();
  }
}
