import * as assert from 'assert/strict';
import { isStrictSubset } from '../src/index.js';

describe('isStrictSubset()', () => {
    it('Should return true if setA is a strict subset of setB', () => {
        assert.equal(
            isStrictSubset(new Set([1, 2]), new Set([1, 2, 3])),
            true
        );
    });

    it('Should return false if setA is not a strict subset of setB', () => {
        assert.equal(
            isStrictSubset(new Set([1, 2]), new Set([1, 2])),
            false
        );
    });
    
    it('Should return false if setA is not a subset of setB', () => {
        assert.equal(
            isStrictSubset(new Set([1, 2]), new Set([2, 3, 4])),
            false
        );
    });    
});