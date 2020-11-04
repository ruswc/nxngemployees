import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as EmployeesActions from './employees.actions';

@Injectable()
export class EmployeesEffects {
    loadEmployees$ = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeesActions.loadEmployees)
            /*                        fetch({
                            run: action => {
                                // Your custom service 'load' logic goes here. For now just return a success action...
                                return EmployeesActions.loadEmployeesSuccess({
                                    employees: []
                                });
                            },

                            onError: (action, error) => {
                                console.error('Error', error);
                                return EmployeesActions.loadEmployeesFailure({ error });
                            }
                        })*/
        )
    );

    constructor(private actions$: Actions) {}
}

/*
 * test for employees.effects.spec.ts
 *
 * import { TestBed } from '@angular/core/testing';
 *
 *import { provideMockActions } from '@ngrx/effects/testing';
 *import { provideMockStore } from '@ngrx/store/testing';
 *
 *import { DataPersistence, NxModule } from '@nrwl/angular';
 *import { hot } from '@nrwl/angular/testing';
 *
 *import { Observable } from 'rxjs';
 *import * as EmployeesActions from './employees.actions';
 *
 *import { EmployeesEffects } from './employees.effects';
 *
 *describe('EmployeesEffects', () => {
 *    let actions: Observable<any>;
 *    let effects: EmployeesEffects;
 *
 *    beforeEach(() => {
 *        TestBed.configureTestingModule({
 *            imports: [NxModule.forRoot()],
 *            providers: [
 *                EmployeesEffects,
 *                DataPersistence,
 *                provideMockActions(() => actions),
 *                provideMockStore()
 *            ]
 *        });
 *
 *        effects = TestBed.get(EmployeesEffects);
 *    });
 *
 *    describe('loadEmployees$', () => {
 *        it('should work', () => {
 *            actions = hot('-a-|', { a: EmployeesActions.loadEmployees() });
 *
 *            const expected = hot('-a-|', {
 *                a: EmployeesActions.loadEmployeesSuccess({ employees: [] })
 *            });
 *
 *            expect(effects.loadEmployees$).toBeObservable(expected);
 *        });
 *    });
 *});
 *
 * */
