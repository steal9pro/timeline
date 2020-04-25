import { Component, OnInit, Input } from '@angular/core';
import { MatchEvent } from 'models/event';

@Component({
    selector: 'app-event-group',
    templateUrl: './event-group.component.html',
    styleUrls: ['./event-group.component.scss'],
})
export class EventGroupComponent implements OnInit {
    @Input() events: MatchEvent[];

    constructor() {}

    ngOnInit(): void {}
}
