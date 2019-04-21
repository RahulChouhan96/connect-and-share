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
  error: String;
  constructor(private acRoute: ActivatedRoute, private workSpacesSrv: WorkspacesService, private router: Router) { }

  ngOnInit() {
    this.getCompanyNameAndId();
  }

  data: any = {};

  onSubmit() {
    alert(JSON.stringify(this.data));
  }

  addEmp() {
    this.workSpacesSrv.addEmp(this.newEmp)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate([`connect_and_share/workspaces/getOneWorkspace/${this.newEmp.companyId}`]);
        },
        err => {
          console.log(err);
          this.error = err.error.message;
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
