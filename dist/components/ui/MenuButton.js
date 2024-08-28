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
    var children = props.children, _a = props.icon, icon = _a === void 0 ? 'Ellipsis' : _a, color = props.color, _b = props.enableIcons, enableIcons = _b === void 0 ? false : _b, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    var _c = (0, hooks_1.useMenu)(), open = _c.open, anchorEl = _c.anchorEl, closeMenu = _c.closeMenu, toggleMenu = _c.toggleMenu;
    // Ensure menu closes after click
    var handleDefaultClick = function (e) {
        if (open)
            closeMenu();
    };
    return (react_1.default.createElement(material_1.Box, { onClick: handleDefaultClick },
        react_1.default.createElement(material_1.IconButton, { onClick: toggleMenu },
            react_1.default.createElement(components_1.Icon, { name: icon, color: color })),
        react_1.default.createElement(material_1.Menu, { open: open, anchorEl: anchorEl, onClose: closeMenu },
            children,
            handleEdit && (react_1.default.createElement(material_1.MenuItem, { onClick: handleEdit },
                enableIcons && (react_1.default.createElement(material_1.ListItemIcon, null,
                    react_1.default.createElement(components_1.Icon, { name: "Pencil" }))),
                "Edit")),
            handleDelete && (react_1.default.createElement(material_1.MenuItem, { onClick: handleDelete },
                enableIcons && (react_1.default.createElement(material_1.ListItemIcon, null,
                    react_1.default.createElement(components_1.Icon, { name: "Trash" }))),
                "Delete")))));
};
exports.default = MenuButton;
