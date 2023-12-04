import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, Inject, numberAttribute } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { toArray } from 'rxjs';
import { Product } from 'src/app/MyClass/product';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit{
  product : any = [];
  count: number = 1;
   total: number = 0
  //  productIds!: Number[]  
   purchaseid!: any
  // dlt: any[] = []

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient){
    
  }

  ngOnInit(): void {
    console.log(this.data);
    
    this.product = this.data.items
    const tr = this.product.map((result: any) => {
     let tr = (result.productQuantity * result.productPrice);
      
      return tr
    })
    this.total += tr
    console.log(this.total);
    
  }

  

  onClickDelete(productId: number){
    const product1 = this.product.find((a: any) => {return a.productId === productId})
    if(product1.productQuantity == 1) {
      let index = this.product.indexOf(product1);
      this.product.splice(index,1);
      this.ngOnInit
    } else { 
      product1.productQuantity--;
      this.ngOnInit
    }
    
  }
  onClickPurchase(){
    //  purchaseid: Number 
    let purchase = {
      customerId: Number = this.data.customer.customerId,
      date: new Date(),
    }

     this.http.post("http://localhost:8080/purchase/save",purchase).subscribe((result: any) => {
      this.purchaseid = result.purchaseid
      // return result.purchaseid
      
      this.product.map((result: any) => {
       let purchaseItem = {
        productId: Number = result.productId,
        productQuantity: Number = result.productQuantity,
        purchaseid: Number = this.purchaseid
        }
        this.http.post("http://localhost:8080/item/save", purchaseItem).subscribe(res => {
          console.log(res);
          this.product = [];
        })
      })
    
    })
    
    console.log(this.purchaseid);
    }

    
}

