"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var __1 = require("../..");
var router_1 = require("next/router");
var hooks_2 = require("../../../hooks");
var AuthIconButton = function () {
    var router = (0, router_1.useRouter)();
    var _a = (0, frontend_js_1.useAuth)(), logout = _a.logout, fetchMe = _a.fetchMe, currentUser = _a.currentUser;
    var _b = (0, hooks_1.useMenu)(), open = _b.open, anchorEl = _b.anchorEl, closeMenu = _b.closeMenu, toggleMenu = _b.toggleMenu;
    var clientUrl = (0, hooks_2.useApp)().clientUrl;
    var handleMenuClick = function (ev) {
        toggleMenu(ev);
    };
    var handleClick = function (path) {
        closeMenu();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        router.push("".concat(clientUrl, "/").concat(path));
    };
    var handleLogoutClick = function () {
        closeMenu();
        logout();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.IconButton, { onClick: handleMenuClick },
            react_1.default.createElement(__1.UserAvatar, { user: currentUser })),
        react_1.default.createElement(__1.UserMenu, { open: open, anchorEl: anchorEl, toggleMenu: toggleMenu, handleLogoutClick: handleLogoutClick, handleClick: handleClick })));
};
exports.default = AuthIconButton;
