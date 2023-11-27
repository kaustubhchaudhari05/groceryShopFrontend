import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/MyClass/product';
import { DbserviceService } from 'src/app/MyService/dbservice.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
productForm!: FormGroup
category: any[] = [];
product!: Product; 
productId!: number;

constructor(private db: DbserviceService, private fb: FormBuilder, private snackBar: MatSnackBar, private http: HttpClient,  @Inject(MAT_DIALOG_DATA) public data: any){
  this.productForm = this.fb.group({
    productName : ['', Validators.required],
    productQuantity: ['', Validators.required],
    productPrice: ['', Validators.required],
    categoryId: ['', Validators.required]
  });
}

ngOnInit(): void {
    this.db.getCategory().subscribe(result => {
      this.category = result;
    })
}

editProduct(){
  this.product = this.productForm.value;

  this.http.put('http://localhost:8080/product/'+this.data.product, this.product).subscribe(result => {
    console.log(result);
    this.snackBar.open('Product updated successfully', 'Dismiss');
    this.productForm.reset();
  })
}

}
