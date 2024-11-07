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
var Spotlight = function (props) {
    var _a = props || {}, image = _a.image, label = _a.label, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, _b = _a.logos, logos = _b === void 0 ? [] : _b, _c = _a.styles, styles = _c === void 0 ? {} : _c, _d = _a.slots, slots = _d === void 0 ? {
        image: {},
    } : _d;
    return (react_1.default.createElement("div", { className: "h-auto w-full" },
        react_1.default.createElement("div", { className: "container mx-auto max-w-screen-lg" },
            react_1.default.createElement("div", { className: "flex flex-col space-y-4 px-2 w-full justify-start items-center" },
                react_1.default.createElement("div", { className: "flex flex-col space-y-2 max-w-[800px] h-full w-full text-center" },
                    label && (react_1.default.createElement("div", { className: "w-full flex justify-center" },
                        react_1.default.createElement(__1.Label, { label: label }))),
                    react_1.default.createElement(core_1.Typography, { variant: "h2", textAlign: "center", className: "tracking-tight" }, primary),
                    secondary && secondary,
                    actions && actions,
                    (logos === null || logos === void 0 ? void 0 : logos.length) > 0 && react_1.default.createElement(__1.Logos, { logos: logos }),
                    react_1.default.createElement("div", { className: "relative shadow-xl rounded-lg overflow-hidden" },
                        react_1.default.createElement(__1.Image, __assign({ src: image, alt: primary, height: 600, objectFit: "cover" }, slots.image))))))));
};
exports.default = Spotlight;
