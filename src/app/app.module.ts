import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './Header/header.module';
import { ProductsModule } from './Products/products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ProductsModule,HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
