import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RoleComponent } from './role/role.component';
import { NgbdTableCompleteModule, StatModule, PageHeaderModule, MultiSelectModule } from 'src/app/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditRoleComponent } from './role/add-edit-role/add-edit-role.component';
import { UserComponent } from './user/user.component';
import { AddEditUserComponent } from './user/add-edit-user/add-edit-user.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AdminComponent, RoleComponent, AddEditRoleComponent, UserComponent, AddEditUserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbdTableCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    StatModule,
    PageHeaderModule,
    MultiSelectModule,
    NgbDatepickerModule.forRoot()
  ]
})
export class AdminModule { }
