import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatchEvent } from 'models/event';
import { TimelinePart } from 'models/timeline-part';

const delimiter = 60;

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit, OnChanges {
    @Input() events: MatchEvent[];

    private maxTime: number;
    public parts = {};
    public partsCount = 0;

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.events && !changes.events.firstChange) {
            this.maxTime = changes.events.currentValue.reduce((acc, curr) => {
                if (curr.time > acc) {
                    return curr.time;
                }
                return acc;
            }, 0);

            this.partsCount = Math.ceil(this.maxTime / delimiter);

            for (let i = 0; i < this.partsCount; i++) {
                const part = new TimelinePart();
                part.start = i * delimiter;
                part.end = i * delimiter + delimiter - 1;
                part.events = [];
                this.parts[i + 1] = part;
            }

            this.events.map((event: MatchEvent) => {
                const eventPart = Math.ceil(event.time / delimiter);

                this.parts[eventPart].events.push(event);
            });
        }
    }

    ngOnInit(): void {}

    counter(i) {
        return new Array(i);
    }
}
