import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storege.service';
import { TosterService } from '../services/toster.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;

    constructor(  private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService,
        private toaster: TosterService,
        private tokenService: TokenStorageService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }else{
            this.authService.login(this.loginForm.value)
            .subscribe(
                data => {
                    if(data.success) {
                        this.tokenService.saveToken(data.token);
                        this.tokenService.saveUser(data.data);
                        this.router.navigate(['/dashboard']);
                        this.toaster.success(data.msg,'Login');

                    }else{
                        this.toaster.warning(data.msg,'Login');
                    }
                     
                },
                error => {
                    this.toaster.error(error.error.msg,'Login');
                });
        }
    
    }
    onReset() {
        this.submitted = false;
        this.loginForm.reset();
    }
}
