'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var CellString = function (props) {
    var value = props.value, _a = props.variant, variant = _a === void 0 ? 'body2' : _a;
    return (react_1.default.createElement(components_1.Typography, { className: "max-w-[200px] overflow-x-auto whitespace-nowrap", variant: variant }, value));
};
exports.default = CellString;
