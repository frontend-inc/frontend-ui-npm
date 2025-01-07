'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var Accordion = function (props) {
    var variant = props.variant, _a = props.items, items = _a === void 0 ? [] : _a;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Accordion, { variant: variant, selectionMode: "multiple" }, items === null || items === void 0 ? void 0 : items.map(function (item, i) { return (react_1.default.createElement(react_2.AccordionItem, { key: i, "aria-label": item === null || item === void 0 ? void 0 : item.title, title: item === null || item === void 0 ? void 0 : item.title },
            react_1.default.createElement(components_1.Typography, { variant: "subtitle2", className: "pb-2" }, item === null || item === void 0 ? void 0 : item.subtitle))); })),
        (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(components_1.Empty, { icon: "ri-search-line", title: "No content", description: "Your content will appear here." }))));
};
exports.default = Accordion;
