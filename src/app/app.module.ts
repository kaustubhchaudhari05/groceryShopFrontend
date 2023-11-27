import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './MyComponents/login-page/login-page.component';
import { SignupPageComponent } from './MyComponents/signup-page/signup-page.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AdminLoginComponent } from './MyComponents/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './MyComponents/employee-login/employee-login.component';
import { CustomerLoginComponent } from './MyComponents/customer-login/customer-login.component';
import { MatDialogModule } from "@angular/material/dialog";
import { AddCategoryComponent } from './MyComponents/add-category/add-category.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddItemsComponent } from './MyComponents/add-items/add-items.component';
import { EditCategoryComponent } from './MyComponents/edit-category/edit-category.component';
import { EditProductComponent } from './MyComponents/edit-product/edit-product.component';
import { ItemsListComponent } from './MyComponents/items-list/items-list.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    CustomerLoginComponent,
    AddCategoryComponent,
    AddItemsComponent,
    EditCategoryComponent,
    EditProductComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
