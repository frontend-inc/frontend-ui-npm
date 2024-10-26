'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var CellRating = function (props) {
    var _a = props.value, value = _a === void 0 ? 0 : _a;
    return react_1.default.createElement(core_1.Rating, { readOnly: true, value: value });
};
exports.default = CellRating;
