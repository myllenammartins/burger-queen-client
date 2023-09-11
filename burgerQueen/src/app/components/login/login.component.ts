import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginError = false;

  constructor(private router: Router) {}

  onSubmit(email: string, password: string) {
    // Simule a autenticação (substitua com sua lógica real)
    if (email === 'seu_email_correto' && password === 'sua_senha_correta') {
      // Credenciais corretas, redirecione para a rota de pedidos
      this.router.navigate(['/pedidos']);
    } else {
      // Credenciais incorretas, mostre o erro
      this.loginError = true;
    }
  }
}
