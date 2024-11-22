'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var react_2 = require("@remixicon/react");
var CellLink = function (props) {
    var value = props.value, handleClick = props.handleClick;
    return (react_1.default.createElement("div", { className: "w-full" }, value && (react_1.default.createElement(components_1.Button, { size: "sm", variant: "secondary", startIcon: react_1.default.createElement(react_2.RiExternalLinkFill, null), onClick: handleClick }, (0, helpers_1.truncate)(value, 20)))));
};
exports.default = CellLink;
