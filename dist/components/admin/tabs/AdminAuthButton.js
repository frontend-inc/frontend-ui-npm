'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_js_1 = require("frontend-js");
var __1 = require("../..");
var navigation_1 = require("next/navigation");
var AdminAuthButton = function (props) {
    var handleClick = (props || {}).handleClick;
    var router = (0, navigation_1.useRouter)();
    var _a = (0, frontend_js_1.useAuth)(), logout = _a.logout, currentUser = _a.currentUser;
    var handleLogoutClick = function () {
        logout();
        router.push('/');
    };
    if (!currentUser)
        return null;
    return (react_1.default.createElement(__1.UserMenu, { handleLogoutClick: handleLogoutClick, handleClick: handleClick }));
};
exports.default = AdminAuthButton;
