import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkspacesService {
  private _companyUrl = "http://localhost:5000/connect_and_share/company";
  constructor(private http: HttpClient) { }

  public createWorkSpace(workSpace) {
    return this.http.post<any>(this._companyUrl + "/add_company_for_user", workSpace);
  }

  public getWorkSpaces(){
    return this.http.get<any>(this._companyUrl)
  }
}
