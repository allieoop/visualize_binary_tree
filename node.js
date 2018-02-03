class Node {
	constructor(val, x, y) {
		this.left = null;
		this.right = null;
		this.data = val;
		this.level = 0;
		this.balance = 0;
		this.height = 0;
		this.x = x;
		this.y = y;
	}

	insert(node) {
		if (node.data <= this.data) {
			if (this.left == null) {
				this.left = node;
				this.left.level += 1;
				this.left.x = this.x - 40;
				this.left.y = this.y + 20;
			} else {
				node.level = this.left.level;
				this.left.insert(node);
			}
		} else {
			if (this.right == null) {
				this.right = node;
				this.right.level += 1;
				this.right.x = this.x + 40;
				this.right.y = this.y + 20;
			} else {
				node.level = this.right.level;
				this.right.insert(node);
			}
		}
		this.height = Node.get_height(this);
	}

	// height is the longest path from given node down to a leaf
	// leaf node height = 0
	static get_height(node) {
		if (node == null) {
			return -1;
		}

		return 1 + max(this.get_height(node.left), this.get_height(node.right));
	}

	rotate_right(node) {
		new_root = node.left;
		node.left = new_root.right;
		new_root.right = node;
	}

	rotate_left(node) {
		new_root = node.right;
		node.right = new_root.left;
		new_root.left = node;
	}

	traverse() {
		if (this.left != null) {
			this.left.traverse();
		}
		console.log(this.data);
		fill(0);
		ellipse(this.x, this.y, 30, 30);
		fill(255);
		noStroke();
		text(this.data, this.x, this.y);
		textAlign(CENTER);
		if (this.right != null) {
			this.right.traverse();
		}
	}

	draw_tree(parent) {
		if (this.left != null) {
			this.left.draw_tree(this);
		}
		console.log(this.data);
		// draw line
		if (parent != null) {
			stroke(10);
			line(parent.x, parent.y, this.x, this.y);
		}
		// draw node
		fill(0);
		ellipse(this.x, this.y, 30, 30);
		// draw text
		fill(255);
		noStroke();
		text(this.data, this.x, this.y);
		textAlign(CENTER);
		if (this.right != null) {
			this.right.draw_tree(this);
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