import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    private employeesUrl = 'https://jsonplaceholder.typicode.com/users';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) {}

    getEmployees(): Observable<Employees[]> {
        return this.http
            .get<Employees[]>(this.employeesUrl, this.httpOptions)
            .pipe(
                tap(_ => this.log('fetched employees')),
                catchError(this.handleError<Employees[]>('getEmployees', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }

    getEmployee(id: number): Observable<Employees> {
        const url = `${this.employeesUrl}/${id}`;
        return this.http.get<Employees>(url, this.httpOptions).pipe(
            tap(_ => this.log(`fetched Employee id: ${id}`)),
            catchError(this.handleError<Employees>(`get Employee id: ${id}`))
        );
    }

    private log(message: string) {
        console.log(`EmployeesService: ${message}`);
    }
}
