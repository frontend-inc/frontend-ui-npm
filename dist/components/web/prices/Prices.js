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
    var title = props.title, prices = props.prices;
    return (react_1.default.createElement(material_1.Stack, { spacing: 2 },
        title && (react_1.default.createElement(components_1.Heading, { title: title, textAlign: 'center' })),
        react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 }, prices.map(function (price, index) { return (react_1.default.createElement(PriceCard_1.default, { key: index, price: price })); }))));
};
exports.default = Prices;
