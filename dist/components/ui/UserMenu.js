'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../components");
var frontend_js_1 = require("frontend-js");
var components_2 = require("../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var lucide_react_1 = require("lucide-react");
var UserMenu = function (_a) {
    var handleLogoutClick = _a.handleLogoutClick, handleClick = _a.handleClick, children = _a.children;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    return (react_1.default.createElement("div", { className: "flex w-full justify-center" },
        react_1.default.createElement(frontend_shadcn_1.DropdownMenu, null,
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuTrigger, { asChild: true },
                react_1.default.createElement(components_2.Button, { variant: "ghost", className: "h-8 w-8 rounded-full" },
                    react_1.default.createElement(components_1.UserAvatar, { size: 36, user: currentUser }))),
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuContent, { className: "bg-background w-56", align: "end", forceMount: true },
                react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { onClick: handleClick },
                    react_1.default.createElement("div", { className: "flex items-center" },
                        react_1.default.createElement("span", { className: "text-sm font-medium" }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.name))),
                react_1.default.createElement(frontend_shadcn_1.DropdownMenuSeparator, null),
                react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { onClick: handleLogoutClick },
                    react_1.default.createElement(lucide_react_1.LogOut, { className: "mr-2 h-4 w-4" }),
                    react_1.default.createElement("span", null, "Sign Out")),
                children))));
};
exports.default = UserMenu;
