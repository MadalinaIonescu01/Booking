import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userIsAuth = true;

  constructor() { }

  get userIsAuthenticated(){
    return this.userIsAuth;
  }

  login(){
    this.userIsAuth = true;
  }

  logout(){
    this.userIsAuth = false;
  }
}
