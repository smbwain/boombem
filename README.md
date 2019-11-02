Small, fast, dependencies free helper for BEM class name generation.

```js
import bem from 'boombem';

const cn = bem('Block');
console.log( cn() ); // Block
console.log( cn('Element') ); // Block__Element
console.log( cn('Element', {
    a: true,
    b: false,
    c: 0,
    d: {},
    e: '1'
})); // Block__Element Block__Element--a Block__Element--d Block__Element--e
```
