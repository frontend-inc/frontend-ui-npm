'use client';
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var FieldPrice = function (props) {
    var value = props.value, _a = props.currency, currency = _a === void 0 ? 'USD' : _a, _b = props.digits, digits = _b === void 0 ? 2 : _b, rest = props.rest;
    var price = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: digits,
        minimumFractionDigits: digits,
    }).format(value);
    return react_1.default.createElement(components_1.FieldString, __assign({ value: isNaN(value) ? '-' : price }, rest));
};
exports.default = FieldPrice;
