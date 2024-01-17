import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AddCarComponent,
    CarComponent
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
