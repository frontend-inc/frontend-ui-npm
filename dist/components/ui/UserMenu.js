"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../components");
var frontend_js_1 = require("frontend-js");
var UserMenu = function (props) {
    var open = props.open, anchorEl = props.anchorEl, toggleMenu = props.toggleMenu, handleLogoutClick = props.handleLogoutClick, handleClick = props.handleClick;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    return (react_1.default.createElement(material_1.Menu, { open: open, onClose: toggleMenu, anchorEl: anchorEl },
        react_1.default.createElement(material_1.MenuItem, { onClick: function () { return handleClick('/my-account'); } },
            react_1.default.createElement(material_1.ListItemIcon, null,
                react_1.default.createElement(components_1.UserAvatar, { size: 32, user: currentUser })),
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.name), secondary: react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.primary" }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.email) })),
        react_1.default.createElement(material_1.Divider, null),
        react_1.default.createElement(material_1.MenuItem, { onClick: handleLogoutClick },
            react_1.default.createElement(material_1.ListItemIcon, null,
                react_1.default.createElement(components_1.Icon, { name: "LogOut" })),
            "Sign Out")));
};
exports.default = UserMenu;
