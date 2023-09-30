import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../shared/autenticacion.service';


@Component({
  selector: 'app-olvido-contrasenia',
  templateUrl: './olvido-contrasenia.page.html',
  styleUrls: ['./olvido-contrasenia.page.scss'],
})
export class OlvidoContraseniaPage implements OnInit {

  constructor(
    public authService: AutenticacionService,
  ) { }

  ngOnInit() {
  }

}
