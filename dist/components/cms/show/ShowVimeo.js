'use client';
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
var lodash_1 = require("lodash");
var ShowLayout_1 = __importDefault(require("./ShowLayout"));
var VimeoVideo = function (props) {
    var _a = props || {}, resource = _a.resource, buttons = _a.buttons, fieldName = _a.fieldName, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, rest = __rest(_a, ["resource", "buttons", "fieldName", "displayFields"]);
    var src = (0, lodash_1.get)(resource, fieldName);
    return (react_1.default.createElement(ShowLayout_1.default, __assign({ buttons: buttons, resource: resource, displayFields: displayFields }, rest),
        react_1.default.createElement(__1.VimeoEmbed, { src: src })));
};
exports.default = VimeoVideo;
