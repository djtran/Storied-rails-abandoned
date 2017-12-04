//= GraphManager

/*
Called whenever a change to the graph has been made (New node/link, etc). Updates the groups currently drawn, attaching
any properties or handlers as needed before restarting the simulation with a low alpha to alphaTarget delta. The delta
is a coefficient on forces that changes the way the simulation behaves. The larger the coefficient the more explosive
the force.
 */
function update() {

    //Add Nodes.
    var updatedNodes = svg.selectAll("circle")
        .data(data.nodes);

    updatedNodes.enter().append("circle")
        .attr("class", "nodes")
        .attr("r", nodeRadius)
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut)
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

/*
When hovering over a node, change state. This way we can specify different control behaviors, such as click to select
versus click to create.
 */
function handleMouseOver(){
    setState(STATE.HOVERNODE);
}

/*
When the cursor leaves the node, it should be hovering over empty space or a link. Due to the charge force between
nodes, there should never be any overlapping nodes so this should be a safe operation.
 */
function handleMouseOut(){
    setState(STATE.HOVEREMPTY);
}