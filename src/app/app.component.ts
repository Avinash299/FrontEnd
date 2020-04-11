import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private loadingService:LoadingService) {
    }

    ngOnInit() {
    }
}
