'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var CardItems = function (props) {
    var _a = props || {}, item = _a.item, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, handleClick = _a.handleClick;
    return (react_1.default.createElement(__1.Card, { label: item === null || item === void 0 ? void 0 : item.label, image: item === null || item === void 0 ? void 0 : item.image, title: item === null || item === void 0 ? void 0 : item.title, subtitle: item === null || item === void 0 ? void 0 : item.subtitle, actions: (item === null || item === void 0 ? void 0 : item.buttonText) && (react_1.default.createElement(__1.Button, { fullWidth: true, onClick: function () { return handleClick(item === null || item === void 0 ? void 0 : item.path); } }, item === null || item === void 0 ? void 0 : item.buttonText)), handleClick: function () { return handleClick(item === null || item === void 0 ? void 0 : item.path); }, enableGradient: enableGradient, enableOverlay: enableOverlay }));
};
var Cards = function (props) {
    var _a = props || {}, items = _a.items, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, _b = _a.layout, layout = _b === void 0 ? 'grid' : _b;
    var onClick = (0, hooks_1.useNavigate)();
    return (react_1.default.createElement("div", { className: "w-full justify-center flex flow-row" },
        react_1.default.createElement("div", { className: "container mx-auto max-w-screen-2xl" },
            layout === 'carousel' ? (react_1.default.createElement(components_1.Swipeable, { enableArrows: true, itemsPerSlide: 3, arrowHeight: 40 }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) { return (react_1.default.createElement(components_1.BlurFade, { delay: 0.25 + idx * 0.05, inView: true, key: idx },
                react_1.default.createElement("div", { className: "py-2 w-full" },
                    react_1.default.createElement(CardItems, { enablePadding: true, item: item, enableGradient: enableGradient, enableOverlay: enableOverlay, handleClick: onClick })))); }))) : (react_1.default.createElement("div", { className: 'w-full justify-center grid grid-cols-1 sm:grid-cols-3 gap-6' }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) { return (react_1.default.createElement(components_1.BlurFade, { delay: 0.25 + idx * 0.05, inView: true, key: idx },
                react_1.default.createElement(CardItems, { enablePadding: true, item: item, enableGradient: enableGradient, enableOverlay: enableOverlay, handleClick: onClick }))); }))),
            (items === null || items === void 0 ? void 0 : items.length) === 0 && (react_1.default.createElement(__1.Empty, { icon: "ri-stack-fill", title: "No content yet.", description: "Your content will appear here." })))));
};
exports.default = Cards;
