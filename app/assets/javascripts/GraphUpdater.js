//= GraphManager

//General pattern for updating the graph
function update() {
    /////////
    // Node
    ///////////
    //Update
    allNodes = allNodes.data(completeGraph.nodes, function (d) { return d.id; });
    //Exit
    allNodes.exit().remove();
    //Enter
    var newNode = allNodes.enter().append("circle")
        .attr("class", "nodes")
        .attr("r", nodeRadius)
        .attr("fill", function(d) {return color(d.group)})
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    //Enter & Update
    allNodes = allNodes.merge(newNode);

    /////////
    // Link
    ///////////
    //Update
    allLinks = allLinks.data(completeGraph.links, function (d) { return d.id; });
    //Exit
    allLinks.exit().remove();
    //Enter
    var newLink = allLinks.enter().append("line")
        .attr("class", "links");

    //Enter & Update
    allLinks = allLinks.merge(newLink);

    /////////
    // Label
    ///////////
    //Update
    allLabels = allLabels.data(completeGraph.nodes, function (d) { return d.id; });
    //Exit
    allLabels.exit().remove();
    //Enter
    var newLabel = allLabels.enter().append("text")
        .attr("class", "label")
        .attr("text-anchor", "middle")
        .text(function(d) { return d.name; });

    //Enter & Update
    allLabels = allLabels.merge(newLabel);

    //update simulation nodes, links, and alpha
    simulation
        .nodes(completeGraph.nodes)
        .on("tick", ticked);
    simulation.force("link")
        .links(completeGraph.links);

    simulation.alpha(1).alphaTarget(0).restart();
}