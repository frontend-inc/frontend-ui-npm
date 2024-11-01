'use client';
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
var core_1 = require("../../core");
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var navigation_1 = require("next/navigation");
var __1 = require("../..");
var AuthButton = function (props) {
    var _a = props || {}, _b = _a.showLabel, showLabel = _b === void 0 ? false : _b, _c = _a.showIcon, showIcon = _c === void 0 ? true : _c;
    var router = (0, navigation_1.useRouter)();
    var _d = (0, frontend_js_1.useAuth)(), logout = _d.logout, fetchMe = _d.fetchMe, currentUser = _d.currentUser;
    var _e = (0, hooks_1.useMenu)(), open = _e.open, anchorEl = _e.anchorEl, closeMenu = _e.closeMenu, toggleMenu = _e.toggleMenu;
    var _f = (0, hooks_1.useApp)(), clientUrl = _f.clientUrl, setAuthOpen = _f.setAuthOpen, setMyAccountOpen = _f.setMyAccountOpen;
    var handleLogin = function () {
        setAuthOpen(true);
        closeMenu();
    };
    var handleAuthenticate = function () {
        setAuthOpen(true);
        closeMenu();
    };
    var handleMyAccount = function () {
        setMyAccountOpen(true);
        closeMenu();
    };
    (0, react_1.useEffect)(function () {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)) {
            fetchMe();
        }
    }, [currentUser === null || currentUser === void 0 ? void 0 : currentUser.id]);
    return (react_1.default.createElement(react_1.default.Fragment, null, !showLabel ? (react_1.default.createElement(react_1.default.Fragment, null, (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) ? (react_1.default.createElement(core_1.IconButton, { onClick: handleMyAccount },
        react_1.default.createElement(__1.UserAvatar, { size: 28, user: currentUser }))) : (react_1.default.createElement(core_1.IconButton, { onClick: handleLogin },
        react_1.default.createElement(__1.Icon, { name: "User", size: 24 }))))) : (react_1.default.createElement(react_1.default.Fragment, null, (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) ? (react_1.default.createElement(core_1.Button, { onClick: handleMyAccount, startIcon: showIcon && react_1.default.createElement(__1.UserAvatar, { user: currentUser }), endIcon: react_1.default.createElement("div", null,
            react_1.default.createElement(__1.Icon, { name: "MoreVertical" })) },
        react_1.default.createElement(core_1.Typography, { variant: "body1" }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.username))) : (react_1.default.createElement(core_1.Button, { onClick: handleLogin, startIcon: showIcon && react_1.default.createElement(__1.Icon, { name: "User", size: 24 }) }, "Sign In"))))));
};
exports.default = AuthButton;
