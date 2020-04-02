import { SortDescendingPipe } from './sort-descending.pipe';

fdescribe('DescendingPipe', () => {
    const employees = [
        { id: 1, name: 'c', username: 'q' },
        { id: 2, name: 'b', username: 'w' },
        { id: 3, name: 'a', username: 'e' }
    ];
    const employeesSorted = [
        { id: 1, name: 'c', username: 'q' },
        { id: 2, name: 'b', username: 'w' },
        { id: 3, name: 'a', username: 'e' }
    ];

    it('create an instance', () => {
        const pipe = new SortDescendingPipe();
        expect(pipe).toBeTruthy();
    });

    it('should sort in descending order', () => {
        const pipe = new SortDescendingPipe();
        const result = pipe.transform(employees, true);
        expect(result).toEqual(employeesSorted);
    });
});
