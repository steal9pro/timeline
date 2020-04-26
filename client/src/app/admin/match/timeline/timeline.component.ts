import { TimelinePart } from 'models/timeline-part';
import { Component, Input } from '@angular/core';
import { MatchEvent } from 'models/event';

const delimiter = 60;

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
    @Input()
    set events(events: MatchEvent[]) {
        if (!events) {
            return;
        }
        this.maxTime = this.calculateMaxTime(events);
        this.getPartsCount();
        this.generateTimelineParts();
        this.distributeEvents(events);
    }

    private maxTime: number;
    public parts = {};
    public partsCount = 0;

    constructor() {}

    counter(i): Array<unknown> {
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

    private getPartsCount(): void {
        this.partsCount = Math.ceil(this.maxTime / delimiter);
    }

    private generateTimelineParts(): void {
        for (let i = 0; i < this.partsCount; i++) {
            const part = new TimelinePart();
            part.start = i * delimiter;
            part.end = i * delimiter + delimiter - 1;
            part.events = [];
            this.parts[i + 1] = part;
        }
    }

    private distributeEvents(events: MatchEvent[]): void {
        events.map((event: MatchEvent) => {
            const eventPart = Math.ceil(event.time / delimiter);

            this.parts[eventPart].events.push(event);
        });
    }
}
