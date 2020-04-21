import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RoleComponent } from './role/role.component';
import { NgbdTableCompleteModule, StatModule, PageHeaderModule, MultiSelectModule } from 'src/app/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, RoleComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbdTableCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    StatModule,
    PageHeaderModule,
    MultiSelectModule
  ]
})
export class AdminModule { }
