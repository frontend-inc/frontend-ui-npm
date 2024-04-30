"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ChipList_1 = __importDefault(require("./variants/ChipList"));
var ChipGrid_1 = __importDefault(require("./variants/ChipGrid"));
var Chip = function (props) {
    var variant = props.variant;
    return variant == 'list' ?
        react_1.default.createElement(ChipList_1.default, __assign({}, props)) :
        react_1.default.createElement(ChipGrid_1.default, __assign({}, props));
};
exports.default = Chip;
