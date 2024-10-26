'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var core_1 = require("../../core");
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
function AdminHeader(_a) {
    var title = _a.title, buttons = _a.buttons, primaryActions = _a.primaryActions, secondaryActions = _a.secondaryActions, _b = _a.enableExpandLeftPanel, enableExpandLeftPanel = _b === void 0 ? false : _b, _c = _a.enableExpandRightPanel, enableExpandRightPanel = _c === void 0 ? false : _c, _d = _a.disableBorder, disableBorder = _d === void 0 ? false : _d;
    var openLayoutLeft = (0, hooks_1.useAdmin)().openLayoutLeft;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full flex flex-row items-center h-[50px] min-h-[50px] px-2 bg-background', !disableBorder && 'border-b border-border') },
        react_1.default.createElement("div", { className: "grid grid-cols-3 gap-1 w-full" },
            react_1.default.createElement("div", { className: "flex flex-row items-center h-full" },
                enableExpandLeftPanel && !openLayoutLeft && react_1.default.createElement(components_1.ExpandLeftButton, null),
                primaryActions,
                title && (react_1.default.createElement(core_1.Typography, { variant: "body1", className: "leading-none break-keep text-foreground" }, title))),
            react_1.default.createElement("div", { className: "flex flex-row justify-center items-center h-full space-x-1" }, secondaryActions),
            react_1.default.createElement("div", { className: "flex flex-row justify-end items-center h-full" },
                buttons,
                enableExpandRightPanel && react_1.default.createElement(components_1.ExpandRightButton, null)))));
}
exports.default = AdminHeader;
