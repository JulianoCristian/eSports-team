import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service.component';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private usuario: UsuarioService, private router: Router) {}

  canActivate() {
      let isLoggedIn = this.usuario.isLoggedIn();
      if(!isLoggedIn){
          this.router.navigate(['']);
      }
      return isLoggedIn;
  }
}