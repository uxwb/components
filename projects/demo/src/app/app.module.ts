import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UxwbComponentsModule } from '../../../lib/src/lib/components.module';
import { AppComponent } from './app.component';
import { TmplComponent } from './tmpl/tmpl.component';

@NgModule({
  declarations: [
    AppComponent,
    TmplComponent,
  ],
  imports: [
    BrowserModule,
    UxwbComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
