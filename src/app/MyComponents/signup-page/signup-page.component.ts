import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Customer } from 'src/app/MyClass/customer';
import { Employee } from 'src/app/MyClass/employee';
import { DbserviceService } from 'src/app/MyService/dbservice.service';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit{
  signUpForm!: FormGroup;
  employeeDetials!: Employee;
  customerDetails!: Customer;


  constructor(private fb: FormBuilder, private dbService: DbserviceService, private router: Router, private snackBar: MatSnackBar){
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]], 
      contact: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  ngOnInit(): void {

  }

  onSubmit(){
    if(!this.signUpForm.valid){
      let role = this.signUpForm.value.role;
      if(role == "customer"){
        this.customerDetails = this.signUpForm.value;
        this.dbService.saveCustomer(this.customerDetails).subscribe((result) => {
          console.log(result);
          console.log("customer signup successful");
          this.snackBar.open("sign up successful");
          this.router.navigate(['/login'])
        },
        (error) => {
          console.error("error" + error);
        }
        )
      } else if(role == "employee") {
        this.employeeDetials = this.signUpForm.value;
        this.dbService.saveEmployee(this.employeeDetials).subscribe(
          (result) => {
          console.log(result);
          console.log("employee signup successfull");
          this.snackBar.open("sign up successful");
          this.router.navigate(['/login'])
        },
        (error) => {
          console.error("error"+ error);
          
        }
        )
      }
    } else {
      console.log("enter proper value");
    }
  }

}
