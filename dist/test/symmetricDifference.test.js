import * as assert from 'assert/strict';
import { symmetricDifference } from '../src/index.js';
describe('symmetricDifference()', () => {
    it('Should return a new set with all elements of `setA` that not belongs to `setB` and vice versa', () => {
        assert.deepEqual(symmetricDifference(new Set([1, 2, 3]), new Set([3, 4, 5])), new Set([1, 2, 4, 5]));
    });
    it('Should return a new set with all elements from any set that not belongs to any other', () => {
        assert.deepEqual(symmetricDifference(new Set([1, 2, 3, 4]), new Set([3, 4, 5, 6]), new Set([4, 5, 7])), new Set([1, 2, 6, 7]));
    });
});
//# sourceMappingURL=symmetricDifference.test.js.map