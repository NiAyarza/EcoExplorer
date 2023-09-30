import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../shared/autenticacion.service';


@Component({
  selector: 'app-verificar-email',
  templateUrl: './verificar-email.page.html',
  styleUrls: ['./verificar-email.page.scss'],
})
export class VerificarEmailPage implements OnInit {

  constructor(
    public authService: AutenticacionService,
  ) { }

  ngOnInit() {
  }

}
