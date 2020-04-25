import { MatchEvent } from './event';

export class Match {
    _id: string;
    time: number;
    events: MatchEvent[];
}
