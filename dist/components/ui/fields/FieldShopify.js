'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var FieldShopify = function (props) {
    var value = props.value, label = props.label, variant = props.variant, color = props.color, placeholder = props.placeholder, disableLabel = props.disableLabel;
    return (react_1.default.createElement(__1.FieldString, { variant: variant, value: value, label: label, color: color, placeholder: placeholder, disableLabel: disableLabel }));
};
exports.default = FieldShopify;
