import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkspacesService } from 'src/app/services/workspaces.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  newEmp: any = {
    "companyId": "",
    "companyName": "",
    "userName": "",
    "designation": ""
  }
  constructor(private acRoute: ActivatedRoute, private workSpacesSrv: WorkspacesService, private router: Router) { }

  ngOnInit() {
    this.getCompanyNameAndId();
  }

  addEmp() {
    this.workSpacesSrv.addEmp(this.newEmp)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(["connect_and_share/workspaces"]);
        },
        err => {
          console.log(err);
        }
      );
  }

  getCompanyNameAndId() {
    this.acRoute.paramMap.subscribe(
      params => { this.newEmp.companyName = params.get("companyName") }
    );
    this.acRoute.paramMap.subscribe(
      params => { this.newEmp.companyId = params.get("companyId") }
    );
  }
}
