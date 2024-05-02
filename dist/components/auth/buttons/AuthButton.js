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
var router_1 = require("next/router");
var __1 = require("../..");
var context_1 = require("../../../context");
var AuthButton = function (props) {
    var _a = props || {}, _b = _a.showLabel, showLabel = _b === void 0 ? false : _b, _c = _a.showIcon, showIcon = _c === void 0 ? true : _c, _d = _a.editing, editing = _d === void 0 ? false : _d;
    var router = (0, router_1.useRouter)();
    var _e = (0, frontend_js_1.useAuth)(), logout = _e.logout, fetchMe = _e.fetchMe, currentUser = _e.currentUser;
    var _f = (0, hooks_1.useMenu)(), open = _f.open, anchorEl = _f.anchorEl, closeMenu = _f.closeMenu, toggleMenu = _f.toggleMenu;
    var _g = (0, react_1.useContext)(context_1.AppContext), clientUrl = _g.clientUrl, setAuthOpen = _g.setAuthOpen, setMyAccountOpen = _g.setMyAccountOpen;
    var handleLogin = function () {
        setAuthOpen(true);
        closeMenu();
    };
    var handleSignup = function () {
        setAuthOpen(true);
        closeMenu();
    };
    var handleMyAccount = function () {
        setMyAccountOpen(true);
        closeMenu();
    };
    var handleLogout = function () {
        closeMenu();
        logout();
        router.push(clientUrl);
    };
    var handleClick = function (url) {
        closeMenu();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        if (!editing) {
            router.push(url);
        }
    };
    (0, react_1.useEffect)(function () {
        if (!currentUser) {
            fetchMe();
        }
    }, [currentUser]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        !showLabel ? (react_1.default.createElement(react_1.default.Fragment, null, (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) ? (react_1.default.createElement(material_1.IconButton, { onClick: toggleMenu },
            react_1.default.createElement(__1.AuthAvatar, null))) : (react_1.default.createElement(material_1.IconButton, { onClick: handleLogin },
            react_1.default.createElement(__1.Icon, { color: 'primary.contrastText', name: "User", size: 24 }))))) : (react_1.default.createElement(react_1.default.Fragment, null, currentUser ? (react_1.default.createElement(material_1.Button, { sx: sx.button, onClick: toggleMenu, startIcon: showIcon && react_1.default.createElement(__1.AuthAvatar, null), endIcon: react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(__1.Icon, { name: "MoreVertical", size: 20 })) },
            react_1.default.createElement(material_1.Typography, { variant: "button", color: 'text.primary', sx: sx.username }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.username))) : (react_1.default.createElement(material_1.Button, { sx: sx.button, onClick: handleLogin, startIcon: showIcon && react_1.default.createElement(__1.Icon, { name: "User", size: 24 }) }, "Sign In")))),
        currentUser && (react_1.default.createElement(__1.AuthMenu, { open: open, anchorEl: anchorEl, toggleMenu: toggleMenu, handleLogin: handleLogin, handleSignup: handleSignup, handleMyAccount: handleMyAccount, handleLogout: handleLogout, handleClick: handleClick }))));
};
exports.default = AuthButton;
var sx = {
    expandMore: {
        width: '34px',
    },
    icon: {
        color: 'text.primary',
    },
    button: {
        width: '100%',
        color: 'text.primary',
        justifyContent: 'flex-start',
    },
    username: {
        width: '100%',
        textAlign: 'left',
    },
};
