"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var FieldPrice = function (props) {
    var value = props.value, _a = props.currency, currency = _a === void 0 ? 'USD' : _a, _b = props.digits, digits = _b === void 0 ? 2 : _b, label = props.label, variant = props.variant, color = props.color, placeholder = props.placeholder, rest = __rest(props, ["value", "currency", "digits", "label", "variant", "color", "placeholder"]);
    var price = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: digits,
        minimumFractionDigits: digits,
    }).format(value);
    return (react_1.default.createElement(components_1.FieldString, __assign({ variant: variant, value: isNaN(value) ? '-' : price, label: label, color: color, placeholder: placeholder }, rest)));
};
exports.default = FieldPrice;
