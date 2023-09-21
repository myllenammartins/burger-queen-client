import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorLogin: boolean = false;
  errorLoginMessage: string = ''; // Correção aqui

  constructor(private router: Router, private authService: AuthService) {}

  async Login() {
    try {
      this.errorLogin = false;
      const isUserLoggedIn = await this.authService.login(this.email, this.password);

      if (isUserLoggedIn) {
        const userRole = localStorage.getItem('userRole');
        switch(userRole){
          case 'waiter':
            this.router.navigate(['/menu']);
            break;
          case 'chef':
            this.router.navigate(['/kitchen']);
            break;
          case 'admin':
            this.router.navigate(['/admin']);
            break;
          default:
            throw new Error('Role inválida');
        }     
      } else {
        this.errorLogin = true;
        throw new Error('Erro de login. Verifique suas credenciais e tente novamente.');
      }
    } catch (error) {
      console.error('Erro na autenticação:', error);
      this.errorLogin = true;
      this.errorLoginMessage = 'Erro de login. Verifique suas credenciais e tente novamente.';
    }
  }
}
