"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ui_1 = require("components/ui");
var CellLabel = function (props) {
    var value = props.value;
    return react_1.default.createElement(ui_1.Label, { label: value });
};
exports.default = CellLabel;
