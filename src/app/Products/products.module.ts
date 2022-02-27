import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchFilter } from 'src/pipes/searchfilter.pipe';
import { ProductListComponent } from './ProductList/products.component';



@NgModule({
  declarations: [
    ProductListComponent,SearchFilter
  ],
  imports: [CommonModule,FormsModule],
  providers: [],
  bootstrap: [ProductListComponent],
  exports : [ProductListComponent]
})
export class ProductsModule { }
