import { SortAscendingPipe } from './sort-ascending.pipe';

fdescribe('AscendingPipe', () => {
    const employees = [
        { id: 1, name: 'c', username: 'q' },
        { id: 2, name: 'b', username: 'w' },
        { id: 3, name: 'a', username: 'e' }
    ];
    const employeesSorted = [
        { id: 3, name: 'a', username: 'e' },
        { id: 2, name: 'b', username: 'w' },
        { id: 1, name: 'c', username: 'q' }
    ];

    it('create an instance', () => {
        const pipe = new SortAscendingPipe();
        expect(pipe).toBeTruthy();
    });

    it('should sort in ascending order', () => {
        const pipe = new SortAscendingPipe();
        const result = pipe.transform(employees, true);
        expect(result).toEqual(employeesSorted);
    });
});
