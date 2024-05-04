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
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var FieldFile = function (props) {
    var value = props.value, label = props.label, handleClick = props.handleClick, rest = __rest(props, ["value", "label", "handleClick"]);
    return (react_1.default.createElement(components_1.FieldWrapper, __assign({ label: label }, rest),
        react_1.default.createElement(material_1.Stack, { direction: 'row', spacing: 1 },
            react_1.default.createElement(components_1.Icon, { name: 'File', size: 20, color: 'text.primary' }),
            (value === null || value === void 0 ? void 0 : value.content_type) && (react_1.default.createElement(material_1.Link, { href: value === null || value === void 0 ? void 0 : value.url, sx: sx.link, target: '_blank' }, value === null || value === void 0 ? void 0 : value.content_type)))));
};
exports.default = FieldFile;
var sx = {
    link: {
        color: 'text.secondary',
        textDecoration: 'none',
        '&:hover': {
            color: 'text.primary',
            textDecoration: 'underline',
        },
    },
    cell: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: '0.5rem',
    },
};
