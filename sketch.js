var root;

function setup() {
	noCanvas();
	root = new Node(5);
	for (var i = 0; i < 10; i++) {
		root.insert(new Node(floor(random(0,10))));
	}
	console.log(root);
	node = root.search(3);
	if (node != null) { 
		console.log("found!")
		console.log(node);
	}
	root.traverse();
}

function draw() {
	ellipse(50, 50, 80, 80);
}