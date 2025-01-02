'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ButtonAction_1 = __importDefault(require("./ButtonAction"));
var react_2 = require("@nextui-org/react");
var ButtonActions = function (props) {
    var _a = props || {}, buttons = _a.buttons, _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.justifyContent, justifyContent = _c === void 0 ? 'justify-center' : _c, className = _a.className;
    return (react_1.default.createElement("div", { className: (0, react_2.cn)('flex flex-row w-full', justifyContent && "justify-center md:".concat(justifyContent), className) }, (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement("div", { className: (0, react_2.cn)('w-full flex flex-col sm:flex-row sm:space-x-3', justifyContent) }, buttons.map(function (button, index) { return (react_1.default.createElement("div", { key: index, className: "w-full sm:w-auto" },
        react_1.default.createElement(ButtonAction_1.default, { size: size, icon: button === null || button === void 0 ? void 0 : button.icon, path: button === null || button === void 0 ? void 0 : button.path, url: button === null || button === void 0 ? void 0 : button.url, src: button === null || button === void 0 ? void 0 : button.src, action: button === null || button === void 0 ? void 0 : button.action_type, variant: button === null || button === void 0 ? void 0 : button.variant }, button === null || button === void 0 ? void 0 : button.label))); })))));
};
exports.default = ButtonActions;
