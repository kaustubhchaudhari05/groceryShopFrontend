import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isLoggedIn: boolean = false; 
   user: any;

  constructor() { }

  login(userData: any) {
    this.isLoggedIn = true;
    this.user = userData
  }

  logout() {
    this.isLoggedIn = false;
    this.user = null;
  }

  isloggedInUser(): boolean { 
    return this.isLoggedIn;
  }

  getUserDetails(): any {
    return this.user;
  }
 }
