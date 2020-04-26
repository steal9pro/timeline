import { ApiResponse } from 'interfaces/api-response.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { urls } from '../config/config';
import { of, Observable } from 'rxjs';

interface LoginResponse {
    access_token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private tokenKey = 'access_token';
    private jwtHelper: JwtHelperService;

    constructor(private http: HttpClient) {
        this.jwtHelper = new JwtHelperService();
    }

    login({ email, password }: { email: string; password: string }) {
        return this.http
            .post(`${urls.login}`, {
                username: email,
                password,
            })
            .pipe(
                switchMap((res: ApiResponse<LoginResponse>) => {
                    if (res.success) {
                        const token = this.jwtHelper.decodeToken(res.data.access_token);
                        if (token) {
                            localStorage.setItem(this.tokenKey, res.data.access_token);
                            return of([true, null]);
                        } else {
                            return of([false, 'Not permitted']);
                        }
                    } else {
                        return of([false, res.message]);
                    }
                }),
            );
    }

    public logout() {
        localStorage.removeItem(this.tokenKey);
    }

    public isLoggedIn(): Observable<boolean> {
        if (!!localStorage.getItem(this.tokenKey)) {
            const token = localStorage.getItem(this.tokenKey);
            if (!this.isTokenExpired(token)) {
                return of(true);
            }
        }
        return of(false);
    }

    public get rawAccessToken(): string {
        return localStorage.getItem(this.tokenKey);
    }

    public isTokenExpired(token: string) {
        return this.jwtHelper.isTokenExpired(token);
    }
}
