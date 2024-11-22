'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AccordionItem_1 = __importDefault(require("./AccordionItem"));
var Accordion = function (props) {
    var _a = props.items, items = _a === void 0 ? [] : _a;
    return (react_1.default.createElement("div", { className: "container mx-auto max-w-screen-lg" },
        react_1.default.createElement("div", { className: "flex flex-col" }, items === null || items === void 0 ? void 0 :
            items.map(function (item, i) { return (react_1.default.createElement(AccordionItem_1.default, { key: i, title: item === null || item === void 0 ? void 0 : item.title, subtitle: item === null || item === void 0 ? void 0 : item.subtitle })); }),
            (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(components_1.Empty, { icon: "ri-search-line", title: "No content", description: "Your content will appear here." })))));
};
exports.default = Accordion;
