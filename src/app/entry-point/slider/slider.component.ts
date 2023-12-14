import { Component } from '@angular/core';
import 'bootstrap/js/dist/carousel.js';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  images = [
    '../../assets/images/carousel-img/clothes1400x400.jpg',
    '../../assets/images/carousel-img/laptop1400x400.jpg',
    '../../assets/images/carousel-img/watch1400x400.jpg'
  ];
}
