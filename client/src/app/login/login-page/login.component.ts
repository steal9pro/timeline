import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public form: FormGroup;

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

    ngOnInit(): void {}

    onSubmit() {
        if (this.form.valid) {
            this.authService.login(this.form.value).subscribe(([success, message]) => {
                if (success) {
                    this.router.navigate(['/dashboard']);
                } else {
                    console.log('error');
                }
            });
        }
    }
}
