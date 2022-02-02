import * as assert from 'assert/strict';
import { isStrictSuperset } from '../src/index.js';

describe('isStrictSuperset()', () => {
    it('Should return true if setA is a strict superset of setB', () => {
        assert.equal(
            isStrictSuperset(new Set([1, 2, 3]), new Set([1, 2])),
            true
        );
    });

    it('Should return false if setA is not a strict superset of setB', () => {
        assert.equal(
            isStrictSuperset(new Set([1, 2]), new Set([1, 2])),
            false
        );
    });
    
    it('Should return false if setA is not a superset of setB', () => {
        assert.equal(
            isStrictSuperset(new Set([2, 3, 4]), new Set([1, 2])),
            false
        );
    });    
});