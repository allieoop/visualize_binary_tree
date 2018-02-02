class Node {
	constructor(val) {
		this.left = null;
		this.right = null;
		this.data = val;
	}

	insert(node) {
		if (node.data <= this.data) {
			if (this.left == null) {
				this.left = node;
			} else {
				this.left.insert(node);
			}
		} else {
			if (this.right == null) {
				this.right = node;
			} else {
				this.right.insert(node);
			}
		}
	}

	traverse() {
		if (this.left != null) {
			this.left.traverse();
		}
		console.log(this.data);
		if (this.right != null) {
			this.right.traverse();
		}
	}

	search(val) {
		if (val == this.data) {
			return this;
		}
		if (val < this.data) {
			if (this.left != null) {
				return this.left.search(val);
			}
		} else if (val > this.data) {
			if (this.right != null) {
				return this.right.search(val);
			}
		} 
	}
}