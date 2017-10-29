// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require d3
//= require bootstrap
//= require_tree .
//= require_self

var svg;
var simulation;

$(document).ready(function() {
    var data = {
        nodes: [{
            id: 1,
            name: "A",
            x: $(window).width()/2,
            y: $(window).height()/2,
        }, {
            id: 2,
            name: "B",
            x: $(window).width()/2,
            y: $(window).height()/2,
        }, {
            id: 3,
            name: "C",
            x: $(window).width()/2,
            y: $(window).height()/2,
        }, {
            id: 4,
            name: "D",
            x: $(window).width()/2,
            y: $(window).height()/2,
        }],
        links: [{
            source: 1,
            target: 2,
            value: 1
        }, {
            source: 1,
            target: 4,
            value: 1
        }, {
            source: 1,
            target: 3,
            value: 1
        }, ]
    };

    var width = $(window).width();
    var height = $(window).height();

    var color = d3.scaleOrdinal(d3.schemeCategory20);
    svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height);

    simulation = d3.forceSimulation()
        .force("links", d3.forceLink().id(function(d) { return d.id; }))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));

    var links = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(data.links)
        .enter().append("line")
        .attr("stroke", "black")
        .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

    var nodes = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(data.nodes)
        .enter().append("circle")
        .attr("r", 15)
        .attr("fill", function(d) {
            return color(d.id);
        })
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        );

    nodes.append("text")
        .text(function(d) { return d.name; });

    simulation.nodes(data.nodes)
        .on("tick", ticked);

    simulation.force("links")
        .links(data.links);

    function ticked() {
        links
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        nodes
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
    }
    simulation.force("center", null);
});

function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}

// function dragstarted(d) {
//     d3.select(this).raise().classed("active", true);
// }
//
// function dragged(d) {
//     d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
// }
//
// function dragended(d) {
//     d3.select(this).classed("active", false);
// }


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}