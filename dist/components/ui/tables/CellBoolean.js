'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var CellBoolean = function (props) {
    var value = props.value;
    return (react_1.default.createElement(components_1.Badge, null, value ? 'True' : 'False'));
};
exports.default = CellBoolean;
