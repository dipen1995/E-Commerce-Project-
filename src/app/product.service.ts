import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  addProduct: any;
  getProductById: any;
  deleteProductById: any;
  getProducts() {
    throw new Error('Method not implemented.');
  }

  private products: Product[];

  constructor() {
      this.products = [
          { id: '100', name: "Men'sShirt", price: 94.5, photo: 'shirt.jpg' },
          { id: '101', name: "Glidan Men's T-Shirt", price: 20, photo: 't-shirt.jpg' },
          { id: '102', name: 'Running Shoe', price: 100, photo: 'shoe.jpg' }
      ];
  }

  findAll(): Product[] {
    return this.products;
}

find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
}

private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id == id) {
            return i;
        }
    }
    return -1;
}
/*
  // URL to web api
  private productUrl = 'http://localhost:3001/api/products';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl)
  }

  getProductById(id: any): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3001/api/productbyid/${id}`)
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productUrl, product, httpOptions);
  }

  updateProductById(product: Product, id: any): Observable<Product> {
    return this.http.put<Product>(`${this.productUrl}/${id}`, product, httpOptions);
  }

  deleteProductById(id: any): Observable<Product> {
    return this.http.delete<Product>(`${this.productUrl}/${id}`)
  }

*/

}