var root;
var nodes = new Array();
var nodes_length = 10;

function setup() {
	createCanvas(640, 480);
	frameRate(1);

	root = new Node(3, width/2, height/2);
	while (nodes.length < nodes_length) {
		val = floor(random(0,20));
		nodes.push(new Node(val, width/2, height/2));
	}
}

var j;
function draw() {
	background(255);
	if (j == null) {
		root.draw_tree(width/2, height/2);
		j = 0;
	} else if (j < nodes_length) {
		root = root.insert(nodes[j]);
		root.draw_tree(width/2, height/2);
		j++;
	} else if (j == nodes_length) {
		console.log(root);
		root.draw_tree(width/2, height/2);
		j++;
	} else {
		root.draw_tree(width/2, height/2);
	}
}

function mousePressed() {
	noLoop();
}

function mouseReleased() {
	loop();
}