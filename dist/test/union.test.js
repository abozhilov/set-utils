import * as assert from 'assert/strict';
import { union } from '../src/index.js';
describe('union()', () => {
    it('Should return all elements from setA and setB', () => {
        assert.deepEqual(union(new Set([1, 2]), new Set([3, 4])), new Set([1, 2, 3, 4]));
    });
    it('Should return all elements from N sets', () => {
        assert.deepEqual(union(new Set([1, 2]), new Set([3, 4]), new Set([5, 6])), new Set([1, 2, 3, 4, 5, 6]));
    });
});
//# sourceMappingURL=union.test.js.map