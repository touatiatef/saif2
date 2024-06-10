import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: any;
  password: any;
  invalidLogin = false;
  
  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }
  
  /* checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate([''])
    } else
      this.invalidLogin = true


  } */

  checkLogin() {

    this.loginservice.authenticate(this.username, this.password).subscribe(
      (data:any) => {
        this.router.navigate([''])
        this.invalidLogin = false
        console.log(data)
      },
      (error:any) => {
        this.invalidLogin = true
        console.log(error)
      }
    );
  }

}
