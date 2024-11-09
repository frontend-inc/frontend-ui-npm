'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var core_1 = require("../../core");
var frontend_shadcn_2 = require("frontend-shadcn");
var __1 = require("../..");
// @ts-ignore
var Card = react_1.default.forwardRef(function (props, ref) {
    var label = props.label, title = props.title, subtitle = props.subtitle, description = props.description, actions = props.actions, secondaryAction = props.secondaryAction, handleClick = props.handleClick, image = props.image, _a = props.size, size = _a === void 0 ? 240 : _a, enableGradient = props.enableGradient, enableOverlay = props.enableOverlay, classNames = props.classNames;
    return (react_1.default.createElement("div", { ref: ref, className: (0, frontend_shadcn_1.cn)('w-full overflow-hidden', classNames) },
        react_1.default.createElement("div", { className: "w-full relative overflow-hidden" },
            react_1.default.createElement(__1.Image, { src: image, height: size, alt: title, label: label, handleClick: handleClick, aspectRatio: 4 / 3, enableGradient: enableGradient, enableOverlay: enableOverlay })),
        react_1.default.createElement("div", { className: "mx-2 pt-3 flex flex-col space-y-2 overflow-hidden" },
            react_1.default.createElement(core_1.Typography, { variant: "subtitle2" }, title),
            subtitle && (react_1.default.createElement(core_1.Typography, { variant: "body2", className: "text-muted-foreground" }, subtitle)),
            description && (react_1.default.createElement(core_1.Typography, { variant: "body2", className: "text-muted-foreground" }, description))),
        react_1.default.createElement(frontend_shadcn_2.CardFooter, { className: "flex justify-between" },
            actions,
            secondaryAction)));
});
Card.displayName = 'Card';
exports.default = Card;
