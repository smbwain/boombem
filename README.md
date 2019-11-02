Small, fast, dependencies free helper for BEM class name generation.

```js
import bem from 'boombem';

const cn = bem('Component');
console.log( cn() ); // Component
console.log( cn('Element') ); // Component__Element
console.log( cn('Element', {
    a: true,
    b: false,
    c: 0,
    d: {},
    e: '1'
})); // Component__Element Component__Element--a Component__Element--d Component__Element--e
```
