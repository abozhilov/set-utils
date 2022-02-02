import * as assert from 'assert/strict';
import { isSuperset } from '../src/index.js';

describe('isSuperset()', () => {
    it('Should return true if setA is a superset of setB', () => {
        assert.equal(
            isSuperset(new Set([1, 2, 3]), new Set([1, 2])),
            true
        );
    });

    it('Should return true if setA is not a strict superset of setB', () => {
        assert.equal(
            isSuperset(new Set([1, 2]), new Set([1, 2])),
            true
        );
    });
    
    it('Should return false if setA is not a superset of setB', () => {
        assert.equal(
            isSuperset(new Set([2, 3, 4]), new Set([1, 2])),
            false
        );
    });    
});