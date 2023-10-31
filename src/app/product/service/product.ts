import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInterface } from '../types/product.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductInterface[]> {
    const productsAPI = environment.apiEndpoint + 'products';
    return this.http.get<ProductInterface[]>(productsAPI);
  }
}
