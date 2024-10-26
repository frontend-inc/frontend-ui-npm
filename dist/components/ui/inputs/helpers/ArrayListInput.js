'use client';
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
var core_1 = require("../../../core");
var lucide_react_1 = require("lucide-react");
var __1 = require("../../..");
var ArrayItemInput = function (props) {
    var index = props.index, _a = props.value, value = _a === void 0 ? '' : _a, handleChange = props.handleChange, handleRemove = props.handleRemove;
    var _b = (0, react_1.useState)(''), _value = _b[0], setValue = _b[1];
    var handleInputChange = function (ev) {
        var _a = ev.target.value, value = _a === void 0 ? '' : _a;
        setValue(value);
        handleChange(value, index);
    };
    return (react_1.default.createElement("div", { className: "flex flex-row gap-2 items-center" },
        react_1.default.createElement(__1.TextInput, { name: "value", value: value, placeholder: "Enter...", 
            //@ts-ignore
            handleChange: handleInputChange }),
        react_1.default.createElement("div", null,
            react_1.default.createElement(core_1.IconButton, { onClick: function () { return handleRemove(index); } },
                react_1.default.createElement(lucide_react_1.X, null)))));
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
    return (react_1.default.createElement("div", { className: "flex flex-col gap-2" },
        label && (react_1.default.createElement(core_1.Typography, { variant: "caption", className: "text-muted-foreground" }, label)),
        Array.isArray(values) &&
            (values === null || values === void 0 ? void 0 : values.map(function (value, index) { return (react_1.default.createElement(ArrayItemInput, { key: index, index: index, value: value, handleChange: handleInputChange, handleRemove: handleRemove })); })),
        react_1.default.createElement("div", null,
            react_1.default.createElement(core_1.Button, { color: "secondary", onClick: handleAddClick, startIcon: react_1.default.createElement(lucide_react_1.Plus, { className: "w-5 h-5 text-foreground" }) }, "Add"))));
};
exports.default = ArrayListInput;
