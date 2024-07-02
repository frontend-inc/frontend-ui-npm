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
exports.Statistic = void 0;
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var Statistic = function (props) {
    var value = props.value, label = props.label, icon = props.icon, _a = props.direction, direction = _a === void 0 ? "row" : _a, _b = props.enableBorder, enableBorder = _b === void 0 ? false : _b;
    return (react_1.default.createElement(material_1.Stack, { spacing: direction === 'row' ? 1 : 0, direction: direction, sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)) },
        react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(components_1.Icon, { name: icon, size: 24 })),
        react_1.default.createElement(material_1.Typography, { variant: "h6", color: "textPrimary" }, value),
        react_1.default.createElement(material_1.Typography, { variant: "caption", color: "textSecondary" }, label)));
};
exports.Statistic = Statistic;
exports.default = exports.Statistic;
var sx = {
    root: {
        p: 1,
        borderRadius: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        transition: 'box-shadow 0.3s',
        '&:hover': {
            boxShadow: 1
        }
    },
    rootBorder: {
        p: 2,
        border: '1px solid',
        borderColor: 'divider'
    }
};
