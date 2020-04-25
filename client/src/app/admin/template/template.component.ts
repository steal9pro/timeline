import { AuthService } from 'services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
    constructor(private readonly authService: AuthService, private readonly router: Router) {}

    ngOnInit(): void {}

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
