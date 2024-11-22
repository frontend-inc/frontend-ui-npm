'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ButtonAction_1 = __importDefault(require("./ButtonAction"));
var frontend_shadcn_1 = require("frontend-shadcn");
var ButtonActions = function (props) {
    var _a = props || {}, buttons = _a.buttons, size = _a.size, _b = _a.justifyContent, justifyContent = _b === void 0 ? 'justify-center' : _b, className = _a.className;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-row', justifyContent && "justify-center md:".concat(justifyContent), className) }, (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full flex flex-col sm:flex-row sm:space-x-3', justifyContent) }, buttons.map(function (button, index) { return (react_1.default.createElement("div", { key: index, className: "w-full sm:w-auto" },
        react_1.default.createElement(ButtonAction_1.default, { size: size, icon: button === null || button === void 0 ? void 0 : button.icon, path: button === null || button === void 0 ? void 0 : button.path, url: button === null || button === void 0 ? void 0 : button.url, src: button === null || button === void 0 ? void 0 : button.src, action: button === null || button === void 0 ? void 0 : button.action_type, variant: button === null || button === void 0 ? void 0 : button.variant }, button === null || button === void 0 ? void 0 : button.label))); })))));
};
exports.default = ButtonActions;
