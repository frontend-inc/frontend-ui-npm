"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var CellPrice = function (props) {
    var value = props.value, _a = props.currency, currency = _a === void 0 ? 'USD' : _a, _b = props.digits, digits = _b === void 0 ? 2 : _b;
    var price = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: digits,
        minimumFractionDigits: digits,
    }).format(value) || 0;
    if (!value)
        return null;
    return react_1.default.createElement(components_1.CellString, { variant: "body2", value: String(price) });
};
exports.default = CellPrice;
