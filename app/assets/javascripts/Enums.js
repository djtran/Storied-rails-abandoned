
/*
For graph generation, there is a need to maintain some sort of state to differentiate between what event to call. In the
simplest example, a click is different when clicking on empty space (generating a node) versus clicking on a node itself
(selecting a node).
 */
var STATE = {
    IDLE : 0,
    HOVEREMPTY : 1,
    HOVERNODE : 2,
    LINKSTART : 3,
    CONTEXTMENU : 4
};