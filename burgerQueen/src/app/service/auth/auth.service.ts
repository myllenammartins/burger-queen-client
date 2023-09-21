import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public apiUrl = 'https://burger-api-fawn.vercel.app/'

  constructor(private http: HttpClient, private router: Router) { }

  async login (email: string, password: string): Promise<boolean> {

    const userLogin = { email, password }
    const response = await firstValueFrom(this.http.post<any>(this.apiUrl, userLogin));

    if (response.token) {
      localStorage.setItem('token', response.token); 
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userRole', response.role);
      return true;
    } else {
      throw new Error('Login inválido');
    }
  }
}
