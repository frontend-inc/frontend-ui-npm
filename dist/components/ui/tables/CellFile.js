"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var CellFile = function (props) {
    var value = props.value, handleClick = props.handleClick;
    if (!(value === null || value === void 0 ? void 0 : value.url))
        return null;
    return (react_1.default.createElement(components_1.CellButton, { icon: 'File', handleClick: handleClick }, "Attachment"));
};
exports.default = CellFile;
