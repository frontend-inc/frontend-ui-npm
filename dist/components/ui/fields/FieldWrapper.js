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
var FieldWrapper = function (props) {
    var _a = props || {}, _b = _a.variant, variant = _b === void 0 ? 'overline' : _b, _c = _a.flexDirection, flexDirection = _c === void 0 ? 'row' : _c, label = _a.label, _d = _a.color, color = _d === void 0 ? 'text.primary' : _d, helperText = _a.helperText, children = _a.children;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.field), { flexDirection: {
                    xs: 'column',
                    sm: flexDirection,
                } }) },
            label && (react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.label), { color: color }), (flexDirection === 'row' && sx.labelRow)) },
                react_1.default.createElement(material_1.Typography, { variant: variant, sx: __assign(__assign({}, sx.text), { textAlign: flexDirection === 'row' ? 'right' : 'left' }) }, label))),
            react_1.default.createElement(material_1.Box, { sx: sx.field }, children)),
        helperText && (react_1.default.createElement(material_1.Typography, { variant: variant, sx: sx.helperText }, helperText))));
};
exports.default = FieldWrapper;
var sx = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    field: {},
    text: {
        color: 'text.secondary',
    },
    label: {
        width: '100%',
    },
    labelRow: {
        width: '100%',
        maxWidth: 160,
        pr: 1,
    },
    helperText: {
        color: 'text.secondary',
    },
};
