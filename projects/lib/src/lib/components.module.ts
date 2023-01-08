import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashPipe } from './core/pipes';
import { ClassDirective } from './directives';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { TabComponent, TabDirective } from './tab/tab.component';

@NgModule({
  declarations: [
    ClassDirective,
    ListComponent,
    InputComponent,
    TabComponent,
    TabDirective,
    DashPipe,
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    ClassDirective,
    ListComponent,
    InputComponent,
    TabComponent,
    TabDirective,
  ],
})
export class UxwbComponentsModule { }
