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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var CollectionCard = function (props) {
    var _a = props.layout, layout = _a === void 0 ? 'list' : _a, _b = props.style, style = _b === void 0 ? 'card' : _b, rest = __rest(props, ["layout", "style"]);
    var COMPONENTS = {
        list: {
            card: __1.CardHoriz,
            avatar: __1.AvatarHoriz,
            cover: __1.CoverHoriz,
        },
        grid: {
            card: __1.CardVert,
            avatar: __1.AvatarVert,
            cover: __1.CoverVert,
        },
    };
    var Component = COMPONENTS[layout][style] || __1.CardVert;
    return react_1.default.createElement(Component, __assign({}, rest));
};
exports.default = CollectionCard;
