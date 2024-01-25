"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var hooks_1 = require("../../hooks");
var MenuButton = function (props) {
    var children = props.children, icon = props.icon, _a = props.selected, selected = _a === void 0 ? false : _a, _b = props.size, size = _b === void 0 ? 'small' : _b;
    var _c = (0, hooks_1.useMenu)(), open = _c.open, anchorEl = _c.anchorEl, closeMenu = _c.closeMenu, toggleMenu = _c.toggleMenu;
    // Ensure menu closes after click
    var handleDefaultClick = function (e) {
        if (open)
            closeMenu();
    };
    return (react_1.default.createElement(material_1.Box, { onClick: handleDefaultClick },
        react_1.default.createElement(material_1.IconButton, { size: size, onClick: toggleMenu }, icon ? (icon) : (react_1.default.createElement(icons_material_1.MoreHoriz, { sx: {
                color: selected ? 'primary.contrastText' : 'text.primary',
            } }))),
        react_1.default.createElement(material_1.Menu, { open: open, anchorEl: anchorEl, onClose: closeMenu }, children)));
};
exports.default = MenuButton;
