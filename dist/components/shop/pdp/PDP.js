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
var frontend_shadcn_1 = require("frontend-shadcn");
var PDP = function (props) {
    var _a = props || {}, _b = _a.direction, direction = _b === void 0 ? 'row' : _b, label = _a.label, image = _a.image, primary = _a.primary, secondary = _a.secondary, addToCart = _a.addToCart, price = _a.price, compareAtPrice = _a.compareAtPrice, description = _a.description, actions = _a.actions, secondaryAction = _a.secondaryAction, _c = _a.slots, slots = _c === void 0 ? {
        image: {},
        content: {},
    } : _c;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2 w-full" },
        secondaryAction,
        react_1.default.createElement("div", { className: "w-full flex justify-center items-center" },
            react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)("flex flex-col space-y-3 w-full", direction == "row" && "sm:flex-row sm:space-x-10 sm:space-y-0") },
                react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)("w-full flex flex-col space-y-5 justify-center items-center", direction == "row" && "md:w-1/2") },
                    react_1.default.createElement("div", { className: "rounded-lg w-full" },
                        react_1.default.createElement(__1.Image, __assign({ src: image, alt: primary, height: 400, aspectRatio: 4 / 3, label: label }, slots.image))),
                    actions),
                react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)("w-full flex flex-col space-y-3", direction == "row" && "md:w-1/2") },
                    react_1.default.createElement(core_1.Typography, { variant: "h3" }, primary),
                    react_1.default.createElement("div", { className: "flex flex-row space-x-2" },
                        react_1.default.createElement(core_1.Typography, { variant: "h6" }, price),
                        compareAtPrice && (react_1.default.createElement(core_1.Typography, { variant: "subtitle2", className: "text-muted-foreground line-through" }, compareAtPrice))),
                    secondary,
                    addToCart,
                    react_1.default.createElement(__1.ExpandableText, { text: description || '' }))))));
};
exports.default = PDP;
