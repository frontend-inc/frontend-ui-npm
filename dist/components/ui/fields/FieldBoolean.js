'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var FieldBoolean = function (props) {
    var value = props.value, label = props.label, color = props.color, disableLabel = props.disableLabel;
    return (react_1.default.createElement(components_1.FieldWrapper, { label: label, color: color, disableLabel: disableLabel },
        react_1.default.createElement(components_1.Label, { label: value ? 'true' : 'false' })));
};
exports.default = FieldBoolean;
