import { Component, OnInit, Input } from '@angular/core';
import { EventType } from 'enums/event.enum';
import { MatchEvent } from 'models/event';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
    @Input() event: MatchEvent;
    public events = EventType;

    constructor() {}

    ngOnInit(): void {}
}
