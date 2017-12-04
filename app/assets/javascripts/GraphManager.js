var data = {
    nodes: [
        {"id": "1", "name":"Villaine", "group": 1},
        {"id": "2", "name":"Boar Forest", "group": 2},
        {"id": "4", "name":"Cornelius's Mansion", "group": 3},
        {"id": "8", "name":"Tarth", "group": 4},
        {"id": "16", "name":"The Battle Against Tiamat", "group": 5},
        {"id": "11", "name":"Greg's Workshop", "group": 1},
        {"id": "12", "name":"Tink and Spark's Home", "group": 2}
        ],
    links: [
        {"source": "1", "target": "2", "value": 1},
        {"source": "2", "target": "4", "value": 1},
        {"source": "4", "target": "8", "value": 1},
        {"source": "8", "target": "16", "value": 1},
        {"source": "1", "target": "11", "value": 1},
        {"source": "2", "target": "12", "value": 1},
    ]
}

var svg;
var simulation;
var color = d3.scaleOrdinal(d3.schemeCategory20);
var nodeRadius = 2;
var nodeMinDist = 60;
var state = STATE.IDLE;

/*
Initialize the graph at startup.
 */
$(document).ready(function(){
    var width = $(window).width();
    var height = $(window).height();

    svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height);

    //Link is the bonding force between two nodes due to a link.
    //Charge is like holding two electric charges together, negative is repulsion
    //Collide is literally setting a radius that cannot be crossed
    //Center pulls the nodes (& the camera) to the center of the SVG.
    simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; }))
        .force('collide', d3.forceCollide()
            .radius(nodeMinDist)
            .iterations(2))
        .force("center", d3.forceCenter(width / 2, height / 2));

    //Draw the graph
    update();

    //Wait some time for the simulation to center, then let the user drag as they please.
    setTimeout(function() {
        simulation.force("center", null);
    }, 1000);

    setControls();

    //Put it into a setTimeout cause I'm not sure if the call is blocking, thoughts? If for whatever reason this
    //small site went down how would that affect us >.>
    //Log where the request came from, attach to debug info
    setTimeout(function() {

        $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
            function(json) {
                setSource(json.ip);
                //Each logger payload contains { source: <host-ip-here> }
                logInfo("Browser connection established");
            })
    },10);
});

/*
Create a new node at a given (X,Y) coordinate
 */
function addNode(position) {
    var uuid = uuidv4();
    var nodeToAdd = {
        id: uuid,
        name: "Node " + uuid,
        group: Math.floor(Math.random()*100)%5,
        x: position.pageX,
        y: position.pageY
    };
    data.nodes.push(nodeToAdd);
    update();
}

/*
Create a link between two nodes and add it to the graph
 */
function addLink(fromNode, toNode) {
    var linkToAdd = {
        source: fromNode.id,
        target: toNode.id,
        value: 1
    };
    data.links.push(linkToAdd);
    update();
}

/*
Update each group of objects in the D3 force simulation.
 */
function ticked() {
    svg.selectAll("line")
        .style("stroke", "#aaa")
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
    svg.selectAll("circle")
        .attr("r", 16)
        .style("fill", function(d) {return color(d.group)})
        .style("stroke", "#424242")
        .style("stroke-width", "1px")
        .attr("cx", function (d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    svg.selectAll("text")
        .attr("x", function(d) { return d.x; })
        .attr("y", function (d) { return d.y - nodeRadius*10; })
        .style("font-family", "Lato")
        .style("font-size", "12px")
        .style("fill", "#333");
}

/*
Drag methods to adjust the position of the node we are dragging, and also to update the state machine in case any other
controls are activated while we do this.
 */
function dragstarted(d) {
    setState(STATE.DRAGNODE);
    if (!d3.event.active) simulation.alphaTarget(0.3).restart()
    d.fx = d.x;
    d.fy = d.y;
}
function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}
function dragended(d) {
    setState(STATE.HOVERNODE);
    d.fx = null;
    d.fy = null;
    if (!d3.event.active) simulation.alphaTarget(0);
}

/*
Enable controls based on our state machine.
 */
function setControls() {
    $("svg").on("click", function(event) {
        switch(state) {
            case STATE.HOVEREMPTY:
                addNode(event);
                break;
            case STATE.HOVERNODE:
                // TODO: Select method
                break;
            case STATE.CONTEXTMENU:
                // TODO: Select option or click out of context menu.
                break;
        }
    });

    // TODO: more controls like right click, middle mouse, etc.
}

/*
Modify the state machine that will change control behaviors. Validates input before changing state.
 */
function setState(stateEnum) {
    var isEnum = stateEnum instanceof enumValue;
    if (!isEnum) {
        logError("Could not change state from " + state.value + " to " + stateEnum + ". \nStringified: " + JSON.stringify(stateEnum));
    } else {
        state = stateEnum;
        logInfo("State Change: " + state.value + " -> " + stateEnum.value);
    }
}
