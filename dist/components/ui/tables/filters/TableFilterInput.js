"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("../../../../constants/index");
var material_1 = require("@mui/material");
var __1 = require("../../..");
var FilterFieldWrapper = function (props) {
    var _a;
    var index = props.index, filter = props.filter, fieldOptions = props.fieldOptions, handleChange = props.handleChange, handleRemove = props.handleRemove;
    var field;
    var operatorOptions = [];
    if (filter.field) {
        field = fieldOptions.find(function (f) { return f.value == filter.field; });
        operatorOptions = index_1.FILTER_OPERATORS[(field === null || field === void 0 ? void 0 : field.db_type) || 'integer'];
    }
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Box, { sx: sx.inputLabel },
            react_1.default.createElement(material_1.Typography, { variant: "subtitle2", color: "textSecondary", sx: sx.inputWhere }, "where")),
        react_1.default.createElement(material_1.Box, { sx: sx.inputFilter },
            react_1.default.createElement(__1.Autosuggest, { name: 'where', options: index_1.WHERE_OPTIONS, placeholder: "where", value: (filter === null || filter === void 0 ? void 0 : filter.where) || 'AND', handleChange: function (ev) { return handleChange(ev, index); } })),
        react_1.default.createElement(material_1.Box, { sx: sx.inputFilter },
            react_1.default.createElement(__1.Autosuggest, { name: 'field', options: fieldOptions, placeholder: "field", value: (filter === null || filter === void 0 ? void 0 : filter.field) || '', handleChange: function (ev) { return handleChange(ev, index); } })),
        (filter === null || filter === void 0 ? void 0 : filter.field) && (react_1.default.createElement(material_1.Box, { sx: sx.inputOperator },
            react_1.default.createElement(__1.Autosuggest, { name: 'operator', placeholder: "\u2026", options: operatorOptions, value: (filter === null || filter === void 0 ? void 0 : filter.operator) || '', handleChange: function (ev) { return handleChange(ev, index); } }))),
        react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(material_1.IconButton, { size: "small", onClick: function () { return handleRemove(index); } },
                react_1.default.createElement(__1.Icon, { name: "X", size: 20 }))),
        react_1.default.createElement(material_1.Box, { sx: sx.inputSpacer }),
        react_1.default.createElement(material_1.Box, { sx: sx.inputValue },
            index_1.BOOLEAN_FIELDS.includes(field === null || field === void 0 ? void 0 : field.db_type) && (react_1.default.createElement(__1.Autosuggest, { name: 'value', placeholder: "true or false", options: index_1.BOOLEAN_OPTIONS, value: (filter === null || filter === void 0 ? void 0 : filter.value) || '', handleChange: function (ev) { return handleChange(ev, index); } })),
            index_1.DATE_FIELDS.includes(field === null || field === void 0 ? void 0 : field.variant) && (react_1.default.createElement(react_1.default.Fragment, null, ['gte', 'lte'].includes(filter === null || filter === void 0 ? void 0 : filter.operator) ? (react_1.default.createElement(__1.Autosuggest, { name: 'value', placeholder: "date since", options: index_1.DATE_RANGE_OPTIONS, value: (filter === null || filter === void 0 ? void 0 : filter.value) || '', handleChange: function (ev) { return handleChange(ev, index); } })) : (react_1.default.createElement(__1.TextInput, { type: 'date', name: 'value', placeholder: "value", value: (filter === null || filter === void 0 ? void 0 : filter.value) || '', handleChange: function (ev) { return handleChange(ev, index); } })))),
            index_1.NUMBER_FIELDS.includes(field === null || field === void 0 ? void 0 : field.variant) && (react_1.default.createElement(react_1.default.Fragment, null, ['in', 'nin'].includes(filter === null || filter === void 0 ? void 0 : filter.operator) ? (react_1.default.createElement(__1.ArrayInput, { name: 'value', placeholder: "values", value: Array.isArray(filter === null || filter === void 0 ? void 0 : filter.value) ? filter === null || filter === void 0 ? void 0 : filter.value : [], handleChange: function (ev) { return handleChange(ev, index); } })) : (react_1.default.createElement(__1.TextInput, { type: "number", name: 'value', placeholder: "value", value: (filter === null || filter === void 0 ? void 0 : filter.value) || '', handleChange: function (ev) { return handleChange(ev, index); } })))),
            index_1.STRING_FIELDS.includes(field === null || field === void 0 ? void 0 : field.variant) && (react_1.default.createElement(__1.TextInput, { name: 'value', placeholder: "value", value: (filter === null || filter === void 0 ? void 0 : filter.value) || '', handleChange: function (ev) { return handleChange(ev, index); } })),
            index_1.SELECT_FIELDS.includes(field === null || field === void 0 ? void 0 : field.variant) && (react_1.default.createElement(__1.Autosuggest, { name: 'value', placeholder: "Select...", options: (_a = field === null || field === void 0 ? void 0 : field.options) === null || _a === void 0 ? void 0 : _a.map(function (opt) { return ({
                    label: opt,
                    value: opt,
                }); }), value: (filter === null || filter === void 0 ? void 0 : filter.value) || '', handleChange: function (ev) { return handleChange(ev, index); } })))));
};
exports.default = FilterFieldWrapper;
var sx = {
    root: {
        display: 'grid',
        gridTemplateColumns: '0.5fr 1fr 1fr 1fr 0.5fr',
        gap: '0px',
        borderTop: '1px dotted',
        borderColor: 'divider',
        mt: 1,
        pt: 1,
    },
    inputField: {
        py: 0.5,
        px: 0,
        display: 'grid',
        gridColumn: 'span 1',
    },
    inputLabel: {
        gridColumn: 'span 1',
        minWidth: '100px',
        mb: 1,
    },
    inputWhere: {
        width: '70px',
        gridColumn: 'span 1',
        textTranform: 'lowercase',
    },
    inputFilter: {
        gridColumn: 'span 1',
        minWidth: '100px',
        mr: '5px',
    },
    inputOperator: {
        gridColumn: 'span 1',
        minWidth: '100px',
    },
    inputSpacer: {
        gridColumn: 'span 1',
    },
    inputValue: {
        my: 1,
        gridColumn: 'span 3',
        width: '100%',
    },
    icon: {
        height: '20px',
        width: '20px',
        color: 'icon',
    },
};
