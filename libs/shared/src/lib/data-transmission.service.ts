import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataTransmissionService {
    private historyPath: string;

    constructor() {}

    setHistoryPath(path): void {
        this.historyPath = path;
        this.log();
    }

    getHistoryPath(): string {
        return this.historyPath;
    }

    clearHistoryPath(): void {
        this.historyPath = '';
        this.log();
    }

    log(): void {
        if (this.historyPath) {
            console.log(
                `%cPath: ${this.historyPath}`,
                'color:pink;font-weight:800'
            );
        } else {
            console.log(`%cPath is empty`, 'color:pink;font-weight:800');
        }
    }
}
