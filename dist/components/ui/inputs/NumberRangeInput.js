"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var NumberRangeInput = function (props) {
    var _a = props || {}, _b = _a.value, value = _b === void 0 ? [0, 100] : _b, name = _a.name, _c = _a.label, label = _c === void 0 ? 'TEST' : _c, handleChange = _a.handleChange, _d = _a.currency, currency = _d === void 0 ? '' : _d;
    var handleMinChange = function (ev) {
        var min = ev.target.value;
        handleChange({
            target: {
                name: name,
                value: [min, value[1]],
            },
        });
    };
    var handleMaxChange = function (ev) {
        var max = ev.target.value;
        handleChange({
            target: {
                name: name,
                value: [value[0], max],
            },
        });
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        label && (react_1.default.createElement(material_1.Typography, { variant: "caption", color: "textSecondary" }, label)),
        react_1.default.createElement(material_1.Box, { sx: sx.inputs },
            react_1.default.createElement(material_1.FormControl, { variant: "standard" },
                react_1.default.createElement(material_1.Input, { type: "number", onChange: handleMinChange, value: value[0], startAdornment: react_1.default.createElement(material_1.InputAdornment, { position: "start" },
                        react_1.default.createElement(material_1.Typography, { color: "textPrimary", variant: "body2" }, currency)) })),
            react_1.default.createElement(material_1.Box, { sx: sx.to },
                react_1.default.createElement(material_1.Typography, { variant: "body2" }, "to")),
            react_1.default.createElement(material_1.FormControl, { variant: "standard" },
                react_1.default.createElement(material_1.Input, { type: "number", value: value[1], onChange: handleMaxChange, startAdornment: react_1.default.createElement(material_1.InputAdornment, { sx: sx.inputAdornment, position: "start" },
                        react_1.default.createElement(material_1.Typography, { color: "textPrimary", variant: "body2" }, currency)) })))));
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
