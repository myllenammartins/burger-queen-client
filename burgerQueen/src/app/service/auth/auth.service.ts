import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public apiUrl = 'https://burger-api-fawn.vercel.app/'

  constructor() { }
}
