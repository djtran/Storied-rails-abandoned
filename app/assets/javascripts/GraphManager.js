var completeGraph = {
    "nodes": [
        {"id": "1", "name":"Villaine", "group": 1},
        {"id": "2", "name":"Boar Forest", "group": 2},
        {"id": "4", "name":"Cornelius's Mansion", "group": 3},
        {"id": "8", "name":"Tarth", "group": 4},
        {"id": "16", "name":"The Battle Against Tiamat", "group": 5},
        {"id": "11", "name":"Greg's Workshop", "group": 1},
        {"id": "12", "name":"Tink and Spark's Home", "group": 2}
        ],
    "links": [
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
var allNodes, allLinks, allLabels;
var color = d3.scaleOrdinal(d3.schemeCategory20);
var nodeRadius = 2;
var nodeMinDist = 60;
var nodeMaxDist = nodeMinDist*3;

//Initialize all of our vars
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
        // .force('charge', d3.forceManyBody()
        //     .strength(-100)
        //     .theta(0.8)
        //     .distanceMax(nodeMaxDist)
        // )
        .force('collide', d3.forceCollide()
            .radius(nodeMinDist)
            .iterations(2))
        .force("center", d3.forceCenter(width / 2, height / 2));

    //Draw the graph
    initialize(completeGraph);

    //Wait some time for the simulation to center, then let the user drag as they please.
    setTimeout(function() {
        simulation.force("center", null);
    }, 1000);

    $("svg").on("click", function(event) {
        addNode(event);
    });
});

function addNode(position) {
    var uuid = uuidv4();
    var nodeToAdd = {
        id: uuid,
        name: "Node " + uuid,
        group: Math.floor(Math.random())%5,
        x: position.pageX,
        y: position.pageY
    };

    completeGraph.nodes.push($.extend(true, {}, nodeToAdd));
    update();
}

function initialize(graph) {
    allLinks = svg.append("g")
        .style("stroke", "#aaa")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line")
        .attr("class", "links");
    allNodes = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("r", nodeRadius)
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    allLabels = svg.append("g")
        .attr("class", "labels")
        .selectAll("text")
        .data(graph.nodes)
        .enter().append("text")
        .attr("class", "label")
        .attr("text-anchor", "middle")
        .text(function(d) { return d.name; });

    simulation
        .nodes(completeGraph.nodes)
        .on("tick", ticked);
    simulation.force("link")
        .links(completeGraph.links);
}

function ticked() {
    allLinks
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
    allNodes
        .attr("r", 16)
        .style("fill", function(d) {return color(d.group)})
        .style("stroke", "#424242")
        .style("stroke-width", "1px")
        .attr("cx", function (d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    allLabels
        .attr("x", function(d) { return d.x; })
        .attr("y", function (d) { return d.y - nodeRadius*10; })
        .style("font-family", "Lato")
        .style("font-size", "12px")
        .style("fill", "#333");
}
function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart()
    d.fx = d.x;
    d.fy = d.y;
}
function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}
function dragended(d) {
    d.fx = null;
    d.fy = null;
    if (!d3.event.active) simulation.alphaTarget(0);
}