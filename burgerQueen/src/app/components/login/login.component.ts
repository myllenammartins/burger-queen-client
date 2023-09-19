import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  Login() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    // Faça uma chamada à API para autenticar o usuário
    this.http.post<any>('', credentials).subscribe(
      response => {
        // Se as credenciais forem válidas, a API deve retornar um token de autenticação
        const token = response.token;

        if (token) {
          // Armazene o token no localStorage ou em um serviço de autenticação
          localStorage.setItem('token', token);

          // Redirecione para a página principal do sistema de pedidos
          this.router.navigate(['']);
        } else {
          this.errorMessage = 'Credenciais inválidas. Por favor, verifique seu email e senha.';
        }
      },
      error => {
        console.error('Erro na autenticação:', error);
        this.errorMessage = 'Ocorreu um erro durante a autenticação. Tente novamente mais tarde.';
      }
    );
  }
}
