var root;
var nodes = new Array();
var nodes_length = 12;

function setup() {
	createCanvas(800, 480);
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
	//translate(width/2, height/2);
	if (j == null) { // TODO: insert the root node so I don't have to do this
		root.knuth_update_postions();
		global_counter = 0;
		root.draw();
		j = 0;
	} else if (j < nodes_length) {
		root = root.insert(nodes[j]);
		root.knuth_update_postions();
		global_counter = 0;
		root.draw();
		j++;
	} else if (j == nodes_length) { // just here for logging
		console.log(root);
		root.knuth_update_postions();
		global_counter = 0;
		root.draw();
		j++;
	} else { // continuously draw the whole tree
		root.knuth_update_postions();
		global_counter = 0;
		root.draw();	
	}
}

function mousePressed() {
	noLoop();
}

function mouseReleased() {
	loop();
}