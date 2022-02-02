import * as assert from 'assert/strict';
import { intersect } from '../src/index.js';
describe('intersect()', () => {
    it('Should return a new set with all elements of `setA` that also belongs to `setB`', () => {
        assert.deepEqual(intersect(new Set([1, 2, 3]), new Set([2, 3, 4])), new Set([2, 3]));
    });
    it('Should return a new set with all elements which are commong for each set', () => {
        assert.deepEqual(intersect(new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([2, 3, 5])), new Set([2, 3]));
    });
});
//# sourceMappingURL=intersect.test.js.map