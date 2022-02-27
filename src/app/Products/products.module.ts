import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './ProductList/products.component';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [CommonModule],
  providers: [],
  bootstrap: [ProductListComponent],
  exports : [ProductListComponent]
})
export class ProductsModule { }
