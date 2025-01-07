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
var react_2 = require("@nextui-org/react");
var __1 = require("../..");
var __2 = require("../..");
var CollectionCard = react_1.default.forwardRef(function (props, ref) {
    var label = props.label, primary = props.primary, handleClick = props.handleClick, image = props.image, _a = props.slots, slots = _a === void 0 ? {
        item: {},
        image: {},
    } : _a;
    return (react_1.default.createElement(react_2.Card, { ref: ref, isFooterBlurred: true },
        react_1.default.createElement(__2.Image, __assign({ handleClick: handleClick, disableBorderRadius: true, 
            // @ts-ignore
            src: image, alt: primary, aspectRatio: 1.0 }, slots.image)),
        react_1.default.createElement(react_2.CardFooter, { className: "dark absolute bottom-0 left-0 w-full flex flex-col space-y-2 p-4 z-20" },
            react_1.default.createElement(__1.Typography, { variant: "caption", className: "text-white text-ellipsis" }, label),
            react_1.default.createElement(__1.Typography, { variant: "body1", className: "text-white text-ellipsis" }, primary))));
});
CollectionCard.displayName = 'CollectionCard';
exports.default = CollectionCard;
