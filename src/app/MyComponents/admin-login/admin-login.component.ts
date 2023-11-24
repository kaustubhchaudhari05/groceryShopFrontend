import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { Category } from 'src/app/MyClass/category';
import { DbserviceService } from 'src/app/MyService/dbservice.service';
import { Product } from 'src/app/MyClass/product';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  panelOpenState = false;

  category : Category[] = [] ;
  product: Product[] = []

  constructor(public dialog: MatDialog, private db: DbserviceService) {}

  ngOnInit(): void {
   this.db.getCategory().subscribe(result => {
    this.category = result;
    console.log(result);
   })

   const catId = this.db.getCategory();
   const proId = this.db.getProduct();

   forkJoin([catId, proId]).subscribe(
    ([cat, pro]) => {
      
    }
   )
  
 
  }

  addProduct(){

  }

  removeProduct(){

  }

  openDialog() {
    const dialogRef = this.dialog.open(AddCategoryComponent);
    this.ngOnInit();

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

}
