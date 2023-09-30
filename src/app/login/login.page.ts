import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../shared/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  constructor(
    public authService: AutenticacionService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  logIn(email: string, password: string) {
    this.authService
      .SignIn(email, password)
      .then((): any => {
        if (this.authService.isEmailVerified) {
          this.router.navigate(['home']);
        } else {
          window.alert('Email is not verified');
          return false;
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
