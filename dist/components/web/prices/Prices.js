"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var PriceCard_1 = __importDefault(require("./PriceCard"));
var components_1 = require("../../../components");
var Prices = function (props) {
    var items = props.items;
    return (react_1.default.createElement(material_1.Stack, { spacing: 2 },
        react_1.default.createElement(material_1.Stack, { direction: { sm: 'row', xs: 'column' }, spacing: 1 }, items.map(function (item, index) { return (react_1.default.createElement(PriceCard_1.default, { key: index, price: item })); })),
        (items === null || items === void 0 ? void 0 : items.length) === 0 && (react_1.default.createElement(components_1.Placeholder, { icon: "Search", title: "No content", description: "Your content will appear here." }))));
};
exports.default = Prices;
