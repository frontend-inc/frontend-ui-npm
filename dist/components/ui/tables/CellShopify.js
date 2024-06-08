"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var helpers_1 = require("../../../helpers");
var CellShopify = function (props) {
    var value = props.value;
    return react_1.default.createElement(__1.CellString, { variant: "body2", value: (0, helpers_1.truncate)(value, 250) });
};
exports.default = CellShopify;
