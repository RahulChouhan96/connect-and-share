import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkspacesService {
  private _companyUrl = "http://localhost:5000/connect_and_share/company";
  private _discussionUrl = "http://localhost:5000/connect_and_share/company/discussion";
  private _userUrl = "http://localhost:5000/connect_and_share/user";
  constructor(private http: HttpClient) { }

  public createWorkSpace(workSpace) {
    return this.http.post<any>(this._companyUrl + "/add_company_for_user", workSpace);
  }

  public getWorkSpaces(userName) {
    let body = {
      "userName": userName
    }
    return this.http.post<any>(this._companyUrl + "/get_all_user_admin_company", body);
  }

  public getEmpWorkSpaces(userName) {
    let body = {
      "userName": userName
    }
    return this.http.post<any>(this._companyUrl + "/get_empcompanies_oneuser", body);
  }

  public getOneWorkspace(companyId) {
    let body = {
      "companyId": companyId
    }
    return this.http.post<any>(this._companyUrl + "/get_one_workspace", body);
  }

  public addEmp(newEmp) {
    return this.http.post<any>(this._companyUrl + "/add_one_emp_to_one_company", newEmp);
  }

  public getAllEmpNames(companyId) {
    let body = {
      "companyId": companyId
    }
    return this.http.post<any>(this._companyUrl + "/getAllEmpsOneWorkSpace", body);
  }

  // public getAllEmpUserIds(userName){
  //   let body = {
  //     "userName": userName
  //   }
  //   return this.http.post<any>(this._userUrl + "/get_one_userId", body);
  // }

  public getOneDiscussion(discussionId) {
    let body = {
      "discussionId": discussionId
    };
    return this.http.post<any>(this._discussionUrl + "/getOneDiscussion", body);
  }

  public sendViews(views) {

  }

  public getWorkSpaceAdmin(companyId) {
    let body = {
      "companyId": companyId
    }
    return this.http.post<any>(this._companyUrl + "/getWorkSpaceAdmin", body);
  }

}
