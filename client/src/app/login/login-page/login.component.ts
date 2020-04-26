import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public form: FormGroup;
    public wrongCredentials = false;

    constructor(
        private readonly authService: AuthService,
        private readonly fb: FormBuilder,
        private readonly router: Router,
    ) {
        this.form = this.fb.group({
            email: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }

    onSubmit(): void {
        this.wrongCredentials = false;

        if (this.form.valid) {
            this.authService.login(this.form.value).subscribe(
                ([success, message]) => {
                    if (success) {
                        this.router.navigate(['/dashboard']);
                    } else {
                        console.log('error');
                    }
                },
                (e) => {
                    this.wrongCredentials = true;
                },
            );
        }
    }
}
