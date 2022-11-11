import * as assert from 'assert/strict';
import { isEqual } from '../src/index.js';
describe('isEqual()', () => {
    it('Should return true if setA is equal to setB', () => {
        assert.equal(isEqual(new Set([1, 2, 3]), new Set([1, 2, 3])), true);
    });
    it('Should return false if setA is not equal to setB', () => {
        assert.equal(isEqual(new Set([1, 2, 3]), new Set([1, 2])), false);
    });
});
//# sourceMappingURL=isEqual.test.js.map