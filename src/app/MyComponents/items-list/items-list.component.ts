import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit{

  purchaseItems: any[] = []

  constructor( @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {
      // console.log(this.data);
      for(let i=0; i< this.data.length; i++){
        this.purchaseItems[i] = this.data[i]
      }
  }

}
