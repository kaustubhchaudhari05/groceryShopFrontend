import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from "@angular/common/http";
import { Employee } from '../MyClass/employee';
import { Customer } from '../MyClass/customer';
import { Category } from '../MyClass/category';
import { Product } from '../MyClass/product';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private http: HttpClient) { }

  saveEmployee(employee: Employee): Observable<any> {
    return this.http.post<any>('http://localhost:8080/employee/save', employee);
  }

  saveCustomer(customer: Customer): Observable<any> {
    return this.http.post<any>('http://localhost:8080/customer/save',customer);
  }

  getAdmin():  Observable<any> {
    return this.http.get<any>('http://localhost:8080/admin/getp');
  }

  getEmployee(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/employee/getp');
  }

  getCustomer(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/customer/getp');
  }

  addCategory(category: Category): Observable<any> {
    return this.http.post<any>('http://localhost:8080/category/save',category);
  }

  getCategory(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/category/get');
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post<any>('http://localhost:8080/product/save', product);
  }

  getProduct(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/product/get');
  }
}
