'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var components_1 = require("../../../components");
var react_3 = require("@nextui-org/react");
var FieldArray = function (props) {
    var values = props.value, label = props.label, className = props.className, direction = props.direction;
    return (react_1.default.createElement(components_1.FieldWrapper, { label: label, direction: direction },
        react_1.default.createElement("div", { className: (0, react_3.cn)('flex flex-row gap-2 overflow-x-scroll flex-nowrap', className) }, Array.isArray(values) &&
            (values === null || values === void 0 ? void 0 : values.map(function (value, index) { return (react_1.default.createElement(react_2.Chip, { className: "whitespace-nowrap", key: index }, value)); })))));
};
exports.default = FieldArray;
