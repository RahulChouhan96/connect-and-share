import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injector: Injector) { }
  intercept(req, next) {
    let userSrv = this._injector.get(UserService);
    let tokenizer = req.clone({
      setHeaders: {
        "x-access-token": `${userSrv.getToken()}`
      }
    });
    return next.handle(tokenizer);
  }
}
