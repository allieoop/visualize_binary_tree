var root;

function setup() {
	createCanvas(640, 480);
	background(255);
	root = new Node(3, width/2, height/2);
	for (var i = 0; i < 7; i++) {
		root = root.insert(new Node(floor(random(0,10)), width/2, height/2));
	}
	console.log(root);
	//root.traverse();
	root.draw_tree(null);
}

function draw() {
}