// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalaryCalculatorComponent } from './components/salary/salary-calculator.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SalaryCalculatorComponent
  ],
  providers: [],
  bootstrap: [SalaryCalculatorComponent]
})
export class AppModule { }
