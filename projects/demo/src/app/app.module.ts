import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UxwbComponentsModule } from '../../../lib/src/lib/components.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UxwbComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
