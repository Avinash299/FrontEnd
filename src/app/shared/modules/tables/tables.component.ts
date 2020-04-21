import { Columns, DefaultConfig, API, APIDefinition, Config } from 'ngx-easy-table';
import { Component, ViewChild, TemplateRef, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ExportToCsv } from 'export-to-csv';
import { Subject } from 'rxjs';
interface EventObject {
    event: string;
    value: {
        limit: number;
        page: number;
    };
}

@Component({
    selector: 'app-ngx-table',
    templateUrl: './tables.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class NgbdTableComplete implements OnInit, OnDestroy {
    public pagination = {
        limit: 10,
        offset: 0,
        count: -1,
    };

    @Input() showActions: boolean = false;
    @Input() showSearch: boolean = true;
    @Input() showAddBtn: boolean = true;
    @Input() serverPagination: boolean = false;
    @Input() columns: Columns[];
    @Input() count: number = 0;
    @Input() data: any[];

    @Output() onPageChange = new EventEmitter();
    @Output() onEdit = new EventEmitter();
    @Output() onDelete = new EventEmitter();
    @Output() onAdd = new EventEmitter();
    @Output() onActiveDeactive = new EventEmitter();

    @ViewChild('table', { static: false }) table: APIDefinition;
    @ViewChild('actionTpl', { static: true }) actionTpl: TemplateRef<any>;
    private ngUnsubscribe: Subject<void> = new Subject<void>();

    private csvOptions = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        showTitle: false,
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
    };
    public configuration: Config;
    constructor(private cdr: ChangeDetectorRef) { 
    }
  
    ngOnInit(): void {
        this.configuration = { ...DefaultConfig };
        this.configuration.searchEnabled = true;
        this.configuration.orderEnabled = true;
        if (this.showActions) {
            this.columns.push({ key: 'action', title: 'Actions', cellTemplate: this.actionTpl });
        }
        if (this.serverPagination) {
            this.pagination.count = this.count;
        }
    }
    onChange(name: string): void {
        this.table.apiEvent({
            type: API.onGlobalSearch, value: name,
        });
    }

    addRow(): void {
        this.onAdd.emit();
    }

    remove(row: any): void {
        this.onDelete.emit(row);

    }
    makeActive(row) {
        this.onActiveDeactive.emit(row);

    }
    makeDeactive(row) {
        this.onActiveDeactive.emit(row);
    }
    edit(row) {
        this.onEdit.emit(row);
    }
    public csvExportWhole(): void {
        const csvExporter = new ExportToCsv(this.csvOptions);
        csvExporter.generateCsv(this.data);
    }
    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    eventEmitted($event: { event: string, value: any }): void {
        if ($event.event === 'onPagination' || $event.event === 'onOrder') {
            this.parseEvent($event);
        }

    }

    private parseEvent(obj: EventObject): void {
        this.pagination.limit = obj.value.limit ? obj.value.limit : this.pagination.limit;
        this.pagination.offset = obj.value.page ? obj.value.page : this.pagination.offset;
        this.pagination = { ...this.pagination };
        const params = { limit: this.pagination.limit, page: this.pagination.offset };
        if (obj.event === 'onOrder') {
            params['sort'] = obj.value['key'];
            params['order'] = obj.value['order'];
        }
        this.onPageChange.emit(params);

    }

}
