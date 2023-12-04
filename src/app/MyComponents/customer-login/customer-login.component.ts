import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/MyClass/category';
import { Product } from 'src/app/MyClass/product';
import { DbserviceService } from 'src/app/MyService/dbservice.service';
import { AddItemsComponent } from '../add-items/add-items.component';
import { HttpClient } from '@angular/common/http';
import { ItemsListComponent } from '../items-list/items-list.component';
import { ListKeyManager } from '@angular/cdk/a11y';
import { elementAt } from 'rxjs';
import { MatButton } from '@angular/material/button';
import { Customer } from 'src/app/MyClass/customer';
import { AuthService } from 'src/app/MyService/auth.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  customer!: Customer;
  panelOpenState = false;
  category : Category[] = [] ;
  categorys: any;
  product: any;
  productsToBeAdded!: Product;
  list: Product[] = [];
  unique: Product[] =[];
  count!: number;


  constructor(private db: DbserviceService, public dialog: MatDialog, private http: HttpClient, private auth: AuthService){}

  ngOnInit(): void {
    this.db.getCategory().subscribe(result => {
      this.categorys = result
     })

     this.db.getProduct().subscribe(result => {
      this.product = result
     })

     this.customer = this.auth.getUserDetails();
    //  console.log(this.customer);
     
  }

  openProductTable(categoryId: number){
    this.http.get('http://localhost:8080/product/'+categoryId).subscribe(result => {
      this.product = result
    })
  }

  addToList(productId: any) {
    const product = this.http.get<Product>('http://localhost:8080/product/get/'+productId).subscribe(result => {
      this.productsToBeAdded = result;
      this.productsToBeAdded.productQuantity=0
      if(!this.list[0]){
        this.productsToBeAdded.productQuantity++;
        this.list.push(this.productsToBeAdded)
        // this.list.length++
      } else{
          const productName = this.list.map(product => {return product.productName})
          if(!((productName).includes(this.productsToBeAdded.productName))){
            this.productsToBeAdded.productQuantity++
            this.list.push(this.productsToBeAdded);
          } else {
            this.list.map(result => {
              if(result.productName === this.productsToBeAdded.productName){
                result.productQuantity++
              }
            })
          }
          
        }
      })
      
    }

  openList(){
    
    const dialogRef = this.dialog.open(ItemsListComponent, {
      data: {
        items: this.list,
        customer: this.customer
      }
    });
  }
  
}
