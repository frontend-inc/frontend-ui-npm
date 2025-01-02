'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var FeatureCard_1 = __importDefault(require("./FeatureCard"));
var components_2 = require("../../../components");
var FeatureCards = function (props) {
    var _a = props || {}, _b = _a.items, items = _b === void 0 ? [] : _b, variant = _a.variant, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay;
    return (react_1.default.createElement("div", { className: "container mx-auto max-w-screen-lg" },
        react_1.default.createElement("div", { className: "w-full flex flex-col space-y-10 p-2" }, items === null || items === void 0 ? void 0 : items.map(function (item, i) { return (react_1.default.createElement(components_2.BlurFade, { delay: 0.25, inView: true, key: i },
            react_1.default.createElement(FeatureCard_1.default, { label: item === null || item === void 0 ? void 0 : item.label, title: item === null || item === void 0 ? void 0 : item.title, subtitle: item === null || item === void 0 ? void 0 : item.subtitle, image: item === null || item === void 0 ? void 0 : item.image, buttonText: item === null || item === void 0 ? void 0 : item.buttonText, href: item === null || item === void 0 ? void 0 : item.path, direction: i % 2 === 0 ? 'row' : 'row-reverse', enableGradient: enableGradient, enableOverlay: enableOverlay, variant: variant }))); })),
        (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(components_1.Empty, { icon: "ri-list-check-line", title: "No featured content.", description: "Your featured content will appear here." }))));
};
exports.default = FeatureCards;
