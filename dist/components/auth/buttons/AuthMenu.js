'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_js_1 = require("frontend-js");
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var navigation_1 = require("next/navigation");
var AuthMenu = function (props) {
    var _a = props || {}, handleLogin = _a.handleLogin, handleSignup = _a.handleSignup, handleMyAccount = _a.handleMyAccount, _b = _a.menuItems, menuItems = _b === void 0 ? [] : _b;
    var _c = (0, frontend_js_1.useAuth)(), currentUser = _c.currentUser, logout = _c.logout;
    var router = (0, navigation_1.useRouter)();
    var handleClick = function (menuItem) {
        if (menuItem.onClick) {
            menuItem.onClick();
        }
        else {
            router.push(menuItem === null || menuItem === void 0 ? void 0 : menuItem.path);
        }
    };
    var handleLogout = function () {
        logout();
        router.push('/');
    };
    return (react_1.default.createElement(frontend_shadcn_1.DropdownMenu, null,
        react_1.default.createElement(frontend_shadcn_1.DropdownMenuTrigger, { asChild: true },
            react_1.default.createElement(components_2.Button, { variant: "ghost", className: "rounded-full h-8 w-8" },
                react_1.default.createElement(components_1.UserAvatar, { size: 34, user: currentUser }))),
        react_1.default.createElement(frontend_shadcn_1.DropdownMenuContent, { className: "w-56", align: "end", forceMount: true }, currentUser ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuGroup, null,
                react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { className: "font-normal", onClick: handleMyAccount },
                    react_1.default.createElement("div", { className: "flex flex-col space-y-1" },
                        react_1.default.createElement("p", { className: "text-sm font-medium leading-none" }, currentUser.name),
                        react_1.default.createElement("p", { className: "text-xs leading-none text-muted-foreground" }, currentUser.email)))),
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuSeparator, null),
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuGroup, null, menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (menuItem, idx) { return (react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { key: idx, onClick: function () { return handleClick(menuItem); } },
                (menuItem === null || menuItem === void 0 ? void 0 : menuItem.icon) && (react_1.default.createElement(components_1.RemixIcon, { name: menuItem === null || menuItem === void 0 ? void 0 : menuItem.icon, className: "mr-2" })), menuItem === null || menuItem === void 0 ? void 0 :
                menuItem.label)); })),
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { onClick: handleLogout },
                react_1.default.createElement(components_1.RemixIcon, { name: "ri-logout-circle-line", className: "mr-2" }),
                "Log out"))) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { onClick: handleLogin }, "Sign In"),
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { onClick: handleSignup }, "Sign Up"))))));
};
exports.default = AuthMenu;
