import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storege.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,private tokenService:TokenStorageService) {}

    canActivate() {
        if (this.tokenService.getToken()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;

        
    }
}
