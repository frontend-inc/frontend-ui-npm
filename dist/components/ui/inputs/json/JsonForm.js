"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var JsonForm = function (props) {
    var item = props.item, handleChange = props.handleChange, fields = props.fields, _a = props.direction, direction = _a === void 0 ? 'column' : _a, handleRemove = props.handleRemove;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, sx: sx.root }, fields.map(function (field, i) { return (react_1.default.createElement(react_1.default.Fragment, null,
        (field === null || field === void 0 ? void 0 : field.type) === 'boolean' && (react_1.default.createElement(components_1.BooleanInput, { label: field.label, name: field.name, value: item[field.name], handleChange: handleChange })),
        (field === null || field === void 0 ? void 0 : field.type) === 'string' && (react_1.default.createElement(components_1.TextInput, { label: field.label, direction: direction, name: field.name, value: item[field.name], placeholder: field.placeholder, 
            //@ts-ignore
            handleChange: handleChange })),
        (field === null || field === void 0 ? void 0 : field.type) === 'array' && (react_1.default.createElement(components_1.ArrayInput, { label: field.label, name: field.name, value: item[field.name] || [], placeholder: field.placeholder, direction: direction, 
            //@ts-ignore
            handleChange: handleChange })),
        (field === null || field === void 0 ? void 0 : field.type) === 'text' && (react_1.default.createElement(components_1.TextInput, { multiline: true, rows: 6, label: field.label, direction: direction, name: field.name, value: item[field.name], placeholder: field.placeholder, 
            //@ts-ignore
            handleChange: handleChange })),
        (field === null || field === void 0 ? void 0 : field.type) === 'number' && (react_1.default.createElement(components_1.TextInput, { type: "number", name: field.name, label: field.label, direction: direction, value: item[field.name], placeholder: field.placeholder, 
            //@ts-ignore
            handleChange: handleChange })),
        (field === null || field === void 0 ? void 0 : field.type) === 'select' && (react_1.default.createElement(components_1.Autosuggest, { label: field.label, direction: direction, name: field.name, value: item[field.name], placeholder: field.placeholder, handleChange: handleChange, options: field.options })),
        (field === null || field === void 0 ? void 0 : field.type) === 'rating' && (react_1.default.createElement(components_1.RatingInput, { label: field.label, direction: direction, name: field.name, value: item[field.name], placeholder: field.placeholder, 
            //@ts-ignore
            handleChange: handleChange })))); })));
};
exports.default = JsonForm;
var sx = {
    root: {
        width: '100%',
    },
    input: {
        flexDirection: 'column',
    },
    listItemIcon: {
        minWidth: 32,
        alignItems: 'flex-start',
    },
};
