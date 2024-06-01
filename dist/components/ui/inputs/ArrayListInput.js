"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var lucide_react_1 = require("lucide-react");
var components_1 = require("../../../components");
var ArrayItemInput = function (props) {
    var index = props.index, _a = props.value, value = _a === void 0 ? '' : _a, handleChange = props.handleChange, handleRemove = props.handleRemove;
    var _b = (0, react_1.useState)(''), _value = _b[0], setValue = _b[1];
    var handleInputChange = function (ev) {
        var _a = ev.target.value, value = _a === void 0 ? '' : _a;
        setValue(value);
        handleChange(value, index);
    };
    return (react_1.default.createElement(material_1.Stack, { spacing: 0.5, direction: "row", sx: sx.root },
        react_1.default.createElement(components_1.TextInput, { name: "value", value: value, placeholder: "Enter...", 
            //@ts-ignore
            handleChange: handleInputChange }),
        react_1.default.createElement(material_1.IconButton, { size: "small", onClick: function () { return handleRemove(index); } },
            react_1.default.createElement(lucide_react_1.X, { size: 20 }))));
};
var ArrayListInput = function (props) {
    var name = props.name, label = props.label, _a = props.value, values = _a === void 0 ? [] : _a, handleChange = props.handleChange;
    var handleAddClick = function () {
        var newValues = __spreadArray(__spreadArray([], values, true), [''], false);
        handleChange({
            target: {
                name: name,
                value: newValues,
            },
        });
    };
    var handleRemove = function (index) {
        var newValues = __spreadArray([], values, true);
        newValues = newValues.filter(function (_, i) { return i !== index; });
        handleChange({
            target: {
                name: name,
                value: newValues,
            },
        });
    };
    var handleInputChange = function (value, index) {
        var newValues = __spreadArray([], values, true);
        newValues[index] = value;
        handleChange({
            target: {
                name: name,
                value: newValues,
            },
        });
    };
    return (react_1.default.createElement(material_1.Stack, { spacing: 0.5, sx: sx.root },
        label && (react_1.default.createElement(material_1.Typography, { variant: "caption", color: "text.secondary" }, label)),
        Array.isArray(values) && (values === null || values === void 0 ? void 0 : values.map(function (value, index) { return (react_1.default.createElement(ArrayItemInput, { key: index, index: index, value: value, handleChange: handleInputChange, handleRemove: handleRemove })); })),
        react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(material_1.Button, { variant: "contained", color: "secondary", onClick: handleAddClick, startIcon: react_1.default.createElement(lucide_react_1.Plus, { size: 20 }) }, "Add"))));
};
exports.default = ArrayListInput;
var sx = {
    root: {},
};
