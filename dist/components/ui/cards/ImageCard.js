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
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
function ImageCard(_a) {
    var primary = _a.primary, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, image = _a.image, _b = _a.height, height = _b === void 0 ? 260 : _b, _c = _a.slots, slots = _c === void 0 ? {
        image: {},
    } : _c;
    return (react_1.default.createElement("div", { className: "dark" },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('relative flex flex-col overflow-hidden rounded', 'transition-shadow duration-300 hover:shadow-md') },
            react_1.default.createElement(components_1.TouchableOpacity, { handleClick: handleClick },
                react_1.default.createElement(components_1.Image, __assign({ src: image, height: height, alt: primary, className: "w-full h-auto object-cover" }, slots.image))),
            react_1.default.createElement("div", { className: "absolute top-2.5 right-2.5 flex flex-row justify-end" }, secondaryAction))));
}
exports.default = ImageCard;
