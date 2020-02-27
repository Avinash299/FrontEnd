import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbdSortableHeader, SortEvent } from '../../directive/sortable.directive';


@Component({
    selector: 'app-ngbd-table',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    providers: [DecimalPipe]
})
export class NgbdTableComplete {
    @Input() records: any = [];
    @Input() total: number = 30;
    @Input() columns: any = [];
    public pageSize: number = 5;
    public page: number = 1;
    public searchTerm: string = "";
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
    @Input() showActions: boolean = false;
    public previousPage:any;
    constructor() {

    }
  
    onSort({ column, direction }: SortEvent) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        if (direction === '') {
            return this.records;
        } else {
            return [...this.records].sort((a, b) => {
                const res = this.compare(a[column], b[column]);
                return direction === 'asc' ? res : -res;
            });
        }

    }
    compare(v1, v2) {
        return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
    }
    onPageChange(event){
        console.log(event)
    }
    loadPage(page: number) {
        if (page !== this.previousPage) {
          this.previousPage = page;
          //this.loadData();
        }
      }
}
