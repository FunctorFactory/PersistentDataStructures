import { describe, expect, it } from '@jest/globals';
import * as BinarySearchTree from '@/BinarySearchTree.js';

describe('BinarySearchTree', () => {
  it('Implements the iterable protocol', () => {
    const one = BinarySearchTree.create(1);
    const three = BinarySearchTree.create(3);
    const two = BinarySearchTree.create(2, one, three);

    expect([...two]).toEqual([1, 2, 3]);
  });

  it('can search for elements', () => {
    const one = BinarySearchTree.create(1);
    const three = BinarySearchTree.create(3);
    const two = BinarySearchTree.create(2, one, three);

    expect(BinarySearchTree.contains(two, 1)).toBeTruthy();
    expect(BinarySearchTree.contains(two, 2)).toBeTruthy();
    expect(BinarySearchTree.contains(two, 3)).toBeTruthy();
    expect(BinarySearchTree.contains(two, 4)).toBeFalsy();
  });

  it('can insert new elements', () => {
    const first = BinarySearchTree.insert(BinarySearchTree.empty, 5);
    const second = BinarySearchTree.insert(first, 4);
    const _third = BinarySearchTree.insert(second, 6);
    const third = BinarySearchTree.insert(_third, 6);

    expect([...first]).toEqual([5]);
    expect([...second]).toEqual([4, 5]);
    expect([...third]).toEqual([4, 5, 6]);
  });

  it('can insert new elements iteratively', () => {
    const first = BinarySearchTree.insertIter(BinarySearchTree.empty, 5);
    const second = BinarySearchTree.insertIter(first, 4);
    const _third = BinarySearchTree.insertIter(second, 6);
    const third = BinarySearchTree.insertIter(_third, 6);

    expect([...first]).toEqual([5]);
    expect([...second]).toEqual([4, 5]);
    expect([...third]).toEqual([4, 5, 6]);
  });
});
