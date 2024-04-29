"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var AuthMenu = function (props) {
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var open = props.open, anchorEl = props.anchorEl, toggleMenu = props.toggleMenu, handleLogout = props.handleLogout, handleLogin = props.handleLogin, handleSignup = props.handleSignup, handleMyAccount = props.handleMyAccount;
    return (react_1.default.createElement(material_1.Menu, { open: open, onClose: toggleMenu, anchorEl: anchorEl }, currentUser ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.MenuItem, { onClick: handleMyAccount },
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: 'text.primary' }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.username), secondary: react_1.default.createElement(material_1.Typography, { variant: "body2", color: 'text.primary' }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.email) })),
        react_1.default.createElement(__1.Divider, null),
        react_1.default.createElement(material_1.MenuItem, { onClick: handleLogout }, "Logout"))) : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.MenuItem, { onClick: handleLogin }, "Sign In"),
        react_1.default.createElement(material_1.MenuItem, { onClick: handleSignup }, "Sign Up")))));
};
exports.default = AuthMenu;
