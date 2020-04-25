import { Component, OnInit, Input } from '@angular/core';
import { MatchEvent } from 'models/event';
import { EventType } from '../../../enums/event.enum';

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
