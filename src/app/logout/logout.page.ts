import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../shared/autenticacion.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    public authService: AutenticacionService,

  ) { }

  ngOnInit() {
  }

}
