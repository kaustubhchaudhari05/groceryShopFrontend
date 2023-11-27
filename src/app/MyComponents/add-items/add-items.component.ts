import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/MyClass/category';
import { Product } from 'src/app/MyClass/product';
import { DbserviceService } from 'src/app/MyService/dbservice.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  productForm!: FormGroup;
  category: any[] = [];
  product!: Product; 

  constructor(private db: DbserviceService, private fb: FormBuilder, private snackBar: MatSnackBar){
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

  saveProduct() {
    console.log(this.productForm.value);

    if(this.productForm.valid){
      this.product = this.productForm.value;
      this.db.addProduct(this.product).subscribe(result => {
        console.log(result);
        this.snackBar.open('Product have added Successfully', 'Dismiss');
        this.productForm.reset();
      })

    } else {
      this.snackBar.open('Enter the proper details');
    }
    
  }
}
