"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var Accordion = function (props) {
    var _a = props.items, items = _a === void 0 ? [] : _a;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root }, items === null || items === void 0 ? void 0 :
        items.map(function (item, i) { return (react_1.default.createElement(components_1.AccordionItem, { key: i, title: item === null || item === void 0 ? void 0 : item.title, description: item === null || item === void 0 ? void 0 : item.description, image: item === null || item === void 0 ? void 0 : item.image })); }),
        (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(components_1.Placeholder, { icon: "Search", title: "No content", description: "Your content will appear here." }))));
};
exports.default = Accordion;
var sx = {
    root: {
        width: '100%',
        borderRadius: 0
    },
    title: {
        width: '100%',
        textAlign: 'center',
        mb: 2,
    },
    accordionSummary: {},
};
