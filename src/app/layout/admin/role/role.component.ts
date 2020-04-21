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
   roleForm: FormGroup;
   submitted = false;
   moduleList:any[];
   permissionList:any[];
   dropdownSettings = {};
  constructor(private formBuilder: FormBuilder,private roleService:RoleService,
    private router: Router, private toaster: TosterService) {
      this.getRoles();
     }

  ngOnInit(): void  {
     this.columns = [
      { key: 'name', title: "Role Name" },
      // { key: 'modules', title: "Modules" },
      // { key: 'permissions', title: "Permissions" }
    ]
    this.createRoleForm();
    this.moduleList=[{"id":1,"text":"Dashboard"},{"id":2,"text":"Users"},{"id":3,"text":"Roles"}]
    this.permissionList = [
      { id: 1, text: 'Add' },
      { id: 2, text: 'View' },
      { id: 3, text: 'Edit' },
      { id: 4, text: 'Delete'},
    ];
  
    this.dropdownSettings = {
      singleSelection: false,
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
  }
  onPageChange(event) {
    console.log(JSON.stringify(event));
  }
  get f() { return this.roleForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.roleForm.invalid) {
      return;
    } else {
      this.roleService.add(this.roleForm.value)
      .subscribe(
          data => {
              if(data.success) {
                  this.toaster.success(data.msg,'Role');
                  this.createRoleForm();
                  this.data.push(data.data);

              }else{
                  this.toaster.warning(data.msg,'Role');
              }
          },
          error => {
              this.toaster.error(error.error.msg,'Role');
          });
    }
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
    createRoleForm(){
      this.roleForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        modules: ['', [Validators.required,Validators.minLength(1)]],
        permissions: ['', [Validators.required]],
      });
    }
    onEdit(event){

    }
}
