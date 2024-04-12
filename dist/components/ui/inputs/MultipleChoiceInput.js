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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var MultipleChoiceInput = function (props) {
    var label = props.label, _a = props.direction, direction = _a === void 0 ? 'column' : _a, name = props.name, value = props.value, options = props.options, _b = props.buttonText, buttonText = _b === void 0 ? 'Submit' : _b, handleChange = props.handleChange, _c = props.multiSelect, multiSelect = _c === void 0 ? true : _c;
    var _d = (0, react_1.useState)([]), selected = _d[0], setSelected = _d[1];
    var handleSelect = function (item) {
        if (selected.find(function (i) { return i === item; })) {
            setSelected(selected.filter(function (i) { return i != item; }));
        }
        else {
            if (multiSelect) {
                setSelected(selected.concat(item));
            }
            else {
                setSelected([item]);
            }
        }
    };
    var handleSubmit = function () {
        handleChange({
            target: {
                name: name,
                value: multiSelect ?
                    selected :
                    selected[0]
            }
        });
    };
    return (react_1.default.createElement(material_1.FormControl, { size: "small", fullWidth: true, variant: "outlined" },
        react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.stack), (direction == 'row' && sx.stackVertical)), direction: direction, spacing: 1 },
            react_1.default.createElement(material_1.Typography, { variant: "caption", sx: sx.label, gutterBottom: true }, label),
            react_1.default.createElement(material_1.List, { disablePadding: true, sx: sx.list }, options === null || options === void 0 ? void 0 : options.map(function (option, idx) { return (react_1.default.createElement(components_1.SelectableListItem, { key: idx, title: option.label, icon: option.icon, image: option.image, selected: selected.find(function (i) { return i === option.value; }), handleClick: function () { return handleSelect(option === null || option === void 0 ? void 0 : option.value); } })); })),
            react_1.default.createElement(material_1.Button, { onClick: handleSubmit, variant: "contained", color: "primary" }, buttonText))));
};
exports.default = MultipleChoiceInput;
var sx = {
    list: {
        width: '100%'
    },
    label: {
        mb: 0,
        minWidth: '100px',
        color: 'text.secondary',
    },
    stack: {
        width: '100%',
        alignItems: 'flex-start',
    },
    stackVertical: {
        alignItems: 'center',
    },
};
