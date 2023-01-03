import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClassDirective } from './class.directive';
import { ContentDirective } from './content.directive';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    ClassDirective,
    ContentDirective,
    ListComponent,
    InputComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    ClassDirective,
    ContentDirective,
    ListComponent,
    InputComponent,
  ],
})
export class UxwbComponentsModule { }
