"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../../..");
var SORT_DIRECTIONS = [
    { label: 'descreasing', value: 'asc' },
    { label: 'increasing', value: 'desc' },
];
var TableFilterSortInput = function (props) {
    var label = props.label, _a = props.sortBy, sortBy = _a === void 0 ? '' : _a, _b = props.sortDirection, sortDirection = _b === void 0 ? '' : _b, fieldOptions = props.fieldOptions, handleChange = props.handleChange;
    return (react_1.default.createElement(material_1.Box, { sx: sx.inputField },
        label && (react_1.default.createElement(material_1.Box, { sx: sx.inputLabel },
            react_1.default.createElement(material_1.Typography, { variant: "subtitle2", color: "textSecondary" }, label))),
        react_1.default.createElement(material_1.Box, { sx: sx.inputSortBy },
            react_1.default.createElement(__1.Autosuggest, { name: 'sort_by', options: fieldOptions, placeholder: "Sort field", value: sortBy, handleChange: handleChange })),
        react_1.default.createElement(material_1.Box, { sx: sx.inputSortDirection },
            react_1.default.createElement(__1.Autosuggest, { name: 'sort_direction', options: SORT_DIRECTIONS, placeholder: "Sort direction", value: sortDirection || '', handleChange: handleChange }))));
};
exports.default = TableFilterSortInput;
var sx = {
    inputField: {
        py: 0.5,
        px: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    inputLabel: {
        minWidth: '100px',
    },
    inputSortBy: {
        minWidth: '200px',
        mr: 1,
    },
    inputSortDirection: {
        width: '100%',
        mr: 3,
    },
};
