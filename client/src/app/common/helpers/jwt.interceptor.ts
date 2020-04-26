import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    private jwtHelper: JwtHelperService;
    constructor(private authService: AuthService, private router: Router) {
        this.jwtHelper = new JwtHelperService();
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.rawAccessToken;

        if (token) {
            if (this.jwtHelper.isTokenExpired(token)) {
                this.authService.logout();
                this.router.navigate(['/login']);
            } else {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }
        }

        return next.handle(request);
    }
}
