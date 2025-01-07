'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
var ErrorText = function (props) {
    var error = props.error;
    if (!error)
        return null;
    return react_1.default.createElement(components_1.Typography, { variant: "destructive" }, error);
};
exports.default = ErrorText;
