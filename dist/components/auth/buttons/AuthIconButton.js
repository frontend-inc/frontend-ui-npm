"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var __1 = require("../..");
var router_1 = require("next/router");
var context_1 = require("../../../context");
var AuthButton = function () {
    var router = (0, router_1.useRouter)();
    var _a = (0, frontend_js_1.useAuth)(), logout = _a.logout, fetchMe = _a.fetchMe, currentUser = _a.currentUser;
    var _b = (0, hooks_1.useMenu)(), open = _b.open, anchorEl = _b.anchorEl, closeMenu = _b.closeMenu, toggleMenu = _b.toggleMenu;
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
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
    (0, react_1.useEffect)(function () {
        if (!currentUser) {
            fetchMe();
        }
    }, [currentUser]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.IconButton, { onClick: handleMenuClick },
            react_1.default.createElement(__1.UserAvatar, { user: currentUser })),
        react_1.default.createElement(__1.UserMenu, { open: open, anchorEl: anchorEl, toggleMenu: toggleMenu, handleLogoutClick: handleLogoutClick, handleClick: handleClick })));
};
exports.default = AuthButton;
