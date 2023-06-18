import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

export interface IMark {
    start: number;
    name: string
}

@Injectable({
    providedIn: 'root'
})

export class MeasureService {
    marks: IMark[] = [];

    start() {
        this.marks.push(this.createMark());
    }

    end(): number {
        const mark = this.marks[this.marks.length - 1];
        const diff = performance.now() - mark.start
        this.marks = [];
        return diff;
    }

    createMark(): IMark {
        const start = performance.now();
        return {
            name: start.toString(),
            start
        };
    }

}