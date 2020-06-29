import bem from '..';

describe('boombem', () => {
    it('should work', () => {
        const cn = bem('Block');
        expect( cn() ).toEqual('Block');
        expect( cn('Element') ).toEqual('Block__Element');
        expect( cn('Element', {a: true, b: false, c: 0, d: {}, e: '1'}) ).toEqual('Block__Element Block__Element--a Block__Element--d Block__Element--e');
        expect( cn('Element', {a: true, b: false}, 'aaa') ).toEqual('Block__Element Block__Element--a aaa');
    });
});
