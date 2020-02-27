import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    columns=[];
    records=[];
    constructor() {}

    ngOnInit() {
        this.columns.push({
            displayName:"Name",
            dbName:"name"
        })
        this.columns.push({
            displayName:"Age",
            dbName:"age"
        })
        this.records.push({
            "age":20,
            "name":"Avinash"
        })
        this.records.push({
            "age":21,
            "name":"Avinash"
        })
        this.records.push({
            "age":20,
            "name":"Avinash"
        })
        this.records.push({
            "age":21,
            "name":"Avinash"
        })
        this.records.push({
            "age":20,
            "name":"Avinash"
        })
        this.records.push({
            "age":21,
            "name":"Avinash"
        })
        this.records.push({
            "age":20,
            "name":"Avinash"
        })
        this.records.push({
            "age":21,
            "name":"Avinash"
        })
        this.records.push({
            "age":20,
            "name":"Avinash"
        })
        this.records.push({
            "age":21,
            "name":"Avinash"
        })
        this.records.push({
            "age":20,
            "name":"Avinash"
        })
        this.records.push({
            "age":21,
            "name":"Avinash"
        })
    }
}
