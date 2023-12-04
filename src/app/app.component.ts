import { Component, OnInit } from '@angular/core';
import { AuthService } from './MyService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
[x: string]: any;
  title = 'groceryshop';
  loginSession!: boolean; 


  constructor(private auth: AuthService, private router: Router) {
    // auth.isloggedInUser;
    // const loginSession = auth.isloggedInUser();
    // console.log(loginSession);
    
  }

  ngOnInit(): void {   
    const loginSession = this.auth.isloggedInUser();
    console.log(loginSession);   
  }


  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
