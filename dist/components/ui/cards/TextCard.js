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
var TextList_1 = __importDefault(require("./variants/TextList"));
var TextGrid_1 = __importDefault(require("./variants/TextGrid"));
var TextCard = function (props) {
    var variant = props.variant;
    return variant == 'list' ? react_1.default.createElement(TextList_1.default, __assign({}, props)) : react_1.default.createElement(TextGrid_1.default, __assign({}, props));
};
exports.default = TextCard;
