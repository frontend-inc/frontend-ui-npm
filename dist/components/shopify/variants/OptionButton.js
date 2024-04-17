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
var OptionButton = function (props) {
    var value = props.value, name = props.name, active = props.active, handleClick = props.handleClick, children = props.children;
    return (react_1.default.createElement(material_1.Button, { sx: __assign(__assign({}, sx.button), (active && sx.active)), variant: "contained", color: active ? 'primary' : 'secondary', onClick: function () { return handleClick(name, value); } }, children));
};
exports.default = OptionButton;
var sx = {
    active: {
        opacity: 1,
    },
    button: {
        textWrap: 'nowrap',
    },
};
