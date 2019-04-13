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

  getUserName() {
    return sessionStorage.getItem("userName");
  }

  getWorkSpaces() {
    console.log(this.getUserName());
    this.workSpaceSrv.getWorkSpaces(this.getUserName())
      .subscribe(
        res => {
          console.log(res);
          this.response = res;
          this.workSpaces = res.response;
        },
        err => {
          this.response = err;
          console.log(err);
        }
      );
  }

  getEmpWorkSpaces() {
    // console.log(this.getCompanyIds());
    this.workSpaceSrv.getEmpWorkSpaces(this.getUserName())
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
