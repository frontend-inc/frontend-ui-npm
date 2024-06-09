"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var ReviewButton = function (props) {
    var handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.Button, { variant: "contained", color: "secondary", onClick: handleClick }, "Leave a review"));
};
exports.default = ReviewButton;
