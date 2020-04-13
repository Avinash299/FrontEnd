import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'ngx-easy-table';
import { NgbdSortableHeader } from '../../directive/sortable.directive';
import { NgbdTableComplete } from '../tables/tables.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,RouterModule,TableModule
  ],
  declarations: [NgbdTableComplete, NgbdSortableHeader],
  exports: [NgbdTableComplete]
})
export class NgbdTableCompleteModule {}
