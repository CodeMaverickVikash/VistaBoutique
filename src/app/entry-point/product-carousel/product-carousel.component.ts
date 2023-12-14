import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselComponent {
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ViewChild('carousel') carousel!: ElementRef;

  isDragging = false;
  isAutoPlay = false;
  startX = 0;
  startScrollLeft = 0;
  timeoutId: any;

  @Input('products') products: any;

  constructor() {}

  ngOnInit(): void {
    this.initCarousel();
  }

  initCarousel(): void {
    // Your initialization logic goes her

    this.autoPlay();
  }

  @HostListener('mousedown', ['$event'])
  dragStart(e: MouseEvent): void {
    this.isDragging = true;
    this.carousel.nativeElement.classList.add('dragging');
    this.startX = e.pageX;
    this.startScrollLeft = this.carousel.nativeElement.scrollLeft;
  }

  @HostListener('mousemove', ['$event'])
  dragging(e: MouseEvent): void {
    if (!this.isDragging) return;
    this.carousel.nativeElement.scrollLeft =
      this.startScrollLeft - (e.pageX - this.startX);
  }

  @HostListener('mouseup')
  dragStop(): void {
    this.isDragging = false;
    this.carousel.nativeElement.classList.remove('dragging');
  }

  @HostListener('scroll')
  infiniteScroll(): void {
    // Your infinite scroll logic goes here
    // ...
    console.log("scrll event");
  }

  @HostListener('mouseenter')
  onHover(): void {
    clearTimeout(this.timeoutId);
  }

  @HostListener('mouseleave')
  onLeave(): void {
    this.autoPlay();
  }

  autoPlay(): void {
    if (window.innerWidth < 800 || !this.isAutoPlay) return;
    this.timeoutId = setTimeout(() => {
      this.carousel.nativeElement.scrollLeft += this.firstCardWidth;
      this.autoPlay();
    }, 2500);
  }

  get firstCardWidth(): number {
    // Your logic to get the first card width goes here
    // Replace this with the actual calculation
    return this.carousel.nativeElement.querySelector('.card').offsetWidth;
  }

  moveCarouselLeftRight(e: any) {
    this.carousel.nativeElement.scrollLeft += e.currentTarget.id == "left" ? -this.firstCardWidth : this.firstCardWidth;
  }
}
