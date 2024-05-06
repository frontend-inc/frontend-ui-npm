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
var __1 = require("../../..");
var frontend_js_1 = require("frontend-js");
var ShowContainer_1 = __importDefault(require("../ShowContainer"));
var VimeoVideo = function (props) {
    var _a = props || {}, resource = _a.resource, actions = _a.actions, fieldName = _a.fieldName, rest = __rest(_a, ["resource", "actions", "fieldName"]);
    var src = (0, frontend_js_1.flattenDocument)(resource)[fieldName];
    return (react_1.default.createElement(ShowContainer_1.default, __assign({}, rest, { actions: actions, resource: resource }),
        react_1.default.createElement(__1.VimeoEmbed, { src: src })));
};
exports.default = VimeoVideo;
