import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RoleComponent } from './role/role.component';
import { AddEditRoleComponent } from './role/add-edit-role/add-edit-role.component';

const routes: Routes = [
  { path: 'role', component: RoleComponent },
  { path: 'role-addEdit', component: AddEditRoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
