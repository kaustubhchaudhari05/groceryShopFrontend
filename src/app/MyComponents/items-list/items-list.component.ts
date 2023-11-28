import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit{
  product : any = [];
  count: number = 1;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any){
  }

  ngOnInit(): void {
    console.log(this.data.items);
    
    
    for(let i=0; i<this.data.items.length; i++){
      // this.data.items[i].productQuantity =0;
      if(this.data.items[i].productId == this.data.items[i+1].productId) {
        this.count++; 
        // let x =delete this.data.items[i];
        // console.log(x);
        this.data.items[i].productQuantity = this.count;
      } else {
        this.data.items[i].productQuantity = this.count;
      }
      console.log(this.count);
    }
    
  }

  onClickPurchase(){

  }

  onClickDelete(productId: number){
    console.log(productId);
    
  }

}
