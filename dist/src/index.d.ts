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
export declare function isSubset<Т>(setA: Set<Т>, setB: Set<Т>): boolean;
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
export declare function isStrictSubset<Т>(setA: Set<Т>, setB: Set<Т>): boolean;
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
export declare function isSuperset<T>(setA: Set<T>, setB: Set<T>): boolean;
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
export declare function isStrictSuperset<T>(setA: Set<T>, setB: Set<T>): boolean;
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
export declare function union<T>(setA: Set<T>, setB: Set<T>, ...restSets: Set<T>[]): Set<T>;
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
export declare function intersect<T>(setA: Set<T>, setB: Set<T>, ...sets: Set<T>[]): Set<T>;
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
export declare function difference<T>(setA: Set<T>, setB: Set<T>, ...sets: Set<T>[]): Set<T>;
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
export declare function symmetricDifference<T>(setA: Set<T>, setB: Set<T>, ...sets: Set<T>[]): Set<T>;
