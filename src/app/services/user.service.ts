import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userId: String;
  private _userUrl = "http://localhost:5000/connect_and_share/user";
  private _homeUrl = "http://localhost:5000/connect_and_share";

  userName: String;

  constructor(private http: HttpClient, private router: Router) { }

  userSignup(newUser: any): Observable<any> {
    return this.http.post<any>(this._homeUrl + "/add_one_user", newUser);
  }

  getOneUser(userId) {
    let body = {
      "userId": userId
    }
    return this.http.post<any>(this._userUrl + "/get_one_user", body);
  }

  userLogin(cred) {
    return this.http.post<any>(this._homeUrl + "/user_login", cred);
  }

  isLogIn() {
    return !!sessionStorage.getItem("token");
  }

  getToken() {
    return sessionStorage.getItem("token");
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(["connect_and_share/login"]);
  }
}
