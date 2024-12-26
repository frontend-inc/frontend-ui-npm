'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var FeatureItem = function (props) {
    var _a = props || {}, _b = _a.direction, direction = _b === void 0 ? 'row' : _b, label = _a.label, title = _a.title, subtitle = _a.subtitle, image = _a.image, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, _c = _a.items, items = _c === void 0 ? [] : _c, editable = _a.editable, handleChange = _a.handleChange;
    return (react_1.default.createElement(__1.Stack, { direction: direction, spacing: 10, className: "items-center" },
        react_1.default.createElement(__1.Stack, { direction: "row", size: "1/2" },
            react_1.default.createElement(__1.Image, { src: image, objectFit: "cover", enableOverlay: enableOverlay, enableGradient: enableGradient })),
        react_1.default.createElement(__1.Stack, { direction: "row", size: "1/2", className: "h-full" },
            react_1.default.createElement("div", { className: "flex flex-col space-y-4 h-full justify-center w-full" },
                react_1.default.createElement(__1.Heading, { label: label, title: title, subtitle: subtitle, editable: editable, handleChange: handleChange, size: "lg" }),
                react_1.default.createElement("ul", { className: "flex flex-col space-y-2 w-full p-0" }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) { return (react_1.default.createElement("li", { key: idx, className: "flex flex-row w-full items-center space-x-2 h-[60px]" },
                    (item === null || item === void 0 ? void 0 : item.icon) && (react_1.default.createElement(__1.RemixIcon, { name: item.icon, className: 'text-primary', size: "xl" })),
                    react_1.default.createElement("div", { className: "flex flex-col justify-center space-y-0" },
                        react_1.default.createElement(__1.Typography, { variant: "subtitle2" }, item.title),
                        react_1.default.createElement(__1.Typography, { variant: "body1", className: "text-muted-foreground" }, item.subtitle)))); }))))));
};
exports.default = FeatureItem;
