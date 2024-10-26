'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var core_1 = require("../../core");
var frontend_shadcn_1 = require("frontend-shadcn");
function AdminLayoutLeft(_a) {
    var title = _a.title, children = _a.children;
    var _b = (0, hooks_1.useAdmin)(), openLayoutLeft = _b.openLayoutLeft, setOpenLayoutLeft = _b.setOpenLayoutLeft;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Hidden, { smDown: true }, openLayoutLeft && (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('bg-background p-0 overflow-y-scroll overflow-x-hidden scrollbar-hide', 'h-screen sm:min-w-[320px] ml-auto', 'border-r border-border') },
            react_1.default.createElement(components_1.AdminHeader, { title: title, buttons: react_1.default.createElement(components_1.ExpandLeftButton, null) }),
            react_1.default.createElement("div", { className: "h-[calc(100vh-50px)] w-full" }, children)))),
        react_1.default.createElement(core_1.Hidden, { smUp: true },
            react_1.default.createElement(components_1.Sheet, { disablePadding: true, side: "left", open: openLayoutLeft, handleClose: function () { return setOpenLayoutLeft(false); } }, children))));
}
exports.default = AdminLayoutLeft;
