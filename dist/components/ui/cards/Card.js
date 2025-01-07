'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var components_1 = require("../../../components");
var components_2 = require("../../../components");
// @ts-ignore
var Card = react_1.default.forwardRef(function (props, ref) {
    var label = props.label, title = props.title, subtitle = props.subtitle, description = props.description, actions = props.actions, secondaryAction = props.secondaryAction, handleClick = props.handleClick, image = props.image, imageHeight = props.imageHeight, imageWidth = props.imageWidth, fullWidth = props.fullWidth, enableGradient = props.enableGradient, enableOverlay = props.enableOverlay, classNames = props.classNames;
    return (react_1.default.createElement("div", { ref: ref, className: (0, react_2.cn)('w-full overflow-hidden', classNames) },
        react_1.default.createElement(components_2.Image, { src: image, height: imageHeight, width: imageWidth, fullWidth: fullWidth, alt: title, label: label, handleClick: handleClick, enableGradient: enableGradient, enableOverlay: enableOverlay }),
        react_1.default.createElement("div", { className: "mx-2 pt-3 flex flex-col space-y-2 overflow-hidden" },
            react_1.default.createElement(components_1.Typography, { variant: "subtitle2" }, title),
            subtitle && (react_1.default.createElement(components_1.Typography, { variant: "body2", className: "text-foreground/70" }, subtitle)),
            description && (react_1.default.createElement(components_1.Typography, { variant: "body1", className: "text-foreground/70" }, description)),
            actions,
            secondaryAction)));
});
Card.displayName = 'Card';
exports.default = Card;
