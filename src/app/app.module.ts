import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  SearchFilter } from 'src/pipes/searchfilter.pipe';

import { AppComponent } from './app.component';
import { Footer } from './Footer/footer.module';
import { HeaderModule } from './Header/header.module';
import { ProductsModule } from './Products/products.module';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,ProductsModule,HeaderModule,Footer
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
