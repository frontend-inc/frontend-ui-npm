"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var hooks_1 = require("../../hooks");
var components_1 = require("../../components");
var MenuButton = function (props) {
    var children = props.children, _a = props.icon, icon = _a === void 0 ? 'EllipsisVertical' : _a, _b = props.selected, selected = _b === void 0 ? false : _b, _c = props.size, size = _c === void 0 ? 'small' : _c;
    var _d = (0, hooks_1.useMenu)(), open = _d.open, anchorEl = _d.anchorEl, closeMenu = _d.closeMenu, toggleMenu = _d.toggleMenu;
    // Ensure menu closes after click
    var handleDefaultClick = function (e) {
        if (open)
            closeMenu();
    };
    return (react_1.default.createElement(material_1.Box, { onClick: handleDefaultClick },
        react_1.default.createElement(material_1.IconButton, { size: size, onClick: toggleMenu },
            react_1.default.createElement(components_1.Icon, { name: icon, size: 20, color: selected ? 'primary.contrastText' : 'text.primary' })),
        react_1.default.createElement(material_1.Menu, { open: open, anchorEl: anchorEl, onClose: closeMenu }, children)));
};
exports.default = MenuButton;
