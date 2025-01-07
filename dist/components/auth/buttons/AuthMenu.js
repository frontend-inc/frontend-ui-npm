'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_js_1 = require("frontend-js");
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var navigation_1 = require("next/navigation");
var helpers_1 = require("../../../helpers");
var Auth = function (props) {
    var _a;
    var _b = props || {}, handleLogin = _b.handleLogin, handleSignup = _b.handleSignup, handleMyAccount = _b.handleMyAccount, _c = _b.menuItems, menuItems = _c === void 0 ? [] : _c;
    var _d = (0, frontend_js_1.useAuth)(), currentUser = _d.currentUser, logout = _d.logout;
    var router = (0, navigation_1.useRouter)();
    var handleLogout = function () {
        logout();
        router.push('/');
    };
    var handleAction = function (action) {
        switch (action) {
            case 'logout':
                handleLogout();
                break;
            case 'login':
                handleLogin();
                break;
            case 'signup':
                handleSignup();
                break;
            case 'my-account':
                handleMyAccount();
                break;
        }
    };
    return (react_1.default.createElement(react_2.Dropdown, null,
        react_1.default.createElement(react_2.DropdownTrigger, { asChild: true },
            react_1.default.createElement(react_2.Button, { isIconOnly: true, variant: "ghost" },
                react_1.default.createElement(components_1.UserAvatar, { user: currentUser }))),
        react_1.default.createElement(react_2.DropdownMenu, { onAction: handleAction }, currentUser ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_2.DropdownSection, { showDivider: true },
                react_1.default.createElement(react_2.DropdownItem, { className: "font-normal", key: "my-account" },
                    react_1.default.createElement(react_2.User, { avatarProps: {
                            src: (_a = currentUser === null || currentUser === void 0 ? void 0 : currentUser.avatar) === null || _a === void 0 ? void 0 : _a.url,
                            name: (0, helpers_1.getInitials)(currentUser === null || currentUser === void 0 ? void 0 : currentUser.name),
                            radius: 'lg',
                        }, name: currentUser === null || currentUser === void 0 ? void 0 : currentUser.name, description: currentUser === null || currentUser === void 0 ? void 0 : currentUser.email }))),
            react_1.default.createElement(react_2.DropdownSection, { showDivider: true }, menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (menuItem, idx) { return (react_1.default.createElement(react_2.DropdownItem, { key: menuItem === null || menuItem === void 0 ? void 0 : menuItem.path },
                (menuItem === null || menuItem === void 0 ? void 0 : menuItem.icon) && (react_1.default.createElement(components_1.RemixIcon, { name: menuItem === null || menuItem === void 0 ? void 0 : menuItem.icon, className: "mr-2" })), menuItem === null || menuItem === void 0 ? void 0 :
                menuItem.label)); })),
            react_1.default.createElement(react_2.DropdownItem, { key: "logout" },
                react_1.default.createElement(components_1.RemixIcon, { name: "ri-logout-circle-line", className: "mr-2" }),
                "Log out"))) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_2.DropdownItem, { key: "login" }, "Sign In"),
            react_1.default.createElement(react_2.DropdownItem, { key: "signup" }, "Sign Up"))))));
};
exports.default = Auth;
