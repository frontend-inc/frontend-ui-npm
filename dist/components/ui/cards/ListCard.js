'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var components_1 = require("../../../components");
var ListCard = function (props) {
    var _a = props || {}, _b = _a.circular, circular = _b === void 0 ? false : _b, label = _a.label, title = _a.title, subtitle = _a.subtitle, actions = _a.actions, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, image = _a.image, _c = _a.size, size = _c === void 0 ? 140 : _c, disableImage = _a.disableImage, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay;
    return (react_1.default.createElement("button", { onClick: handleClick, className: "p-2 w-full border-b border-border last:border-b-0 hover:bg-muted/50" },
        react_1.default.createElement("div", { className: "flex flex-row items-center w-full" },
            react_1.default.createElement("div", { className: "flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row justify-start items-start flex-grow" },
                !disableImage && (react_1.default.createElement("div", { className: "flex-shrink-0 w-full md:w-[260px]" },
                    react_1.default.createElement("div", { className: "w-full pr-2 h-full flex flex-row justify-center items-center" }, circular ? (react_1.default.createElement(__1.AvatarImage, { src: image, size: size, alt: title, enableGradient: enableGradient, enableOverlay: enableOverlay })) : (react_1.default.createElement(__1.Image, { label: label, src: image, height: size, alt: title, aspectRatio: 4 / 3, enableGradient: enableGradient, enableOverlay: enableOverlay }))))),
                react_1.default.createElement("div", { className: "flex flex-col justify-between min-h-[120px] flex-grow" },
                    react_1.default.createElement("div", { className: "flex flex-col space-y-1" },
                        react_1.default.createElement(components_1.Typography, { variant: "subtitle1" }, title),
                        react_1.default.createElement(components_1.Typography, { variant: "body2", className: "text-muted-foreground" }, subtitle)),
                    react_1.default.createElement("div", { className: "flex flex-row justify-between items-center w-full" },
                        actions,
                        secondaryAction))))));
};
exports.default = ListCard;
