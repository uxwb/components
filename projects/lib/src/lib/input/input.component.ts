import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'uxwb-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() title?: string;

  @Input() data: string = '';

  @Output() event: EventEmitter<string> = new EventEmitter();

  do($e: FocusEvent): void {
    this.event.emit(($e.target as HTMLInputElement).value);
  }
}
