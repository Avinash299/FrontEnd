import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MustMatch } from '../interceptor/must-match.validator';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(  private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService,) {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }else{
            this.authService.register(this.registerForm.value)
            .subscribe(
                data => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
                     this.router.navigate(['/dashboard']);
                },
                error => {
                 
         });
        }
    
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
