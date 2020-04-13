import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RoleComponent } from './role/role.component';
import { NgbdTableCompleteModule } from 'src/app/shared';


@NgModule({
  declarations: [AdminComponent, RoleComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbdTableCompleteModule
  ]
})
export class AdminModule { }
