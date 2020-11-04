import { race, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export function CacheDecorator(ttl: number) {
    return (
        target: object,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        const originalFunction = descriptor.value;

        target[`${propertyKey}_cached`] = new ReplaySubject(1, ttl);

        descriptor.value = function(...args) {
            const request = originalFunction.apply(this, args).pipe(
                tap(response => {
                    this[`${propertyKey}_cached`].next(response);
                })
            );

            return race(this[`${propertyKey}_cached`], request);
        };

        return descriptor;
    };
}
