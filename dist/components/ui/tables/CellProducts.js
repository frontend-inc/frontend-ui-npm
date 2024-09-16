"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CellButton_1 = __importDefault(require("./CellButton"));
var CellProducts = function (props) {
    var value = props.value;
    console.log("CellProducts", value);
    return (react_1.default.createElement(CellButton_1.default, { icon: 'Box' }, "Products"));
};
exports.default = CellProducts;
