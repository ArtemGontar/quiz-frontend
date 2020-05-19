import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, 
    private authService: AuthService) { }
    
  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
      debugger;
    if (this.authService.isAuthenticated()) 
    {
      debugger;
      console.log("auth"); 
      return true;
    }
    debugger;
    console.log("no auth");
    this.authService.login()
    return false;
  }
  
}
