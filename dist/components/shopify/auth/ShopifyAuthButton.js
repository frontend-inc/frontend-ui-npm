'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shopify_1 = require("frontend-shopify");
var __1 = require("../..");
var navigation_1 = require("next/navigation");
var hooks_1 = require("../../../hooks");
var ShopifyAuthButton = function () {
    var router = (0, navigation_1.useRouter)();
    var _a = (0, frontend_shopify_1.useAuth)(), logout = _a.logout, customer = _a.customer;
    var _b = (0, hooks_1.useApp)(), clientUrl = _b.clientUrl, setMyAccountOpen = _b.setMyAccountOpen;
    var handleClick = function () {
        setMyAccountOpen(true);
    };
    var handleLogoutClick = function () {
        logout();
        router.push("".concat(clientUrl, "/shopify/login"));
    };
    if (!customer)
        return null;
    return (react_1.default.createElement(__1.AuthUserMenu, { handleLogoutClick: handleLogoutClick, handleClick: handleClick }));
};
exports.default = ShopifyAuthButton;
