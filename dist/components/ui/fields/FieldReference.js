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
var icons_material_1 = require("@mui/icons-material");
var components_1 = require("../../../components");
var FieldReference = function (props) {
    var value = props.value, label = props.label, handleClick = props.handleClick, rest = __rest(props, ["value", "label", "handleClick"]);
    return (react_1.default.createElement(components_1.FieldWrapper, __assign({ label: label }, rest),
        react_1.default.createElement(material_1.Button, { color: "primary", variant: "outlined", sx: sx.button, endIcon: react_1.default.createElement(icons_material_1.Repeat, null), onClick: handleClick }, value)));
};
exports.default = FieldReference;
var sx = {
    cell: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
    },
    avatar: {
        bgcolor: "background.paper",
    },
    button: {
        textTransform: "none",
        fontFamily: function (theme) { return theme.typography.body2.fontFamily; },
        letterSpacing: 0,
    },
};
