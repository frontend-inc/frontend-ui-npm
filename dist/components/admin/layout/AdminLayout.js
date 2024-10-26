'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
function AdminLayout(_a) {
    var logo = _a.logo, children = _a.children, handleClick = _a.handleClick, _b = _a.menuItems, menuItems = _b === void 0 ? [] : _b, secondaryAction = _a.secondaryAction;
    return (react_1.default.createElement("div", { className: "editor w-full" },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-screen overflow-x-hidden scrollbar-hide', 'flex flex-row min-h-screen') },
            react_1.default.createElement(components_1.AdminLayoutTabs, null,
                react_1.default.createElement(components_1.AdminTabIcons, { logo: logo, handleClick: handleClick, menuItems: menuItems, secondaryAction: secondaryAction })),
            react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-[calc(100vw-60px)] overflow-x-hidden scrollbar-hide', 'flex sm:flex-row xs:flex-col') }, children))));
}
exports.default = AdminLayout;
