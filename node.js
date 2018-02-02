class Node {
	constructor(val, x, y) {
		this.left = null;
		this.right = null;
		this.data = val;
		this.x = x;
		this.y = y;
	}

	insert(node) {
		if (node.data <= this.data) {
			if (this.left == null) {
				this.left = node;
				this.left.x = this.x - 40;
				this.left.y = this.y + 20;
			} else {
				this.left.insert(node);
			}
		} else {
			if (this.right == null) {
				this.right = node;
				this.right.x = this.x + 40;
				this.right.y = this.y + 20;
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
			console.log("hi");
			stroke(10);
			//fill(0);
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