"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// Determine if the user is swiping or clicking,
// and prevent images from being dragged in carousels
function useClickOrDrag(props) {
  var _a = props || {},
    onClick = _a.onClick,
    onDrag = _a.onDrag;
  var DELTA_PIXELS = 6;
  var _b = (0, react_1.useState)(0),
    posX = _b[0],
    setPosX = _b[1];
  var onMouseUp = function (e) {
    if (e.clientX < posX + DELTA_PIXELS && e.clientX > posX - DELTA_PIXELS) {
      onClick ? onClick(e) : null;
    } else {
      onDrag ? onDrag() : null;
    }
  };
  var onMouseDown = function (e) {
    e.preventDefault();
    setPosX(e.clientX);
  };
  return {
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
  };
}
exports.default = useClickOrDrag;
