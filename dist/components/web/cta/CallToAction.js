'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
// Call To Action
var CallToAction = function (props) {
    var _a = props || {}, _b = _a.direction, direction = _b === void 0 ? 'column' : _b, label = _a.label, title = _a.title, subtitle = _a.subtitle, _c = _a.fontSize, fontSize = _c === void 0 ? 'lg' : _c, _d = _a.buttons, buttons = _d === void 0 ? [] : _d, editable = _a.editable, handleChange = _a.handleChange;
    return (react_1.default.createElement(components_1.Stack, { direction: direction },
        react_1.default.createElement(components_1.Stack, { direction: direction, size: "1/3" },
            react_1.default.createElement(components_1.Heading, { label: label, title: title, subtitle: subtitle, size: fontSize, textAlign: direction == 'row' ? 'left' : 'center', editable: editable, handleChange: handleChange })),
        react_1.default.createElement(components_1.Stack, { direction: direction, size: "2/3" }, (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement(__1.ButtonActions, { buttons: buttons, size: "lg", justifyContent: "justify-center" })))));
};
exports.default = CallToAction;
