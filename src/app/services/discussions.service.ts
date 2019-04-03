import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscussionsService {
  private _discussionUrl = "http://localhost:5000/connect_and_share/company/discussion";

  constructor(private http: HttpClient) { }

  public addOneDiscussion(discussion) {
    return this.http.post<any>(this._discussionUrl + "/add_discussion", discussion);
  }

  public getAllDiscussion(companyId) {
    let body = {
      "companyId": companyId
    }
    return this.http.post<any>(this._discussionUrl + "/getall_discussions_oneworkspace", body);
  }
}