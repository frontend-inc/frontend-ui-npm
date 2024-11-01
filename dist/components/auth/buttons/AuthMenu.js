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
var AuthMenu = function (_a) {
    var handleLogout = _a.handleLogout, handleLogin = _a.handleLogin, handleSignup = _a.handleSignup, handleMyAccount = _a.handleMyAccount;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    return (react_1.default.createElement(frontend_shadcn_1.DropdownMenu, null,
        react_1.default.createElement(frontend_shadcn_1.DropdownMenuTrigger, { asChild: true },
            react_1.default.createElement(components_2.Button, { variant: "ghost", className: "h-8 w-8 rounded-full" },
                react_1.default.createElement(components_1.UserAvatar, { size: 32, user: currentUser }))),
        react_1.default.createElement(frontend_shadcn_1.DropdownMenuContent, { className: "w-56", align: "end", forceMount: true }, currentUser ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuLabel, { className: "font-normal" },
                react_1.default.createElement("div", { className: "flex flex-col space-y-1" },
                    react_1.default.createElement("p", { className: "text-sm font-medium leading-none" }, currentUser.username),
                    react_1.default.createElement("p", { className: "text-xs leading-none text-muted-foreground" }, currentUser.email))),
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuSeparator, null),
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuGroup, null,
                react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { onClick: handleMyAccount },
                    react_1.default.createElement(components_1.Icon, { name: "User", className: "mr-2 h-4 w-4" }),
                    react_1.default.createElement("span", null, "My Account"))),
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuSeparator, null),
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { onClick: handleLogout },
                react_1.default.createElement(components_1.Icon, { name: "LogOut", className: "mr-2 h-4 w-4" }),
                react_1.default.createElement("span", null, "Log out")))) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { onClick: handleLogin },
                react_1.default.createElement(components_1.Icon, { name: "LogIn", className: "mr-2 h-4 w-4" }),
                react_1.default.createElement("span", null, "Sign In")),
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { onClick: handleSignup },
                react_1.default.createElement(components_1.Icon, { name: "UserPlus", className: "mr-2 h-4 w-4" }),
                react_1.default.createElement("span", null, "Sign Up")))))));
};
exports.default = AuthMenu;
