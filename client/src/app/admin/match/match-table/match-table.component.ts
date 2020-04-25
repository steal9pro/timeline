import { Component, OnInit } from '@angular/core';
import { MatchService } from 'services/match.service';
import { ApiResponse } from 'interfaces/api-response.interface';
import { Match } from 'models/match';

@Component({
    selector: 'app-match-table',
    templateUrl: './match-table.component.html',
    styleUrls: ['./match-table.component.scss'],
})
export class MatchTableComponent implements OnInit {
    public dataSource: Match[];

    public props = ['Id', 'Created at', 'Link'];

    constructor(private readonly matchService: MatchService) {
        this.matchService.findAll().subscribe((res: ApiResponse<Match[]>) => {
            if (res.success) {
                this.dataSource = res.data;
            }
        });
    }

    ngOnInit(): void {}
}
