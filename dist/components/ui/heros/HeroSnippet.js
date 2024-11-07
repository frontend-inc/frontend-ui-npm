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
var __1 = require("../..");
var core_1 = require("../../core");
function HeroSnippet(_a) {
    var label = _a.label, image = _a.image, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, _b = _a.disableImage, disableImage = _b === void 0 ? false : _b, _c = _a.circular, circular = _c === void 0 ? false : _c, _d = _a.slots, slots = _d === void 0 ? {
        image: {},
    } : _d;
    return (react_1.default.createElement("div", { className: "flex flex-col w-full" },
        !disableImage && (react_1.default.createElement("div", { className: "w-full overflow-hidden rounded-t-[inherit]" }, circular ? (react_1.default.createElement(__1.AvatarImage, __assign({ label: label, src: image, size: 180, alt: primary }, slots.image))) : (react_1.default.createElement(__1.Image, __assign({ label: label, src: image, height: 220, alt: primary }, slots.image))))),
        react_1.default.createElement("div", { className: "flex flex-col space-y-2 p-4 w-full" },
            actions,
            react_1.default.createElement(core_1.Typography, { variant: "subtitle1" }, primary),
            secondary)));
}
exports.default = HeroSnippet;
