'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Feature_1 = __importDefault(require("./Feature"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var Features = function (props) {
    var _a = (props || {}).items, items = _a === void 0 ? [] : _a;
    return (react_1.default.createElement("div", { className: "container mx-auto max-w-screen-lg p-2" },
        react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-10" }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) { return (react_1.default.createElement(components_2.BlurFade, { delay: 0.25 + idx * 0.05, inView: true, key: idx },
            react_1.default.createElement(Feature_1.default, { icon: item === null || item === void 0 ? void 0 : item.icon, title: item === null || item === void 0 ? void 0 : item.title, subtitle: item === null || item === void 0 ? void 0 : item.subtitle }))); })),
        (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(components_1.Placeholder, { icon: "Zap", title: "No features", description: "No features to display." }))));
};
exports.default = Features;
