import { ApiResponse } from 'interfaces/api-response.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urls } from 'config/config';
import { Match } from 'models/match';
import { Observable } from 'rxjs';

@Injectable()
export class MatchService {
    constructor(private readonly http: HttpClient) {}

    public findAll(): Observable<ApiResponse<Match[]>> {
        return this.http.get<ApiResponse<Match[]>>(urls.matches);
    }

    public findOne(id: string): Observable<ApiResponse<Match>> {
        return this.http.get<ApiResponse<Match>>(`${urls.matches}/${id}`);
    }
}
