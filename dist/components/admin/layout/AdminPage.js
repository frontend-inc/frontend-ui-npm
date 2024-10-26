'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var navigation_1 = require("next/navigation");
var frontend_shadcn_1 = require("frontend-shadcn");
var AdminPage = function (props) {
    var router = (0, navigation_1.useRouter)();
    var clientUrl = (0, hooks_1.useAdmin)().clientUrl;
    var _a = props || {}, title = _a.title, actions = _a.actions, activeTab = _a.activeTab, activeMenu = _a.activeMenu, menuItems = _a.menuItems, enableEdit = _a.enableEdit, enableDelete = _a.enableDelete, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete, _b = _a.disablePadding, disablePadding = _b === void 0 ? false : _b, children = _a.children;
    (0, hooks_1.useTabs)(activeTab);
    var handleClick = function (menuItem) {
        router.push("".concat(clientUrl).concat(menuItem.value));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        menuItems && (react_1.default.createElement(components_1.AdminLayoutLeft, null,
            react_1.default.createElement(components_1.AdminMenu, { enableEdit: enableEdit, enableDelete: enableDelete, activeMenu: activeMenu, menuItems: menuItems, handleClick: handleClick, handleEdit: handleEdit ? handleEdit : undefined, handleDelete: handleDelete ? handleDelete : undefined }))),
        react_1.default.createElement(components_1.AdminLayoutCenter, null,
            react_1.default.createElement(components_1.AdminHeader, { title: title, buttons: actions, enableExpandLeftPanel: true }),
            react_1.default.createElement(components_1.AdminLayoutScroll, null,
                react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)(disablePadding ? 'p-0' : 'p-4') }, children)))));
};
exports.default = AdminPage;
