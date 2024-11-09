'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var moment_1 = __importDefault(require("moment"));
var FieldDate = function (props) {
    var value = props.value, label = props.label;
    var formattedValue = (0, moment_1.default)(value).format('MM/DD/YYYY');
    return react_1.default.createElement(components_1.FieldString, { label: label, value: formattedValue });
};
exports.default = FieldDate;
