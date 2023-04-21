import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './_components/child/child.component';
import { ParentsComponent } from './_components/parents/parents.component';
import { EmployeeService } from './services/employee.service';
import {HttpClientModule}  from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
}
)
export class AppModule { }