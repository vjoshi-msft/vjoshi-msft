import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesCompnent } from './courses.component';
import { UserListComponent } from './user-list/user-list.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { CountfiveComponent } from './countfive/countfive.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesCompnent,
    UserListComponent,
    CounterComponent,
    ChildComponent,
    CountfiveComponent
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