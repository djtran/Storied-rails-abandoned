//= GraphManager

function update() {

    // console.log("Update log:");
    // data.nodes.forEach(function (node){
    //     console.log(node);
    // });

    //Add Nodes.
    var updatedNodes = svg.selectAll("circle")
        .data(data.nodes);

    updatedNodes.enter().append("circle")
        .attr("class", "nodes")
        .attr("r", nodeRadius)
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    //Add Lines
    var updatedLines = svg.selectAll("line")
        .data(data.links);

    updatedLines.enter().append("line")
        .attr("class", "links");

    //Add Labels
    var updatedLabels = svg.selectAll("text")
        .data(data.nodes);

    updatedLabels.enter().append("text")
        .attr("class", "label")
        .attr("text-anchor", "middle")
        .text(function(d) { return d.name; });

    updatedNodes.exit().remove();
    updatedLines.exit().remove();
    updatedLabels.exit().remove();

    //update simulation nodes, links, and alpha
    simulation
        .nodes(data.nodes)
        .on("tick", ticked);
    simulation.force("link")
        .links(data.links);

    //alpha starts at .05 cause I don't want shit flying everywhere
    simulation.alpha(.05).alphaTarget(0).restart();
}