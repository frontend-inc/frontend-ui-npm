'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var SpotlightCard = function (props) {
    var _a = props || {}, image = _a.image, label = _a.label, title = _a.title, subtitle = _a.subtitle, actions = _a.actions, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, _b = _a.objectFit, objectFit = _b === void 0 ? 'cover' : _b;
    return (react_1.default.createElement("div", { className: "pt-16 py-6 h-auto w-full" },
        react_1.default.createElement(components_1.Container, { maxWidth: "xl" },
            react_1.default.createElement(components_1.Stack, { direction: "row", className: "items-center" },
                react_1.default.createElement(components_1.Stack, { direction: "row", size: "1/2" },
                    react_1.default.createElement(components_1.Stack, { spacing: 6 },
                        react_1.default.createElement(components_1.Heading, { label: label, title: title, subtitle: subtitle, size: "xl" }),
                        actions && actions)),
                react_1.default.createElement(components_1.Stack, { direction: "row", size: "1/2" },
                    react_1.default.createElement(__1.Image, { src: image, alt: title, aspectRatio: 1.5, objectFit: objectFit, enableGradient: enableGradient, enableOverlay: enableOverlay }))))));
};
exports.default = SpotlightCard;
