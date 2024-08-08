import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ButtonChildComponent } from './button-child/button-child.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CounterComponent } from './counter/counter.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonChildComponent,
    DataBindingComponent,
    CounterComponent,
    DirectivesComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
