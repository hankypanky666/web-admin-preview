import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  login(credentials) {
    if (credentials.username !== "admin" && credentials.password !== "admin"){
      return false;
    } else {
      console.log('login true');
      sessionStorage.setItem('logged', 'true');
      this.router.navigateByUrl('');
      return true;
    }
  }

  loggedIn() {
    if (sessionStorage.getItem('logged') === 'true') {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.removeItem('logged');
    this.router.navigateByUrl('/login');
  }

}
