export interface EmptyBinaryTree extends Iterable<any> {
  readonly _tag: 'EmptyBinaryTree';
}

export interface BinaryTreeNode<T> extends Iterable<T> {
  readonly item: T;
  readonly left: BinaryTree<T>;
  readonly right: BinaryTree<T>;
}

export type BinaryTree<T> = EmptyBinaryTree | BinaryTreeNode<T>;

export const isEmpty = <T>(u: BinaryTree<T>): u is EmptyBinaryTree =>
  '_tag' in u;

export const empty: EmptyBinaryTree = {
  _tag: 'EmptyBinaryTree',
  *[Symbol.iterator]() {},
};

export const create = <T>(
  item: T,
  left: BinaryTree<T> = empty,
  right: BinaryTree<T> = empty,
): BinaryTreeNode<T> => ({
  item,
  left,
  right,

  *[Symbol.iterator]() {
    yield* left;
    yield item;
    yield* right;
  },
});

export const contains = <T>(self: BinaryTree<T>, item: T): boolean => {
  if (isEmpty(self)) {
    return false;
  } else if (self.item === item) {
    return true;
  } else if (item < self.item) {
    return contains(self.left, item);
  } else {
    return contains(self.right, item);
  }
};

export const insert = <T>(self: BinaryTree<T>, item: T): BinaryTree<T> => {
  if (isEmpty(self)) {
    return create(item);
  } else if (self.item === item) {
    return self;
  } else if (item < self.item) {
    return create(self.item, insert(self.left, item), self.right);
  } else {
    return create(self.item, self.left, insert(self.right, item));
  }
};

export const insertIter = <T>(self: BinaryTree<T>, item: T): BinaryTree<T> => {
  const queue: BinaryTreeNode<T>[] = [];

  // eslint-disable-next-line functional/no-let
  let cur = self;
  // eslint-disable-next-line functional/no-loop-statements
  while (!isEmpty(cur)) {
    if (cur.item === item) {
      return self;
    }

    // eslint-disable-next-line functional/immutable-data
    queue.push(cur);
    // eslint-disable-next-line functional/no-conditional-statements
    if (item < cur.item) {
      cur = cur.left;
      // eslint-disable-next-line functional/no-conditional-statements
    } else {
      cur = cur.right;
    }
  }

  // eslint-disable-next-line functional/no-let
  let node = create(item);

  // eslint-disable-next-line functional/no-loop-statements
  while (queue.length > 0) {
    // eslint-disable-next-line functional/immutable-data
    const parent = queue.pop();
    if (!parent) {
      // Shouldn't be reachable, but it makes TSC happy
      continue;
    }

    // eslint-disable-next-line functional/no-conditional-statements
    if (node.item < parent.item) {
      node = create(parent.item, node, parent.right);
      // eslint-disable-next-line functional/no-conditional-statements
    } else {
      node = create(parent.item, parent.left, node);
    }
  }

  return node;
};
