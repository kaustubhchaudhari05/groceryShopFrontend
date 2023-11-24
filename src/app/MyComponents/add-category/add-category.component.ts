import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/MyClass/category';
import { DbserviceService } from 'src/app/MyService/dbservice.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  categoryForm!: FormGroup;
  category!: Category;

  constructor(private fb: FormBuilder, private db: DbserviceService, private snackBar: MatSnackBar){
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required]
    })
  }

  saveCategory(){
    console.log(this.categoryForm.value);
    
    if(this.categoryForm.valid) {
      this.category = this.categoryForm.value;
      this.db.addCategory(this.category).subscribe((result) => {
        console.log(result);
        this.snackBar.open('Category add successfully');
        this.categoryForm.reset();
      })
    } else {
      alert('Enter the category name')
    }
  }

}
