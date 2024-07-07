import { describe, expect, it } from '@jest/globals';

import * as LinkedList from '@/LinkedList.js';

describe('LinkedList', () => {
  it('implements the iterable protocol', () => {
    const list = LinkedList.make(1, LinkedList.make(2, LinkedList.make(3)));
    expect([...list]).toEqual([1, 2, 3]);
  });

  it('can prepend an item to the front of the list', () => {
    const list = LinkedList.make(2, LinkedList.make(3));
    const result = LinkedList.prepend(list, 1);

    expect([...result]).toEqual([1, 2, 3]);
  });

  it('can concatenate two lists', () => {
    const list1 = LinkedList.make(1, LinkedList.make(2));
    const list2 = LinkedList.make(3, LinkedList.make(4));
    const result = LinkedList.concat(list1, list2);

    expect([...list1]).toEqual([1, 2]);
    expect([...list2]).toEqual([3, 4]);
    expect([...result]).toEqual([1, 2, 3, 4]);
  });

  it('can append an item to the end of the list', () => {
    const list = LinkedList.make(1, LinkedList.make(2));
    const result = LinkedList.append(list, 3);

    expect([...list]).toEqual([1, 2]);
    expect([...result]).toEqual([1, 2, 3]);
  });
});
