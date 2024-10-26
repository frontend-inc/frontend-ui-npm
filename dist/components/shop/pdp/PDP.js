'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var __1 = require("../..");
var PDP = function (props) {
    var _a = props || {}, label = _a.label, image = _a.image, primary = _a.primary, secondary = _a.secondary, addToCart = _a.addToCart, price = _a.price, compareAtPrice = _a.compareAtPrice, description = _a.description, actions = _a.actions, secondaryAction = _a.secondaryAction, _b = _a.slots, slots = _b === void 0 ? {
        image: {},
        content: {},
    } : _b;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2 w-full" },
        secondaryAction,
        react_1.default.createElement("div", { className: "w-full flex justify-center items-center" },
            react_1.default.createElement("div", { className: "flex flex-col space-y-3 sm:flex-row sm:space-x-10 sm:space-y-0 w-full" },
                react_1.default.createElement("div", { className: "w-full md:w-1/2 flex flex-col space-y-5 justify-center items-center" },
                    react_1.default.createElement("div", { className: "rounded-lg w-full" },
                        react_1.default.createElement(__1.Image, __assign({ src: image, alt: primary, height: 400, aspectRatio: 4 / 3, label: label }, slots.image))),
                    actions),
                react_1.default.createElement("div", { className: "w-full md:w-1/2 flex flex-col space-y-3" },
                    react_1.default.createElement(core_1.Typography, { variant: "h3" }, primary),
                    react_1.default.createElement("div", { className: "flex flex-row space-x-2" },
                        react_1.default.createElement(core_1.Typography, { variant: "h6" }, price),
                        compareAtPrice && (react_1.default.createElement(core_1.Typography, { variant: "subtitle2", className: "text-muted-foreground line-through" }, compareAtPrice))),
                    secondary,
                    addToCart,
                    react_1.default.createElement(__1.ExpandableText, { text: description || '' }))))));
};
exports.default = PDP;
