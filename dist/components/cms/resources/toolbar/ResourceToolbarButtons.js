"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var ResourceToolbarButtons = function (props) {
    var _a = props || {}, selected = _a.selected, buttons = _a.buttons;
    return (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 }, buttons === null || buttons === void 0 ? void 0 : buttons.map(function (button, index) { return (react_1.default.createElement(material_1.Button, { key: index, variant: button === null || button === void 0 ? void 0 : button.variant, color: button === null || button === void 0 ? void 0 : button.color, onClick: selected && (button === null || button === void 0 ? void 0 : button.onClick)
            ? function () { return button === null || button === void 0 ? void 0 : button.onClick(selected); }
            : undefined, startIcon: (button === null || button === void 0 ? void 0 : button.icon) && react_1.default.createElement(components_1.Icon, { name: button === null || button === void 0 ? void 0 : button.icon }) }, button === null || button === void 0 ? void 0 : button.label)); })));
};
exports.default = ResourceToolbarButtons;
