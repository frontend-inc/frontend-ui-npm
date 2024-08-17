"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var router_1 = require("next/router");
var AdminPage = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, hooks_1.useAdmin)().clientUrl;
    var _a = props || {}, title = _a.title, actions = _a.actions, activeTab = _a.activeTab, activeMenu = _a.activeMenu, menuItems = _a.menuItems, _b = _a.disablePadding, disablePadding = _b === void 0 ? false : _b, children = _a.children;
    (0, hooks_1.useTabs)(activeTab);
    var handleClick = function (menuItem) {
        router.push("".concat(clientUrl).concat(menuItem.value));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        menuItems && (react_1.default.createElement(components_1.AdminMenu, { activeMenu: activeMenu, menuItems: menuItems, handleClick: handleClick })),
        react_1.default.createElement(components_1.AdminLayoutCenter, null,
            react_1.default.createElement(components_1.AdminHeader, { title: title, buttons: actions, enableExpandLeftPanel: true }),
            react_1.default.createElement(material_1.Box, { p: disablePadding ? 0 : 2 }, children))));
};
exports.default = AdminPage;
