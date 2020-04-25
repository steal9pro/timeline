import { Router, CanActivate } from '@angular/router';
import { AuthService } from 'services/auth.service';
import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
    constructor(private user: AuthService, private router: Router) {}

    canActivate() {
        return this.user.isLoggedIn().pipe(
            switchMap((logged) => {
                if (logged) {
                    return of(true);
                } else {
                    this.router.navigate(['/login']);
                    return of(false);
                }
            }),
        );
    }
}
