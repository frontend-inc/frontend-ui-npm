'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var __1 = require("../..");
var SpotlightCard = function (props) {
    var _a = props || {}, image = _a.image, label = _a.label, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, _b = _a.logos, logos = _b === void 0 ? [] : _b, _c = _a.slots, slots = _c === void 0 ? {
        image: {},
    } : _c;
    return (react_1.default.createElement("div", { className: 'pt-16 py-6 h-auto w-full' },
        react_1.default.createElement("div", { className: "container mx-auto max-w-screen-xl" },
            react_1.default.createElement("div", { className: "flex flex-col sm:flex-row md:space-x-4 space-y-4" },
                react_1.default.createElement("div", { className: "flex flex-col space-y-6 sm:min-h-[400px] md:items-start xs:items-center justify-center md:max-w-[600px] xs:max-w-full md:w-1/2 xs:w-full" },
                    label && (react_1.default.createElement("div", null,
                        react_1.default.createElement(__1.Label, { label: label }))),
                    react_1.default.createElement(core_1.Typography, { variant: "h2", className: "md:text-left xs:text-center" }, primary),
                    secondary && secondary,
                    actions && actions,
                    (logos === null || logos === void 0 ? void 0 : logos.length) > 0 && react_1.default.createElement(__1.BrandLogos, { logos: logos })),
                react_1.default.createElement("div", { className: "md:w-1/2 w-full p-2 flex flex-col justify-center" },
                    react_1.default.createElement(__1.Image, { src: image, alt: typeof primary === 'string' ? primary : 'Spotlight image', height: 400, aspectRatio: 3 / 2, objectFit: "cover" }))))));
};
exports.default = SpotlightCard;
