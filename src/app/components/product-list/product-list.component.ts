import { Component, OnInit } from "@angular/core";
import { IProduct } from "../../models/IProduct";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  public selectedProduct: IProduct;
  public products: IProduct[];
  constructor(
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe(products => (this.products = products));
    // this.selectedProduct = this.products[0];
  }
}
