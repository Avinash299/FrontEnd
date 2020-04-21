import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TosterService } from 'src/app/services/toster.service';
import { routerTransition } from 'src/app/router.animations';
import { RoleService } from 'src/app/services/role.service';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
  animations: [routerTransition()]

})
export class RoleComponent implements OnInit {
   columns: any[];
   data:any=[];
  constructor(private roleService:RoleService,
    private router: Router, private toaster: TosterService) {
      this.getRoles();
     }

  ngOnInit(): void  {
     this.columns = [
      { key: 'name', title: "Role Name" },
    ]
  }
  onPageChange(event) {
    console.log(JSON.stringify(event));
  }


  getRoles() {
      this.roleService.get().subscribe(data => {
              if(data.success) {
                 this.data=data.data;
              }else{
                  this.toaster.warning(data.msg,'Role');
              }
          },
          error => {
              this.toaster.error(error.error.msg,'Role');
          });
    }
   
    onEdit(event){
      this.router.navigateByUrl('/admin/role-addEdit',{ state: event._id });
    }
    onAdd(){
      this.router.navigate(['/admin/role-addEdit']);
    }
}
