import { Component } from '@angular/core';
import { List} from "../../../repository/productlist"

@Component({
  selector: 'app-product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductListComponent {
  searchText : string =''
  title = 'task-1';
  products = List 
}
