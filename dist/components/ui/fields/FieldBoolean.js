'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var FieldBoolean = function (props) {
    var value = props.value, label = props.label;
    return (react_1.default.createElement(components_1.FieldWrapper, { label: label },
        react_1.default.createElement(react_2.Chip, { color: value ? 'success' : 'danger' }, value ? 'true' : 'false')));
};
exports.default = FieldBoolean;
