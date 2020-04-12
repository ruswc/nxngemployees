import { Injectable } from '@angular/core';
import {
    AsyncSubject,
    BehaviorSubject,
    Observable,
    ReplaySubject,
    Subject
} from 'rxjs';

export interface TheEmployee {
    id: number;
    name: string;
    username: string;
    email?: string;
    phone?: string;
    website?: string;
}

@Injectable({
    providedIn: 'root'
})
export class EmployeeEditDataServiceService {
    editFormState$ = new BehaviorSubject(false);

    behaviorSubject$ = new BehaviorSubject(null);

    constructor() {}

    showEditForm(): void {
        this.editFormState$.next(true);
    }

    hideEditForm(): void {
        this.editFormState$.next(false);
    }

    setEmployee(employee): void {
        this.behaviorSubject$.next(employee);
    }
}
