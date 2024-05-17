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
var material_1 = require("@mui/material");
var __1 = require("../..");
var Avatar = function (props) {
    var src = props.src, color = props.color, label = props.label, _a = props.size, size = _a === void 0 ? 40 : _a;
    return (react_1.default.createElement(material_1.Avatar, { variant: "circular", src: src, sx: __assign(__assign({}, sx.avatar), { height: size, width: size, bgcolor: src ? 'common.white' : color }) }, label ? (react_1.default.createElement(material_1.Typography, { variant: "button", color: "background.default", sx: sx.label }, label)) : (react_1.default.createElement(__1.Icon, { name: "User", color: "secondary.contrastText" }))));
};
exports.default = Avatar;
var sx = {
    avatar: {
        display: 'flex',
        pt: '2px',
        bgcolor: 'secondary.main',
    },
    label: {
        textTransform: 'uppercase',
    },
};
