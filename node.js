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
		if (node.data == this.data) {
			return this;
		}

		if (node.data < this.data) {
			if (this.left == null) {
				this.left = node;
				this.left.level += 1;
				this.left.x = this.x - 40;
				this.left.y = this.y + 20;
			} else {
				node.level = this.left.level;
				this.left = this.left.insert(node);
			}
		} else {
			if (this.right == null) {
				this.right = node;
				this.right.level += 1;
				this.right.x = this.x + 40;
				this.right.y = this.y + 20;
			} else {
				node.level = this.right.level;
				this.right = this.right.insert(node);
			}
		}

		this.height = Node.get_height(this);
		this.balance = Node.get_balance_factor(this);
		return Node.rebalance(this);
	}

	// height is the longest path from given node down to a leaf
	// leaf node height = 0
	static get_height(node) {
		if (node == null) {
			return -1;
		}

		return 1 + Math.max(this.get_height(node.left), this.get_height(node.right));
	}

	static update_heights(node) {
		if (node == null) {
			return;
		}
		node.height = Node.get_height(node);
		this.update_heights(node.left);
		this.update_heights(node.right);
	}

	static get_balance_factor(node) {
		return Node.get_height(node.right) - Node.get_height(node.left);
	}

	static rebalance(node) {
		if (node == null) {
			return node;
		}

		if (node.balance < -1) {
			if (node.left.balance < 0 ) { 		// Left Left
				return Node.rotate_right(node);
			} else {							// Left Right
				node.left = Node.rotate_left(node.left);
				return Node.rotate_right(node);
			}
		}

		if (node.balance > 1) {
			if (node.right.balance > 0) { 		// Right Right
				return Node.rotate_left(node);
			} else {							// Right Left
				node.right = Node.rotate_right(node.right);			
				return Node.rotate_left(node);
			}
		}

		return node;
	}

	static rotate_right(node) {
		var new_root = node.left;
		node.left = new_root.right;
		new_root.right = node;

		// update heights
		Node.update_heights(new_root);

		// update levels
		new_root.level--;
		Node.decrease_levels(new_root.left);
		new_root.right.level++;
		Node.increase_levels(new_root.right.right);	

		return new_root;
	}

	static rotate_left(node) {
		// rotate
		var new_root = node.right;
		node.right = new_root.left;
		new_root.left = node;

		// update heights
		Node.update_heights(new_root);

		// update levels
		new_root.level--;
		Node.decrease_levels(new_root.right);
		new_root.left.level++;
		Node.increase_levels(new_root.left.left);

		return new_root;
	}

	static decrease_levels(node) {
		if (node == null) {
			return;
		}
		node.level--;
		Node.decrease_levels(node.left);
		Node.decrease_levels(node.right);
	}

	static increase_levels(node) {
		if (node == null) {
			return;
		}
		node.level++;
		Node.increase_levels(node.left);
		Node.increase_levels(node.right);
	}

	draw_tree(x, y) {
		if (this.left != null) {
			this.left.draw_tree(x-40, y+20);
		}
		// draw node
		fill(0);
		ellipse(x, y, 30, 30);
		// draw text
		fill(255);
		noStroke();
		text(this.data, x, y);
		textAlign(CENTER);
		if (this.right != null) {
			this.right.draw_tree(x+40, y+20);
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