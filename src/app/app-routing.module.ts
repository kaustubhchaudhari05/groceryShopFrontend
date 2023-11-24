import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './MyComponents/login-page/login-page.component';
import { SignupPageComponent } from './MyComponents/signup-page/signup-page.component';
import { AdminLoginComponent } from './MyComponents/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './MyComponents/employee-login/employee-login.component';
import { CustomerLoginComponent } from './MyComponents/customer-login/customer-login.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'employee-login', component: EmployeeLoginComponent},
  {path: 'customer-login', component: CustomerLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
