"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var PriceTableCard_1 = __importDefault(require("./PriceTableCard"));
var __1 = require("../..");
var PriceTable = function (props) {
    var items = props.items;
    return (react_1.default.createElement(material_1.Stack, { spacing: 2 },
        react_1.default.createElement(material_1.Stack, { direction: { sm: 'row', xs: 'column' }, spacing: 1 }, items.map(function (item, index) { return (react_1.default.createElement(PriceTableCard_1.default, { key: index, price: item })); })),
        (items === null || items === void 0 ? void 0 : items.length) === 0 && (react_1.default.createElement(__1.Placeholder, { icon: "CreditCard", title: "No subscription plans", description: "Subscription plans will appear here." }))));
};
exports.default = PriceTable;
