import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tommss',
})
export class TommssPipe implements PipeTransform {
    transform(value: number): unknown {
        let minutes: string | number = Math.floor(value / 60);

        let seconds: string | number = value - minutes * 60;

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }
}
