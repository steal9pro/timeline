import { ApiResponse } from 'interfaces/api-response.interface';
import { MatchService } from 'services/match.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Match } from 'models/match';

@Component({
    selector: 'app-match-view',
    templateUrl: './match-view.component.html',
    styleUrls: ['./match-view.component.scss'],
})
export class MatchViewComponent implements OnInit {
    public match: Match;
    constructor(
        private readonly matchService: MatchService,
        private readonly route: ActivatedRoute,
    ) {
        this.route.params
            .pipe(
                switchMap((params) => {
                    if (params.id) {
                        return this.matchService.findOne(params.id);
                    }
                }),
            )
            .subscribe((res: ApiResponse<Match>) => {
                if (res.success) {
                    this.match = res.data;
                }
            });
    }

    ngOnInit(): void {}
}
