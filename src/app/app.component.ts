import { Component } from '@angular/core';
import { List} from "../repository/productlist"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-1';
  products = List 
}
