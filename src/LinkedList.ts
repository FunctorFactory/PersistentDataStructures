export interface EmptyList extends Iterable<any> {
  readonly _tag: 'EmptyList';
}

export interface LinkedListNode<T> extends Iterable<T> {
  readonly value: T;
  readonly next: LinkedList<T>;
}

export type LinkedList<T> = LinkedListNode<T> | EmptyList;

export const empty: EmptyList = {
  _tag: 'EmptyList',
  *[Symbol.iterator]() {},
};

export const isEmpty = <T>(self: LinkedList<T>): self is EmptyList =>
  '_tag' in self;

export const make = <T>(
  value: T,
  next: LinkedList<T> = empty,
): LinkedList<T> => ({
  value,
  next,
  *[Symbol.iterator]() {
    yield value;
    yield* next;
  },
});

export const prepend = <T>(self: LinkedList<T>, value: T): LinkedList<T> =>
  make(value, self);

export const concat = <T>(
  self: LinkedList<T>,
  other: LinkedList<T>,
): LinkedList<T> => {
  if (isEmpty(self)) {
    // If self is empty then the result is other
    return other;
  } else {
    // If self has more than one element, then we recursively concat the next part of the list
    return make(self.value, concat(self.next, other));
  }
};

export const append = <T>(self: LinkedList<T>, value: T): LinkedList<T> =>
  concat(self, make(value));
