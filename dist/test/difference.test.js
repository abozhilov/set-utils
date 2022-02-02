import * as assert from 'assert/strict';
import { difference } from '../src/index.js';
describe('difference()', () => {
    it('Should return a new set with all elements of `setA` that not belongs to `setB`', () => {
        assert.deepEqual(difference(new Set([1, 2, 3]), new Set([3, 4, 5])), new Set([1, 2]));
    });
    it('Should return a new set with all elements from `setA` that not belongs to any other set', () => {
        assert.deepEqual(difference(new Set([1, 2, 3, 4, 5]), new Set([3, 4]), new Set([4, 5])), new Set([1, 2]));
    });
});
//# sourceMappingURL=difference.test.js.map