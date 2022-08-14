import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAccessGuard implements CanActivate {
  constructor(private _AuthService:AuthService , private _Router:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
    
      if(this._AuthService.loggedInInfo.getValue().isAdmin != null &&this._AuthService.loggedInInfo.getValue().isAdmin != true)
      {
        return true;
      }
     else
     {
       this._Router.navigate(['/signin']);
       return false;
     }
  }
  
}
