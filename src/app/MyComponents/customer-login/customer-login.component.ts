import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/MyClass/category';
import { Product } from 'src/app/MyClass/product';
import { DbserviceService } from 'src/app/MyService/dbservice.service';
import { AddItemsComponent } from '../add-items/add-items.component';
import { HttpClient } from '@angular/common/http';
import { ItemsListComponent } from '../items-list/items-list.component';
import { ListKeyManager } from '@angular/cdk/a11y';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  panelOpenState = false;
  category : Category[] = [] ;
  categorys: any;
  product: any;
  productsToBeAdded!: Product;
  list: Product[] = [];

  constructor(private db: DbserviceService, public dialog: MatDialog, private http: HttpClient){}

  ngOnInit(): void {
    this.db.getCategory().subscribe(result => {
      this.categorys = result
     })

     this.db.getProduct().subscribe(result => {
      this.product = result
     })
  }

  openProductTable(categoryId: number){
    this.http.get('http://localhost:8080/product/'+categoryId).subscribe(result => {
      this.product = result
    })
  }

  addToList(productId: any) {
    let count:  number = 1;
    const product = this.http.get<Product>('http://localhost:8080/product/get/'+productId).subscribe(result => {
      this.productsToBeAdded = result;
      this.productsToBeAdded.productQuantity=0
      this.list.push(this.productsToBeAdded);
    })
    
  }

  openList(){
    // this.list.map(result => {
    //   console.log(result);  
    // });
    let unqiue = [];
    this.list.forEach(element => {
      
    })

    const dialogRef = this.dialog.open(ItemsListComponent, {
      data: {
        items: this.list
      }
    });
  }
  
}
