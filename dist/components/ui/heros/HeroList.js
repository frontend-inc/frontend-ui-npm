'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var HeroList = function (props) {
    var _a = props || {}, image = _a.image, label = _a.label, title = _a.title, subtitle = _a.subtitle, description = _a.description, actions = _a.actions, secondaryAction = _a.secondaryAction, children = _a.children, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay;
    return (react_1.default.createElement("div", { className: "container mx-auto max-w-screen-lg" },
        react_1.default.createElement("div", { className: "flex flex-col w-full justify-start items-center space-y-6" },
            react_1.default.createElement(components_1.Heading, { label: label, title: title, subtitle: subtitle, textAlign: "center", size: "lg" }),
            secondaryAction && secondaryAction,
            react_1.default.createElement("div", { className: "w-full rounded py-10" },
                react_1.default.createElement(__1.Image, { aspectRatio: 2.0, src: image, alt: title, height: 400, label: label, enableGradient: enableGradient, enableOverlay: enableOverlay })),
            actions,
            react_1.default.createElement("div", { className: "w-full max-w-[500px] sm:max-w-screen-sm" },
                react_1.default.createElement(components_1.Typography, { variant: "subtitle2", className: "text-muted-foreground" }, description)),
            children)));
};
exports.default = HeroList;
