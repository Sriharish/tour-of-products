import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { IProduct } from "../../models/IProduct";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  public product: IProduct;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {

  }

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe((product: IProduct) => this.product = product);
  }

  private goBack() {
    this.location.back();
  }
}
