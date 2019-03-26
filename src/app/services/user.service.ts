import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userUrl = "/connect_and_share/user";
  private _homeUrl = "/connect_and_share";

  constructor(private http: HttpClient) { }

  getOneUser(userId) {
    return this.http.post<any>(this._userUrl + "/get_one_user", userId);
  }

  userLogin(cred) {
    return this.http.post<any>(this._homeUrl + "/user_login", cred);
  }
}
