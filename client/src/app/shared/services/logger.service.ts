import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { LocalStorageService } from "./local-storage.service";

export interface ILog {
    duration: number;
    index: number;
    start: number;
}

@Injectable({
    providedIn: 'root'
})

export class LoggerService {
    public startOffset: number;
    public data: ILog[] = [];

    public log(start: number, index: number, duration: number): void {
        if (this.isStart) {
            this.startOffset = start;
        }

        this.data.push({ duration, index, start: (start - this.startOffset) });
        
    }

    private get isStart(): boolean {
        return !this.data?.length;
    }
}