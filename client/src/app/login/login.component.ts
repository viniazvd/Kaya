import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Usuario } from './../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //usuarios: Usuario[] = [];
  email: string;
  senha: string;

  constructor(private router: Router, private authService: AuthenticationService) {}

  logar(event) {
    event.preventDefault();

    if (this.email === 'viniazvd@gmail.com' && this.senha === '123456'){
      let dadosLogin = { email: this.email, senha: this.senha }
      this.authService.login(dadosLogin).subscribe(
        data => {
            alert('Logado com sucesso!')
            this.router.navigate(['/']);
        },
        error => {
            alert(error)
            this.router.navigate(['/login']);
        });
    } else {
      alert('E-mail ou senha incorretos.')
      this.router.navigate(['/login']);
    }
  }

}