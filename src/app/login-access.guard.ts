import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAccessGuard implements CanActivate {
  constructor(private _AuthService:AuthService , private _Router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
      if(this._AuthService.loggedInInfo.getValue().isLoggedIn==true&&this._AuthService.loggedInInfo.getValue().isAdmin == true)
      {
        this._Router.navigate(['/dashboard']);
        return false;
      }
     else if(this._AuthService.loggedInInfo.getValue().isLoggedIn==true&&this._AuthService.loggedInInfo.getValue().isAdmin == false)
     {
       this._Router.navigate(['/user_access']);
       return false;
     }
     else{
      return true;
     }
  }

}
