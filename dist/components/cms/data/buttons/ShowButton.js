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
var ShowButton = function (props) {
    var _a = (props || {}).children, children = _a === void 0 ? 'View' : _a;
    var _b = (0, frontend_js_1.useResourceContext)(), setResource = _b.setResource, setOpenShow = _b.setOpenShow, setOpenEdit = _b.setOpenEdit, setOpenCreate = _b.setOpenCreate, setOpenDelete = _b.setOpenDelete;
    var _c = props || {}, _resource = _c.resource, rest = __rest(_c, ["resource"]);
    var handleClick = function () {
        if (_resource) {
            setResource(_resource);
        }
        setOpenShow(true);
        setOpenEdit(false);
        setOpenDelete(false);
        setOpenCreate(false);
    };
    return (react_1.default.createElement(__1.Button, __assign({ onClick: handleClick }, rest), children));
};
exports.default = ShowButton;
