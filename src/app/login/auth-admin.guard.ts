import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
  
export class AuthAdminGuard {
  constructor(private router: Router) {}

  canActivate: CanActivateFn = (route, state) => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (token && role === 'Admin') {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
  
}