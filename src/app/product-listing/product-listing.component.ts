import { Component } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent {
  toggleHeart: boolean = false;
  products = [
    {
      name: 'Product 1',
      category: 'Category A',
      description: 'Description of Product 1',
      price: 29.99,
      image: 'https://picsum.photos/id/944/200/200',
    },
    // Add more products as needed
  ];

  

  toggle() {
    this.toggleHeart = !this.toggleHeart;
  }
}
