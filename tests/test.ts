import bem from '..';

describe('reabem', () => {
    it('should work', () => {
        const cn = bem('Component');
        expect( cn() ).toEqual('Component');
        expect( cn('Element') ).toEqual('Component__Element');
        expect( cn('Element', {a: true, b: false, c: 0, d: {}, e: '1'}) ).toEqual('Component__Element Component__Element--a Component__Element--d Component__Element--e');
    });
});
