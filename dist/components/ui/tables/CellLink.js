'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var lucide_react_1 = require("lucide-react");
var helpers_1 = require("../../../helpers");
var CellLink = function (props) {
    var value = props.value, handleClick = props.handleClick;
    return (react_1.default.createElement("div", { className: "w-full" }, value && (react_1.default.createElement(core_1.Button, { size: "sm", variant: "secondary", startIcon: react_1.default.createElement(lucide_react_1.ExternalLink, null), onClick: handleClick }, (0, helpers_1.truncate)(value, 20)))));
};
exports.default = CellLink;
