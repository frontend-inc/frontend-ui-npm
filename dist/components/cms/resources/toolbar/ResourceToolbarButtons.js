"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var ResourceButton_1 = __importDefault(require("./ResourceButton"));
var ResourceToolbarButtons = function (props) {
    var _a = props || {}, selected = _a.selected, buttons = _a.buttons;
    return (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 }, buttons === null || buttons === void 0 ? void 0 : buttons.map(function (button, index) { return (react_1.default.createElement(ResourceButton_1.default, { key: index, button: button, selected: selected })); })));
};
exports.default = ResourceToolbarButtons;
