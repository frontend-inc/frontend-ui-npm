'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var react_2 = require("@nextui-org/react");
var lucide_react_1 = require("lucide-react");
var UserMenu = function (props) {
    var _a = props || {}, handleLogoutClick = _a.handleLogoutClick, handleClick = _a.handleClick;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var handleAction = function (key) {
        switch (key) {
            case 'logout':
                handleLogoutClick();
                break;
            case 'user':
                handleClick();
                break;
        }
    };
    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
        return null;
    return (react_1.default.createElement(react_2.Dropdown, null,
        react_1.default.createElement(react_2.DropdownTrigger, null,
            react_1.default.createElement(react_2.Button, { isIconOnly: true },
                react_1.default.createElement(__1.UserAvatar, { user: currentUser }))),
        react_1.default.createElement(react_2.DropdownMenu, { onAction: handleAction },
            react_1.default.createElement(react_2.DropdownItem, { key: "user" }, (currentUser === null || currentUser === void 0 ? void 0 : currentUser.name) || 'User'),
            react_1.default.createElement(react_2.DropdownItem, { key: "logout", endContent: react_1.default.createElement(lucide_react_1.LogOut, { className: "h-4 w-4" }) }, "Sign Out"))));
};
exports.default = UserMenu;
