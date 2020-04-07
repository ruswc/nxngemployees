import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeaderEmployeeNameService {
    employeeName$ = new BehaviorSubject('');

    constructor() {}

    setEmployeeName(name): void {
        this.employeeName$.next(name);
    }

    getEmployeeName(): Observable<string> {
        return this.employeeName$;
    }
}
