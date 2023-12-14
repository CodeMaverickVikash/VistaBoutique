import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryPointRoutingModule } from './entry-point-routing.module';
import { MainComponent } from './main/main.component';
import { SliderComponent } from './slider/slider.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';


@NgModule({
  declarations: [
    MainComponent,
    SliderComponent,
    ProductCarouselComponent
  ],
  imports: [
    CommonModule,
    EntryPointRoutingModule
  ]
})
export class EntryPointModule { }
