import * as assert from 'assert/strict';
import { isSubset } from '../src/index.js';
describe('isSubset()', () => {
    it('Should return true if setA is a subset of setB', () => {
        assert.equal(isSubset(new Set([1, 2]), new Set([1, 2, 3])), true);
    });
    it('Should return true if setA is not a strict subset of setB', () => {
        assert.equal(isSubset(new Set([1, 2]), new Set([1, 2])), true);
    });
    it('Should return false if setA is not a subset of setB', () => {
        assert.equal(isSubset(new Set([1, 2]), new Set([2, 3, 4])), false);
    });
});
//# sourceMappingURL=isSubset.test.js.map