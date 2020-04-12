import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
    addFormState$ = new BehaviorSubject(false);

    theEmployeeSubject$ = new BehaviorSubject(null);

    constructor() {}

    showEditForm(): void {
        this.editFormState$.next(true);
    }

    hideEditForm(): void {
        this.editFormState$.next(false);
    }

    showAddForm(): void {
        this.addFormState$.next(true);
    }

    hideAddForm(): void {
        this.addFormState$.next(false);
    }

    setEmployee(employee): void {
        this.theEmployeeSubject$.next(employee);
    }
}
