/**
 * Checks whether `setA` is a subset of `setB`.
 * The operation is denoted by `setA ⊆ setB`.
 * 
 * ```ts
 *   assert.equal(
 *       isSubset(new Set([1, 2]), new Set([1, 2, 3])),
 *       true
 *   );
 * ```
 */
export function isSubset<Т>(setA:Set<Т>, setB:Set<Т>): boolean {
    for (const i of setA) {
        if (!setB.has(i)) {
            return false;
        }
    }

    return true;
}

/**
 * Checks whether `setA` is a strict (proper) subset of `setB`.
 * The operation is denoted by `setA ⊂ setB`.
 * 
 * ```ts
 *  assert.equal(
 *      isStrictSubset(new Set([1, 2]), new Set([1, 2, 3])),
 *      true
 *  );
 * ```
 * 
 * ```ts
 *  assert.equal(
 *      isStrictSubset(new Set([1, 2]), new Set([1, 2])),
 *      false
 *  );
 * ```
 * 
 */
export function isStrictSubset<Т>(setA:Set<Т>, setB:Set<Т>): boolean {
    if (setA.size !== setB.size) {
        return isSubset(setA, setB);
    }

    return false;
}

/**
 * Checks whether `setA` is a superset of `setB`.
 * The operation is denoted by `setA ⊇ setB`.
 * 
 * ```ts
 *   assert.equal(
 *       isSuperset(new Set([1, 2, 3]), new Set([1, 2])),
 *       true
 *   );
 * ```
 */
export function isSuperset<T>(setA:Set<T>, setB:Set<T>): boolean {
    return isSubset(setB, setA);
}

/**
 * Checks whether `setA` is a strict (proper) superset of `setB`.
 * The operation is denoted by `setA ⊃ setB`.
 * 
 * ```ts
 *  assert.equal(
 *      isStrictSuperset(new Set([1, 2, 3]), new Set([1, 2])),
 *      true
 *  );
 * ```
 * 
 * ```ts
 *  assert.equal(
 *      isStrictSuperset(new Set([1, 2]), new Set([1, 2])),
 *      false
 *  );
 * ```
 */
export function isStrictSuperset<T>(setA:Set<T>, setB:Set<T>): boolean {
    return isStrictSubset(setB, setA);
}

/**
 * Checks whether `setA` is structurally equal to `setB`.
 * 
 * ```ts
 *  assert.equal(
 *      isEqual(new Set([1, 2, 3]), new Set([2, 3, 1])),
 *      true
 *  );
 * ```
 * 
 * ```ts
 *  assert.equal(
 *      isEqual(new Set([1, 2, 3]), new Set([1, 2])),
 *      false
 *  );
 * ```
 */
export function isEqual<T>(setA:Set<T>, setB:Set<T>): boolean {
    return setA.size === setB.size && isSubset(setA, setB);
}

/**
 * Returns new set which contains all elements from each set. 
 * The operation is denoted by `setA ⋃ setB`.
 * 
 * ```ts
 *    assert.deepEqual(
 *        union(new Set([1, 2]), new Set([3, 4])),
 *        new Set([1, 2, 3, 4])
 *    );
 * ```
 * 
 * ```ts
 *    assert.deepEqual(
 *        union(new Set([1, 2]), new Set([3, 4]), new Set([5, 6])),
 *        new Set([1, 2, 3, 4, 5, 6])
 *    );
 * ```
 * 
 */
export function union<T>(
    setA:Set<T>,
    setB:Set<T>,
    ...restSets:Set<T>[]
): Set<T> {
    const set:Set<T> = new Set([...setA, ...setB]);
    
    for (const nextSet of restSets) {
        for (const i of nextSet) {
            set.add(i);
        }
    }

    return set;
}

/**
 * Returns a new set with all elements of `setA` that also belongs to `setB`.
 * The operation is denoted by `setA ⋂ setB`.
 * 
 * ```ts
 *    assert.deepEqual(
 *        intersect(new Set([1, 2, 3]), new Set([2, 3, 4])),
 *        new Set([2, 3])
 *    );
 * ```
 * 
 * ```ts
 *    assert.deepEqual(
 *        intersect(new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([2, 3, 5])),
 *        new Set([2, 3])
 *    );
 * ```
 */
export function intersect<T>(
    setA:Set<T>,
    setB:Set<T>,
    ...sets:Set<T>[]
): Set<T> {
    const set:Set<T> = new Set();
    const restSets = [setB, ...sets];

    intersectIterator: for (const i of setA) {
        for (const nextSet of restSets) {
            if (!nextSet.has(i)) {
                continue intersectIterator;
            }
        }

        set.add(i);
    }

    return set;
}

/**
 * Returns a new set with all elements of `setA` that not belongs to `setB`.
 * The operation is denoted by `setA \ setB`.
 * 
 * ```ts
 *    assert.deepEqual(
 *        difference(new Set([1, 2, 3]), new Set([3, 4, 5])),
 *        new Set([1, 2])
 *    );
 * ```
 * 
 * ```ts
 *    assert.deepEqual(
 *        difference(new Set([1, 2, 3, 4, 5]), new Set([3, 4]), new Set([4, 5])),
 *        new Set([1, 2])
 *    );
 * ```
 */
export function difference<T>(
    setA:Set<T>,
    setB:Set<T>,
    ...sets:Set<T>[]
): Set<T> {
    const set:Set<T> = new Set();
    const restSets = [setB, ...sets];

    diffIterator: for (const i of setA) {
        for (const nextSet of restSets) {
            if (nextSet.has(i)) {
                continue diffIterator;
            }
        }

        set.add(i);
    }

    return set;
}

/**
 * Returns a new set with all elements of `setA` that not belongs to `setB` and vice versa.
 * The operation is denoted by `setA ∆ setB`.
 * 
 * ```ts
 *    assert.deepEqual(
 *        symmetricDifference(new Set([1, 2, 3]), new Set([3, 4, 5])),
 *        new Set([1, 2, 4, 5])
 *    );
 * ```
 * 
 * ```ts
 *    assert.deepEqual(
 *        symmetricDifference(new Set([1, 2, 3, 4]), new Set([3, 4, 5, 6]), new Set([4, 5, 7])),
 *        new Set([1, 2, 6, 7])
 *    );
 * ```
 */
export function symmetricDifference<T>(
    setA:Set<T>,
    setB:Set<T>,
    ...sets:Set<T>[]
): Set<T> {
    const set:Set<T> = new Set();
    const map:Map<T, boolean> = new Map();
    const arrSets = [setA, setB, ...sets];

    for (const nextSet of arrSets) {
        for (const i of nextSet) {
            if (!map.has(i)) {
                map.set(i, true);
            } else {
                map.set(i, false);
            }
        }
    }

    for (const [key, value] of map) {
        if (value) {
            set.add(key);
        }
    }

    return set;
}