import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/MyClass/category';
import { Product } from 'src/app/MyClass/product';
import { DbserviceService } from 'src/app/MyService/dbservice.service';
import { AddItemsComponent } from '../add-items/add-items.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  panelOpenState = false;
  category : Category[] = [] ;
  categorys: any;
  product: any;


  constructor(private db: DbserviceService, private http: HttpClient, private dialog: MatDialog){}

  ngOnInit(): void {
    this.db.getCategory().subscribe(result => {
      this.category = result;
      this.categorys = result
     })
  }

  openProductTable(categoryId: number){
    this.http.get('http://localhost:8080/product/'+categoryId).subscribe(result => {
      this.product = result
    })
  }

  openAddProduct() {
    const dialogRef = this.dialog.open(AddItemsComponent);
    dialogRef.afterClosed().subscribe(result => { 
    })
    this.ngOnInit();
  }
  
  openEditProduct(productId: number){
    const dialogRef = this.dialog.open(EditProductComponent);
    console.log(productId);
    this.ngOnInit
    return productId;
  }

  // openEditProduct(dialog: MatDialog, productId: number) {
  //   return dialog.open(EditProductComponent, 
  //     { data: productId, disableClose: true }).afterClosed();
  // }
}
