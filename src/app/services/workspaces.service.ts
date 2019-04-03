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

  public getWorkSpaces(companyIds) {
    let body = {
      "companyId": companyIds
    }
    return this.http.post<any>(this._companyUrl + "/get_all_user_admin_company", body);
  }

  public getEmpWorkSpaces(userId) {
    let body = {
      "userId": userId
    }
    return this.http.post<any>(this._companyUrl + "/get_empcompanies_oneuser", body);
  }

  public getOneWorkspace(companyId) {
    let body = {
      "companyId": companyId
    }
    return this.http.post<any>(this._companyUrl + "/get_one_workspace", body);
  }
}
