'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var components_1 = require("../../../../components");
var ResourceToolbarButtons = function (props) {
    var _a = props || {}, selected = _a.selected, buttons = _a.buttons;
    return (react_1.default.createElement("div", { className: "flex flex-row space-x-2" }, buttons === null || buttons === void 0 ? void 0 : buttons.map(function (button, index) { return (react_1.default.createElement(react_2.Button, { key: index, onPress: selected && (button === null || button === void 0 ? void 0 : button.onClick)
            ? function () { return button === null || button === void 0 ? void 0 : button.onClick(selected); }
            : undefined, startContent: (button === null || button === void 0 ? void 0 : button.icon) && react_1.default.createElement(components_1.RemixIcon, { name: button === null || button === void 0 ? void 0 : button.icon }) }, button === null || button === void 0 ? void 0 : button.label)); })));
};
exports.default = ResourceToolbarButtons;
