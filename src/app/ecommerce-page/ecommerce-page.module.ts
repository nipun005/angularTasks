import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommercePageComponent } from './ecommerce-page.component';
import { ProductFetchService } from './service/product-fetch.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [EcommercePageComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ProductFetchService]
})
export class EcommercePageModule { }
