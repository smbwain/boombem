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

How to use with React
=====================

```jsx
import React from 'react';
import bem from 'boombem';

const cn = bem('MyComponent');

export const MyComponent = () => {
    return (
        <div className={cn()}>
            <div className={cn('item')}/>
            <div className={cn('item', {active: true})}/>
        </div>
    );
};
```

The result is:
```
<div class="MyComponent">
    <div class="MyComponent__item"></div>
    <div class="MyComponent__item MyComponent__item--active"></div>
</div>
```