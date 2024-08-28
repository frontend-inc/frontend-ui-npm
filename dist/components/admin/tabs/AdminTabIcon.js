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
var components_1 = require("../../../components");
var LayoutTabIcon = function (props) {
    var icon = props.icon, _a = props.selected, selected = _a === void 0 ? false : _a, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.IconButton, { sx: __assign(__assign({}, sx.root), (selected && sx.selected)), onClick: handleClick }, icon && react_1.default.createElement(components_1.Icon, { name: icon })));
};
exports.default = LayoutTabIcon;
var sx = {
    root: {
        color: 'secondary.contrastText',
        justifyContent: 'center',
        minWidth: '30px',
        borderRadius: 1,
        bgcolor: 'transparent',
        '&:hover': {
            bgcolor: 'secondary.main',
        },
    },
    selected: {
        bgcolor: 'primary.main',
        '&:hover': {
            bgcolor: 'primary.main',
        },
    },
};
