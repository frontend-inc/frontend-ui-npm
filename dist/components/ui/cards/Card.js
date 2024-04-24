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
var CardVert_1 = __importDefault(require("./variants/CardVert"));
var CardHoriz_1 = __importDefault(require("./variants/CardHoriz"));
var Card = function (props) {
    var direction = props.direction;
    switch (direction) {
        case 'row':
            return react_1.default.createElement(CardVert_1.default, __assign({}, props));
        case 'column':
            return react_1.default.createElement(CardHoriz_1.default, __assign({}, props));
        default:
            return react_1.default.createElement(CardVert_1.default, __assign({}, props));
    }
};
exports.default = Card;
