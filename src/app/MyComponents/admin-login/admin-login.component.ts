import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { Category } from 'src/app/MyClass/category';
import { DbserviceService } from 'src/app/MyService/dbservice.service';
import { Product } from 'src/app/MyClass/product';
import { Observable, forkJoin, retry } from 'rxjs';
import { AddItemsComponent } from '../add-items/add-items.component';
import { HttpClient } from '@angular/common/http';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { DialogConfig } from '@angular/cdk/dialog';
import { AuthService } from 'src/app/MyService/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  panelOpenState = false;

  category : Category[] = [] ;
  categorys: any;
  products: any;
  admin: any;

  constructor(private dialog: MatDialog, private db: DbserviceService, private http: HttpClient, private auth: AuthService) {}

  ngOnInit(): void {
   this.db.getCategory().subscribe(result => {
    this.category = result;
    this.categorys = result;    
   })
   this.admin = this.auth.getUserDetails()
  } 

  openProductTable(categoryId: number){
    console.log(categoryId);
    
    this.http.get('http://localhost:8080/product/'+categoryId).subscribe(result => {
      this.products = result
    })
  }

  openAddCategory() {
    const dialogRef = this.dialog.open(AddCategoryComponent);
    dialogRef.disableClose = true;
    this.ngOnInit
  }

  openEditCategory(categoryId: number){    
  const dialogRef = this.dialog.open(EditCategoryComponent, {
    data: {
      category: categoryId
    }
  });
  this.ngOnInit()
  }


  openAddProduct() {
    const dialogRef = this.dialog.open(AddItemsComponent);
    dialogRef.afterClosed().subscribe(result => { 
    })
    dialogRef.disableClose = true;
    this.ngOnInit();
  }

  openEditProduct(productId: number){
    const dialogRef = this.dialog.open(EditProductComponent, { 
      data: {
        product:  productId
      }
    });
    this.ngOnInit();
  }

}
