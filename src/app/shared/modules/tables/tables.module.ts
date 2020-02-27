import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdSortableHeader } from '../../directive/sortable.directive';
import { NgbdTableComplete } from '../tables/tables.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    //BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,RouterModule
  ],
  declarations: [NgbdTableComplete, NgbdSortableHeader],
  exports: [NgbdTableComplete]
//   bootstrap: [NgbdTableComplete]
})
export class NgbdTableCompleteModule {}
