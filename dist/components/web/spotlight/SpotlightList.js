'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var Spotlight = function (props) {
    var _a = props || {}, image = _a.image, label = _a.label, title = _a.title, subtitle = _a.subtitle, actions = _a.actions, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, editable = _a.editable, handleChange = _a.handleChange, _b = _a.fontSize, fontSize = _b === void 0 ? 'xl' : _b;
    return (react_1.default.createElement("div", { className: "h-auto w-full" },
        react_1.default.createElement("div", { className: "flex flex-col space-y-6 px-2 w-full items-center" },
            react_1.default.createElement(components_1.Heading, { label: label, title: title, subtitle: subtitle, textAlign: "center", size: fontSize, editable: editable, handleChange: handleChange }),
            actions && actions,
            react_1.default.createElement(components_1.Container, { maxWidth: "lg" },
                react_1.default.createElement(__1.Image, { src: image, alt: title, aspectRatio: 1.5, objectFit: "contain", enableGradient: enableGradient, enableOverlay: enableOverlay })))));
};
exports.default = Spotlight;
