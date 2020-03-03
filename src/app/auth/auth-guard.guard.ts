import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanLoad {

  constructor(
    private _authService: AuthService
  ){

  }

  canActivate(){
    return this._authService.isAuth();
  }

  canLoad(){
    return this._authService.isAuth()
               .pipe(
                 take(1)
               );
  }
  
}
