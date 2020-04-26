import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TimelinePart } from 'models/timeline-part';
import { MatchEvent } from 'models/event';

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
            this.maxTime = this.calculateMaxTime(changes.events.currentValue);
            this.getPartsCount();
            this.generateTimelineParts();
            this.distributeEvents();
        }
    }

    ngOnInit(): void {}

    counter(i) {
        return new Array(i);
    }

    private calculateMaxTime(events): number {
        return events.reduce((acc, curr) => {
            if (curr.time > acc) {
                return curr.time;
            }
            return acc;
        }, 0);
    }

    private getPartsCount() {
        this.partsCount = Math.ceil(this.maxTime / delimiter);
    }

    private generateTimelineParts() {
        for (let i = 0; i < this.partsCount; i++) {
            const part = new TimelinePart();
            part.start = i * delimiter;
            part.end = i * delimiter + delimiter - 1;
            part.events = [];
            this.parts[i + 1] = part;
        }
    }

    private distributeEvents() {
        this.events.map((event: MatchEvent) => {
            const eventPart = Math.ceil(event.time / delimiter);

            this.parts[eventPart].events.push(event);
        });
    }
}
