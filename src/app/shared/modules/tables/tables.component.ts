import { Columns, DefaultConfig, API, APIDefinition, Config } from 'ngx-easy-table';
import { Component, ViewChild, TemplateRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { ExportToCsv } from 'export-to-csv';


@Component({
    selector: 'app-ngx-table',
    templateUrl: './tables.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class NgbdTableComplete {
    @Input() showActions: boolean = false;
    @Input() showSearch: boolean = true;
    @Input() showAddBtn: boolean = true;
    @ViewChild('table', { static: true }) table: APIDefinition;
    @ViewChild('actionTpl', { static: true }) actionTpl: TemplateRef<any>;
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
    public columns: Columns[];

    public data = [{
        phone: '+1 (934) 551-2224',
        age: 20,
        address: { street: 'North street', number: 12 },
        company: 'ZILLANET',
        name: 'Valentine Webb',
        isActive: false,
    }, {
        phone: '+1 (948) 460-3627',
        age: 31,
        address: { street: 'South street', number: 12 },
        company: 'KNOWLYSIS',
        name: 'Heidi Duncan',
        isActive: true,
    },
    {
        phone: '+1 (934) 551-2224',
        age: 20,
        address: { street: 'North street', number: 12 },
        company: 'ZILLANET',
        name: 'Valentine Webb',
        isActive: false,
    }, {
        phone: '+1 (948) 460-3627',
        age: 31,
        address: { street: 'South street', number: 12 },
        company: 'KNOWLYSIS',
        name: 'Heidi Duncan',
        isActive: true,
    }, {
        phone: '+1 (934) 551-2224',
        age: 20,
        address: { street: 'North street', number: 12 },
        company: 'ZILLANET',
        name: 'Valentine Webb',
        isActive: false,
    }, {
        phone: '+1 (948) 460-3627',
        age: 31,
        address: { street: 'South street', number: 12 },
        company: 'KNOWLYSIS',
        name: 'Heidi Duncan',
        isActive: true,
    }, {
        phone: '+1 (934) 551-2224',
        age: 20,
        address: { street: 'North street', number: 12 },
        company: 'ZILLANET',
        name: 'Valentine Webb',
        isActive: false,
    }, {
        phone: '+1 (948) 460-3627',
        age: 31,
        address: { street: 'South street', number: 12 },
        company: 'KNOWLYSIS',
        name: 'Heidi Duncan',
        isActive: true,
    }, {
        phone: '+1 (934) 551-2224',
        age: 20,
        address: { street: 'North street', number: 12 },
        company: 'ZILLANET',
        name: 'Valentine Webb',
        isActive: false,
    }, {
        phone: '+1 (948) 460-3627',
        age: 31,
        address: { street: 'South street', number: 12 },
        company: 'KNOWLYSIS',
        name: 'Heidi Duncan',
        isActive: true,
    }, {
        phone: '+1 (934) 551-2224',
        age: 20,
        address: { street: 'North street', number: 12 },
        company: 'ZILLANET',
        name: 'Valentine Webb',
        isActive: false,
    }, {
        phone: '+1 (948) 460-3627',
        age: 31,
        address: { street: 'South street', number: 12 },
        company: 'KNOWLYSIS',
        name: 'Heidi Duncan',
        isActive: true,
    }, {
        phone: '+1 (934) 551-2224',
        age: 20,
        address: { street: 'North street', number: 12 },
        company: 'ZILLANET',
        name: 'Valentine Webb',
        isActive: false,
    }, {
        phone: '+1 (948) 460-3627',
        age: 31,
        address: { street: 'South street', number: 12 },
        company: 'KNOWLYSIS',
        name: 'Heidi Duncan',
        isActive: true,
    }, {
        phone: '+1 (934) 551-2224',
        age: 20,
        address: { street: 'North street', number: 12 },
        company: 'ZILLANET',
        name: 'Valentine Webb',
        isActive: false,
    }, {
        phone: '+1 (948) 460-3627',
        age: 31,
        address: { street: 'South street', number: 12 },
        company: 'KNOWLYSIS',
        name: 'Heidi Duncan',
        isActive: true,
    }, {
        phone: '+1 (934) 551-2224',
        age: 20,
        address: { street: 'North street', number: 12 },
        company: 'ZILLANET',
        name: 'Valentine Webb',
        isActive: false,
    }, {
        phone: '+1 (948) 460-3627',
        age: 31,
        address: { street: 'South street', number: 12 },
        company: 'KNOWLYSIS',
        name: 'Heidi Duncan',
        isActive: true,
    }, {
        phone: '+1 (934) 551-2224',
        age: 20,
        address: { street: 'North street', number: 12 },
        company: 'ZILLANET',
        name: 'Valentine Webb',
        isActive: false,
    }, {
        phone: '+1 (948) 460-3627',
        age: 31,
        address: { street: 'South street', number: 12 },
        company: 'KNOWLYSIS',
        name: 'Heidi Duncan',
        isActive: true,
    }, {
        phone: '+1 (934) 551-2224',
        age: 20,
        address: { street: 'North street', number: 12 },
        company: 'ZILLANET',
        name: 'Valentine Webb',
        isActive: false,
    }, {
        phone: '+1 (948) 460-3627',
        age: 31,
        address: { street: 'South street', number: 12 },
        company: 'KNOWLYSIS',
        name: 'Heidi Duncan',
        isActive: true,
    }, {
        phone: '+1 (934) 551-2224',
        age: 20,
        address: { street: 'North street', number: 12 },
        company: 'ZILLANET',
        name: 'Valentine Webb',
        isActive: false,
    }, {
        phone: '+1 (948) 460-3627',
        age: 31,
        address: { street: 'South street', number: 12 },
        company: 'KNOWLYSIS',
        name: 'Heidi Duncan',
        isActive: true,
    }, {
        phone: '+1 (934) 551-2224',
        age: 20,
        address: { street: 'North street', number: 12 },
        company: 'ZILLANET',
        name: 'Valentine Webb',
        isActive: false,
    }, {
        phone: '+1 (948) 460-3627',
        age: 31,
        address: { street: 'South street', number: 12 },
        company: 'KNOWLYSIS',
        name: 'Heidi Duncan',
        isActive: true,
    }, {
        phone: '+1 (934) 551-2224',
        age: 20,
        address: { street: 'North street', number: 12 },
        company: 'ZILLANET',
        name: 'Valentine Webb',
        isActive: false,
    }, {
        phone: '+1 (948) 460-3627',
        age: 31,
        address: { street: 'South street', number: 12 },
        company: 'KNOWLYSIS',
        name: 'Heidi Duncan',
        isActive: true,
    }, {
        phone: '+1 (934) 551-2224',
        age: 20,
        address: { street: 'North street', number: 12 },
        company: 'ZILLANET',
        name: 'Valentine Webb',
        isActive: false,
    }, {
        phone: '+1 (948) 460-3627',
        age: 31,
        address: { street: 'South street', number: 12 },
        company: 'KNOWLYSIS',
        name: 'Heidi Duncan',
        isActive: true,
    }, {
        phone: '+1 (934) 551-2224',
        age: 20,
        address: { street: 'North street', number: 12 },
        company: 'ZILLANET',
        name: 'Valentine Webb',
        isActive: false,
    }, {
        phone: '+1 (948) 460-3627',
        age: 31,
        address: { street: 'South street', number: 12 },
        company: 'KNOWLYSIS',
        name: 'Heidi Duncan',
        isActive: true,
    }];

    ngOnInit(): void {
        this.configuration = { ...DefaultConfig };
        this.configuration.searchEnabled = true;
        this.configuration.orderEnabled = true;
        // ... etc.
        this.columns = [
            { key: 'phone', title: 'Phone' },
            { key: 'age', title: 'Age' },
            { key: 'company', title: 'Company' },
            { key: 'name', title: 'Name' },
            { key: 'isActive', title: 'STATUS' },
            { key: 'action', title: 'Actions', cellTemplate: this.actionTpl },

        ];
    }
    onChange(name: string): void {
        this.table.apiEvent({
            type: API.onGlobalSearch, value: name,
        });
    }

    addRow(): void {
        this.data = [
            ...this.data,
            {
                isActive: false,
                name: "Avinash",
                company: 'foo',
                age: 29,
                phone: '7868465685654',
                address: { street: "test", number: 11 }
            },
        ];
    }

    remove(row: any): void {

    }
    makeActive(row) {

    }
    makeDeactive(row) {

    }
    edit(row) {

    }
    public csvExportWhole(): void {
        const csvExporter = new ExportToCsv(this.csvOptions);
        csvExporter.generateCsv(this.data);
      }
}
