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
var NumberRangeInput = function (props) {
    var _a = props || {}, _b = _a.value, value = _b === void 0 ? {
        min: 0,
        max: 0,
    } : _b, name = _a.name, label = _a.label, handleChange = _a.handleChange, _c = _a.currency, currency = _c === void 0 ? 'usd' : _c, info = _a.info, startAdornment = _a.startAdornment;
    var handleMinChange = function (ev) {
        var min = ev.target.value;
        handleChange({
            target: {
                name: name,
                value: __assign(__assign({}, value), { min: min }),
            },
        });
    };
    var handleMaxChange = function (ev) {
        var max = ev.target.value;
        handleChange({
            target: {
                name: name,
                value: __assign(__assign({}, value), { max: max }),
            },
        });
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        react_1.default.createElement(material_1.Box, { sx: sx.inputs },
            react_1.default.createElement(material_1.FormControl, { variant: "standard" },
                react_1.default.createElement(material_1.Input, { type: "number", onChange: handleMinChange, value: value === null || value === void 0 ? void 0 : value.min, startAdornment: startAdornment && (react_1.default.createElement(material_1.InputAdornment, { position: "start" },
                        react_1.default.createElement(material_1.Typography, { color: "textPrimary", variant: "body2" }, currency))) })),
            react_1.default.createElement(material_1.Box, { sx: sx.to },
                react_1.default.createElement(material_1.Typography, { variant: "body2" }, "to")),
            react_1.default.createElement(material_1.FormControl, { variant: "standard" },
                react_1.default.createElement(material_1.Input, { type: "number", value: value === null || value === void 0 ? void 0 : value.max, onChange: handleMaxChange, startAdornment: startAdornment && (react_1.default.createElement(material_1.InputAdornment, { sx: sx.inputAdornment, position: "start" }, startAdornment)) })))));
};
exports.default = NumberRangeInput;
var sx = {
    root: {
        width: '100%',
    },
    inputs: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    inputAdornment: {
        color: 'text.primary',
    },
    to: {
        mx: 2,
    },
};
