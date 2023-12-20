function lowestCommonAncestor(root, p, q) {
    if (!root || root === p || root === q) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) {
        return root;
    }

    return left || right;
}

const root = {
    val: 3,
    left: {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 2,
            left: {
                val: 7,
                left: null,
                right: null,
            },
            right: {
                val: 4,
                left: null,
                right: null,
            },
        },
    },
    right: {
        val: 1,
        left: {
            val: 0,
            left: null,
            right: null,
        },
        right: {
            val: 8,
            left: null,
            right: null,
        },
    },
};

const p = root.left;
const q = root.left.right.right;

const lca = lowestCommonAncestor(root, p, q);
console.log(lca); // Output: { val: 5, ... }
