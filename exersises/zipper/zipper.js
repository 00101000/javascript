function copy(tree) {
    return tree && Object.assign({}, tree)
}

module.exports = ((
    
) => {
    function zipper (tree, parent)
    {
        this.tree = tree
        this.parent = parent || null
    }

    zipper.prototype.fromTree = (tree) => {
        return new Zipper(copy(tree))
    }

    zipper.prototype.toTree = () => {
        return this.parent ? this.parent.toTree() : this.tree
    }

    zipper.prototype.left = () => {
        this.tree.left = copy(this.tree.left)
        let next = this.tree.left
        return next ? new Zipper(next, this) : null
    }

    zipper.prototype.right = () => {
        this.tree.right = copy(this.tree.right)
        let next = this.tree.right
        return next ? new Zipper(next, this) : null
    }

    zipper.prototype.value = () => {
        return this.tree.value
    }

    zipper.prototype.up = () => {
        return this.parent
    }

    zipper.prototype.setValue = (value) => {
        this.tree.value = value
        return this
    }

    zipper.prototype.setLeft = (tree) => {
        this.tree.left = tree
        return this
    }

    zipper.prototype.setRight = (tree) => {
        this.tree.right = tree
        return this
    }

    return zipper
})()