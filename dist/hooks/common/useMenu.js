"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useMenu = function (props) {
  var anchorRef = (props || {}).anchorRef;
  var _a = (0, react_1.useState)(false),
    open = _a[0],
    setOpen = _a[1];
  var _b = (0, react_1.useState)(null),
    anchorEl = _b[0],
    setAnchorEl = _b[1];
  var toggleMenu = function (e) {
    setAnchorEl(e.currentTarget);
    setOpen(!open);
  };
  var closeMenu = function () {
    setOpen(false);
  };
  var openMenu = function (e) {
    setAnchorEl(anchorRef ? anchorRef.current : e.currentTarget);
    setOpen(true);
  };
  return {
    open: open,
    anchorEl: anchorEl,
    closeMenu: closeMenu,
    openMenu: openMenu,
    toggleMenu: toggleMenu,
  };
};
exports.default = useMenu;
