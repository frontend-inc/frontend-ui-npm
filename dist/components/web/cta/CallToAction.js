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
    var _a = props || {}, label = _a.label, title = _a.title, subtitle = _a.subtitle, _b = _a.size, size = _b === void 0 ? 'lg' : _b, _c = _a.buttons, buttons = _c === void 0 ? [] : _c;
    return (react_1.default.createElement("div", { className: "w-full" },
        react_1.default.createElement("div", { className: "flex flex-col items-center space-y-2" },
            react_1.default.createElement(components_1.Heading, { label: label, title: title, subtitle: subtitle, size: size, textAlign: "center" }),
            (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement(__1.ButtonActions, { buttons: buttons, size: "lg", justifyContent: "center" })))));
};
exports.default = CallToAction;
