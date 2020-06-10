import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private loggedInService: LoginService, 
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.loggedInService.currentUserValue;
    if (currentUser) {
       
        // authorised so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login:id'], { queryParams: { returnUrl: state.url }});
    return false;
}
  
}
