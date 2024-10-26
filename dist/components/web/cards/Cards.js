'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var navigation_1 = require("next/navigation");
var Cards = function (props) {
    var router = (0, navigation_1.useRouter)();
    var _a = props || {}, items = _a.items, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay;
    var handleClick = function (card) {
        if (card === null || card === void 0 ? void 0 : card.path) {
            router.push(card.path);
        }
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" }, items === null || items === void 0 ? void 0 : items.map(function (item, i) { return (react_1.default.createElement("div", { key: i },
            react_1.default.createElement(__1.Card, { image: item === null || item === void 0 ? void 0 : item.image, primary: item === null || item === void 0 ? void 0 : item.title, secondary: item === null || item === void 0 ? void 0 : item.description, handleClick: function () { return handleClick(item); }, slots: {
                    image: {
                        enableGradient: enableGradient,
                        enableOverlay: enableOverlay,
                    },
                } }))); })),
        (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(__1.Placeholder, { icon: "Search", title: "No content yet.", description: "Your content will appear here." }))));
};
exports.default = Cards;
