"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var UserMenu = function (props) {
    var open = props.open, anchorEl = props.anchorEl, toggleMenu = props.toggleMenu, handleLogoutClick = props.handleLogoutClick, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.Menu, { open: open, onClose: toggleMenu, anchorEl: anchorEl },
        react_1.default.createElement(material_1.MenuItem, { onClick: function () { return handleClick('/my-account'); } }, "My Account"),
        react_1.default.createElement(material_1.Divider, null),
        react_1.default.createElement(material_1.MenuItem, { onClick: handleLogoutClick },
            react_1.default.createElement(material_1.Badge, { color: "success", variant: "dot", sx: sx.badgeOnline, anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                } },
                react_1.default.createElement(material_1.Box, { mx: 1 })),
            "Sign Out")));
};
exports.default = UserMenu;
var sx = {
    badgeOnline: {
        height: 10,
        width: 10,
    },
};
