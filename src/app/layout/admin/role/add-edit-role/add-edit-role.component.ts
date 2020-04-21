import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoleService } from 'src/app/services/role.service';
import { Router } from '@angular/router';
import { TosterService } from 'src/app/services/toster.service';
import {Location} from '@angular/common';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-add-edit-role',
  templateUrl: './add-edit-role.component.html',
  styleUrls: ['./add-edit-role.component.scss'],
  animations: [routerTransition()]
})
export class AddEditRoleComponent implements OnInit {
  roleForm: FormGroup;
  submitted = false;
  data:any=[];
  userPermission:any[];
  dashbaordPermission:any[];
  chartPermission:any[];
  id:any;
  loading:boolean=false;
  dropdownSettings = {
    singleSelection: false,
    itemsShowLimit: 2,
    allowSearchFilter: true
  };;

  constructor(private formBuilder: FormBuilder,private roleService:RoleService,
    private router: Router, private toaster: TosterService,private _location: Location) {
      this.userPermission=[
        { id: 1, text: 'Add' },
        { id: 2, text: 'View' },
        { id: 3, text: 'Edit' },
        { id: 4, text: 'Delete'}
      ]
      this.dashbaordPermission = [
        { id: 1, text: 'Add' },
        { id: 2, text: 'View' },
        { id: 3, text: 'Edit' },
        { id: 4, text: 'Delete'},
      ];
      this.chartPermission = [
        { id: 1, text: 'Add' },
        { id: 2, text: 'View' },
        { id: 3, text: 'Edit' },
        { id: 4, text: 'Delete'},
      ];
      this.id=this.router.getCurrentNavigation().extras.state;
      this.createRoleForm();
      if(this.id){
        this.getRole();
      }else{
        this.loading=true;
      }
     }

  ngOnInit(): void {
  
  }
  createRoleForm(){
    this.roleForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      dashbaordPermission: [[], [Validators.required,Validators.minLength(1)]],
      userPermission: [[]],
      chartPermission: [[]],
    });
  }

  get f() { return this.roleForm.controls; }

  getRole() {
    this.roleService.getRoleById(this.id).subscribe(data => {
            if(data.success) {
              this.roleForm.patchValue(data.data);
              this.loading=true;
            }else{
                this.toaster.warning(data.msg,'Role');
            }
        },
        error => {
            this.toaster.error(error.error.msg,'Role');
        });
  }

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
                  this._location.back();
              }else{
                  this.toaster.warning(data.msg,'Role');
              }
          },
          error => {
              this.toaster.error(error.error.msg,'Role');
          });
    }
  }
  backClicked() {
    this._location.back();
  }
}
