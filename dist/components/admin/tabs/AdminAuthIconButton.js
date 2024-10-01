"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var frontend_js_1 = require("frontend-js");
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var router_1 = require("next/router");
var AdminAuthIconButton = function (props) {
    var handleClick = (props || {}).handleClick;
    var router = (0, router_1.useRouter)();
    var _a = (0, frontend_js_1.useAuth)(), logout = _a.logout, currentUser = _a.currentUser;
    var _b = (0, hooks_1.useMenu)(), open = _b.open, anchorEl = _b.anchorEl, toggleMenu = _b.toggleMenu;
    var handleLogoutClick = function () {
        logout();
        router.push('/');
    };
    if (!currentUser)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.IconButton, { size: "small", sx: sx.button, onClick: toggleMenu },
            react_1.default.createElement(__1.UserAvatar, { user: currentUser })),
        react_1.default.createElement(__1.UserMenu, { open: open, anchorEl: anchorEl, toggleMenu: toggleMenu, handleLogoutClick: handleLogoutClick, handleClick: handleClick })));
};
exports.default = AdminAuthIconButton;
var sx = {
    button: {
        color: 'primary.contrastText',
    },
    avatar: {
        height: 32,
        width: 32,
        bgcolor: 'secondary.main',
    },
    name: {
        fontSize: 13,
        fontWeight: 600,
    },
};
