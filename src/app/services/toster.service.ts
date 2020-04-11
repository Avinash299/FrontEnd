import { Injectable } from '@angular/core';
import { Toaster } from 'ngx-toast-notifications';
const NOTIFY=" Notification"
@Injectable({
    providedIn: 'root'
})

export class TosterService {

    constructor(public toaster: Toaster) {
    }

    success(msg, title) {
        this.toaster.open({
            text: msg,
            caption: title+NOTIFY,
            type: "success",
        });
    }

    error(msg, title) {
        this.toaster.open({
            text: msg,
            caption: title+NOTIFY,
            type: "danger",
        });
    }
    warning(msg, title) {
        this.toaster.open({
            text: msg,
            caption: title+NOTIFY,
            type: "warning",
        });
    }
    info(msg, title) {
        this.toaster.open({
            text: msg,
            caption: title+NOTIFY,
            type: "info",
        });
    }
}