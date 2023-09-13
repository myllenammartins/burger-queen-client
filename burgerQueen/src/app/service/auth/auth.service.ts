import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public apiUrl = 'https://flash-burger-api.vercel.app/'

  constructor() { }
}
