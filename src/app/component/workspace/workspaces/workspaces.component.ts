import { Component, OnInit } from '@angular/core';
import { WorkspacesService } from 'src/app/services/workspaces.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.css']
})
export class WorkspacesComponent implements OnInit {
  workSpaces: any;
  response: any;
  empWorkSpaces: any;
  empResponse: any;
  constructor(private workSpaceSrv: WorkspacesService, private router: Router) { }

  ngOnInit() {
    // this.getCompanyIds();
    this.getWorkSpaces();
    this.getEmpWorkSpaces();
  }

  getCompanyIds() {
    let companyIdsString = sessionStorage.getItem("companyIds");
    return companyIdsString.split(",");
  }

  getUserId() {
    return sessionStorage.getItem("userId");
  }

  getWorkSpaces() {
    console.log(this.getCompanyIds());
    this.workSpaceSrv.getWorkSpaces(this.getCompanyIds())
      .subscribe(
        res => {
          console.log(res.auth);
          this.response = res;
          this.workSpaces = res.companies;
        },
        err => {
          this.response = err;
          console.log(err);
        }
      );
  }

  getEmpWorkSpaces() {
    // console.log(this.getCompanyIds());
    this.workSpaceSrv.getEmpWorkSpaces(this.getUserId())
      .subscribe(
        res => {
          console.log(res.auth);
          this.empResponse = res;
          this.empWorkSpaces = res.response;
        },
        err => {
          this.empResponse = err;
          console.log(err);
        }
      );
  }

  

  // sendCompanyId(companyId){
  //   this.router.navigate([`/connect_and_share/workspaces/getOneWorkspace/${companyId}`]);
  // }
}
