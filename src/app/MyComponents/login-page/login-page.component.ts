import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DbserviceService } from 'src/app/MyService/dbservice.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private db: DbserviceService, private router: Router, private http: HttpClient){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  onSubmit(){
    
    if(this.loginForm.valid){
      const adminDetails = this.db.getAdmin();
      const employeeDetails = this.db.getEmployee();
      const customerDetails = this.db.getCustomer();

      forkJoin([adminDetails, employeeDetails, customerDetails]).subscribe(
        ([adminDetails1, employeeDetails1, customerDetails1]) => {
          const admin = adminDetails1.find((a: any) =>  a.username === this.loginForm.value.username && a.password === this.loginForm.value.password);
          const employee = employeeDetails1.find((e: any) => e.username === this.loginForm.value.username && e.password === this.loginForm.value.password);
          const customer = customerDetails1.find((c: any) => c.username === this.loginForm.value.username && c.password === this.loginForm.value.password);

          if(admin){
            this.router.navigate(['/admin-login'])
          } else if(employee) {
            this.router.navigate(['/employee-login']);
          } else if(customer) {
            this.router.navigate(['/customer-login']);
          } else {
            alert('User not found');
          }
      })
      
    } else {
      this.snackBar.open('enter proper credentials');
    }

  }

}
