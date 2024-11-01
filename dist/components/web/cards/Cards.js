'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var Cards = function (props) {
    var _a = props || {}, items = _a.items, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay;
    var onClick = (0, hooks_1.useNavigate)();
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" }, items === null || items === void 0 ? void 0 : items.map(function (item, i) { return (react_1.default.createElement("div", { key: i },
            react_1.default.createElement(__1.Card, { image: item === null || item === void 0 ? void 0 : item.image, primary: item === null || item === void 0 ? void 0 : item.title, secondary: item === null || item === void 0 ? void 0 : item.subtitle, tertiary: item === null || item === void 0 ? void 0 : item.description, actions: (item === null || item === void 0 ? void 0 : item.buttonText) && (react_1.default.createElement(__1.Button, { fullWidth: true, onClick: function () { return onClick(item === null || item === void 0 ? void 0 : item.path); } }, item === null || item === void 0 ? void 0 : item.buttonText)), handleClick: function () { return onClick(item === null || item === void 0 ? void 0 : item.path); }, slots: {
                    image: {
                        enableGradient: enableGradient,
                        enableOverlay: enableOverlay,
                    },
                } }))); })),
        (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(__1.Placeholder, { icon: "Search", title: "No content yet.", description: "Your content will appear here." }))));
};
exports.default = Cards;
