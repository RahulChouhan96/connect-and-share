import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate {
  constructor(private userSrv: UserService, private router: Router) { }
  canActivate(): boolean {
    if (this.userSrv.isLogIn()) {
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }
}
