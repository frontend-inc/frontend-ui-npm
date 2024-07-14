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
var __1 = require("../..");
var Show = function (props) {
    var _a = props || {}, url = _a.url, fields = _a.fields, resource = _a.resource;
    return (react_1.default.createElement(__1.ShowContainer, { url: url, fields: fields, resource: resource },
        react_1.default.createElement(__1.ShowItem, __assign({}, props, { url: url }))));
};
exports.default = Show;
