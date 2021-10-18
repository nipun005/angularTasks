import { Component, OnInit } from '@angular/core';
import { ProductFetchService } from './service/product-fetch.service';
import { Products } from './service/products';

@Component({
  selector: 'app-ecommerce-page',
  templateUrl: './ecommerce-page.component.html',
  styleUrls: ['./ecommerce-page.component.css']
})
export class EcommercePageComponent implements OnInit {

  displayGrid = true;
  displayList = false;
  productArray: Products[] = [];
  constructor(private service: ProductFetchService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((data: Products[])=> {
      this.productArray = data;
     this.service.setProductData(this.productArray);
    })
   
  }

  changeView(selectedValue: string) {
    if(selectedValue === "listview") {
      this.displayGrid = false;
      this.displayList = true;
    }
    if(selectedValue === "gridview") {
      this.displayGrid = true;
      this.displayList = false;
    }
  }

  filterPrice(priceSelected: string) {
    if(priceSelected==="allprices") {
      this.productArray = this.service.getProductData();
    }
    if(priceSelected==="categoryone") {
      this.productArray = this.service.getProductData();
      this.productArray = this.productArray.filter((product)=> {
        return product.price < 1000;
      })
    }
    if(priceSelected==="categorytwo") {
      this.productArray = this.service.getProductData();
      this.productArray = this.productArray.filter((product)=> {
        return product.price >= 1000 && product.price < 5000;
      })
    }
    if(priceSelected==="categorythree") {
      this.productArray = this.service.getProductData();
      this.productArray = this.productArray.filter((product)=> {
        return product.price >= 5000 && product.price < 10000;
      })
    }
    if(priceSelected==="categoryfour") {
      this.productArray = this.service.getProductData();
      this.productArray = this.productArray.filter((product)=> {
        return product.price >= 10000 && product.price < 20000;
      })
    }
    if(priceSelected==="categoryfive") {
      this.productArray = this.service.getProductData();
      this.productArray = this.productArray.filter((product)=> {
        return product.price >= 20000;
      })
    }
  }

}
