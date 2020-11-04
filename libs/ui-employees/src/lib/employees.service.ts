import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheDecorator } from '@nxngemployees/shared';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface Employees {
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
export class EmployeesService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    private employeesUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) {}

    @CacheDecorator(5000)
    getEmployees(): Observable<Employees[]> {
        return this.http
            .get<Employees[]>(this.employeesUrl, this.httpOptions)
            .pipe(
                tap(() => this.log('fetched employees')),
                catchError(this.handleError<Employees[]>('getEmployees', []))
            );
    }

    @CacheDecorator(3000)
    getEmployee(id: number): Observable<Employees> {
        const url = `${this.employeesUrl}/${id}`;
        return this.http.get<Employees>(url, this.httpOptions).pipe(
            tap(_ => this.log(`fetched Employee id: ${id}`)),
            catchError(this.handleError<Employees>(`get Employee id: ${id}`))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }

    private log(message: string) {
        console.log(`EmployeesService: ${message}`);
    }
}
