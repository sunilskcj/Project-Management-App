import { Component } from '@angular/core';
import { Products } from 'src/models/products';
import { ProductService } from 'src/service/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductListComponent {
  searchText : string =''
  title = 'task-1';
  choice  = 1 ;
  products : Products[] ;

  changeChoice(ch: number) {
    this.choice = ch
  }
  constructor(private productsrv : ProductService){
    this.products = this.productsrv.getProducts()
  }
}
