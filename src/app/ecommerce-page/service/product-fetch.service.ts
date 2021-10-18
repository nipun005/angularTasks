import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductFetchService {

  productData: Products[] = [];
  constructor(private http: HttpClient) { }

  getData(): Observable<Products[]> {
    return this.http.get<Products[]>("./../../../assets/products.json");
  }

  setProductData(data: Products[]){
   this.productData = data;
  }

  getProductData() {
    return this.productData;
  }
}
