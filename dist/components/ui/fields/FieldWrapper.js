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
var FieldWrapper = function (props) {
    var _a = props || {}, _b = _a.direction, direction = _b === void 0 ? 'column' : _b, label = _a.label, icon = _a.icon, _c = _a.color, color = _c === void 0 ? 'text.secondary' : _c, _d = _a.alignItems, alignItems = _d === void 0 ? 'flex-start' : _d, _e = _a.enableBorder, enableBorder = _e === void 0 ? false : _e, _f = _a.disablePadding, disablePadding = _f === void 0 ? false : _f, children = _a.children;
    return (react_1.default.createElement(material_1.Stack, { direction: direction, spacing: disablePadding ? 0 : 1, sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)), alignItems: alignItems },
        label && (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.label), ((direction === 'row' || direction == 'row-reverse') &&
                sx.labelRow)) },
            react_1.default.createElement(material_1.Typography, { variant: "caption", color: color }, label))),
        react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
            icon && react_1.default.createElement(components_1.Icon, { name: icon, color: color }),
            children)));
};
exports.default = FieldWrapper;
var sx = {
    root: {
        width: '100%',
    },
    text: {
        color: 'text.secondary',
    },
    label: {
        width: '100%',
    },
    labelRow: {
        minWidth: 100,
        width: 100,
        pr: 1,
    },
    rootBorder: {
        p: 1.5,
        width: '100%',
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'divider',
    },
};
