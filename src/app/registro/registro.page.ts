import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../shared/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  email: string = '';
  password: string = '';
  constructor(
    public authService: AutenticacionService,
    public router: Router
  ) { }

  ngOnInit() {

  }

  //signUp an account
  signUp() {
    const email = this.email;
    const password = this.password;
  
    this.authService.RegisterUser(email, password)
      .then((res) => {
        // Realizar acciones aquí después de un registro exitoso
        this.authService.SendVerificationMail();
        this.router.navigate(['verificar-email']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  
}
