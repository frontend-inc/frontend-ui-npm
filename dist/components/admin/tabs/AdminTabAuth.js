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
var TabAuth = function (props) {
    var _a = (props || {}).loginUrl, loginUrl = _a === void 0 ? '/login' : _a;
    var router = (0, router_1.useRouter)();
    var _b = (0, frontend_js_1.useAuth)(), logout = _b.logout, currentUser = _b.currentUser;
    var _c = (0, hooks_1.useMenu)(), open = _c.open, anchorEl = _c.anchorEl, closeMenu = _c.closeMenu, toggleMenu = _c.toggleMenu;
    var handleClick = function (url) {
        closeMenu();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        router.push(url);
    };
    var handleLogoutClick = function () {
        logout();
        router.push(loginUrl);
    };
    if (!currentUser)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.IconButton, { size: "small", sx: sx.button, onClick: toggleMenu },
            react_1.default.createElement(__1.UserAvatar, { user: currentUser })),
        react_1.default.createElement(__1.UserMenu, { open: open, anchorEl: anchorEl, toggleMenu: toggleMenu, handleLogoutClick: handleLogoutClick, handleClick: handleClick })));
};
exports.default = TabAuth;
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
