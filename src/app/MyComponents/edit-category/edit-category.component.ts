import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/MyClass/category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  categoryForm!: FormGroup;
  category!: Category;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any){
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required]
    })
  }

  onClickSave() {
    this.category = this.categoryForm.value;
    
    this.http.put('http://localhost:8080/category/'+this.data.category,this.category).subscribe(result => {
      this.snackBar.open('Category updated successfully', 'Dismiss');
      this.categoryForm.reset();
    })
  }


}
