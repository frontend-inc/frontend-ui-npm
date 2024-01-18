"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ui_1 = require("components/ui");
var CellJSON = function (props) {
    var value = props.value;
    var formattedValue = value;
    if (typeof value === 'object') {
        formattedValue = JSON.stringify(value);
    }
    return (react_1.default.createElement(ui_1.CellExpand, { cell: react_1.default.createElement(ui_1.CellString, { value: formattedValue }), cellExpanded: react_1.default.createElement(ui_1.CellStringExpanded, { value: JSON.stringify(value, null, 2) }) }));
};
exports.default = CellJSON;
