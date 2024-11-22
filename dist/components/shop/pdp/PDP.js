'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var frontend_shadcn_1 = require("frontend-shadcn");
var PDP = function (props) {
    var _a = props || {}, _b = _a.direction, direction = _b === void 0 ? 'row' : _b, label = _a.label, image = _a.image, title = _a.title, addToCart = _a.addToCart, price = _a.price, rating = _a.rating, compareAtPrice = _a.compareAtPrice, description = _a.description, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, enableRatings = _a.enableRatings, actions = _a.actions, secondaryAction = _a.secondaryAction;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2 w-full" },
        secondaryAction,
        react_1.default.createElement("div", { className: "w-full flex justify-center items-center" },
            react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col space-y-3 w-full', direction == 'row' && 'sm:flex-row sm:space-x-10 sm:space-y-0') },
                react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full flex flex-col space-y-5 justify-center items-center', direction == 'row' && 'md:w-1/2') },
                    react_1.default.createElement("div", { className: "rounded-lg w-full" },
                        react_1.default.createElement(__1.Image, { src: image, alt: title, height: 400, aspectRatio: 4 / 3, label: label, enableGradient: enableGradient, enableOverlay: enableOverlay })),
                    actions),
                react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full flex flex-col space-y-3', direction == 'row' && 'md:w-1/2') },
                    react_1.default.createElement(components_1.Typography, { variant: "h3" }, title),
                    react_1.default.createElement("div", { className: "flex flex-row space-x-2" },
                        react_1.default.createElement(components_1.Typography, { variant: "h6" }, price),
                        compareAtPrice && (react_1.default.createElement(components_1.Typography, { variant: "subtitle2", className: "text-muted-foreground line-through" }, compareAtPrice))),
                    enableRatings == true && react_1.default.createElement(__1.ProductRating, { rating: rating || 0 }),
                    addToCart,
                    react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: description } }))))));
};
exports.default = PDP;
