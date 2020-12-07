import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/IProduct';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((products: IProduct[]) => {
      this.products = products.slice(1, 5);
    });
  }

}
