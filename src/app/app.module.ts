import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ButtonChildComponent } from './button-child/button-child.component';
// import { DataBindingComponent } from './data-binding/data-binding.component';
import { CounterComponent } from './counter/counter.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './highlight.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './service/todo.service';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent
    // ButtonComponent,
    // ButtonChildComponent,
    // DataBindingComponent,
    // CounterComponent,
    // DirectivesComponent,
    // HighlightDirective,
    // ParentComponent,
    // ChildComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
