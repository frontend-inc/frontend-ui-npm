'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("../../../../constants/index");
var lucide_react_1 = require("lucide-react");
var components_1 = require("../../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var core_1 = require("../../../core");
var FilternameWrapper = function (_a) {
    var _b;
    var index = _a.index, filter = _a.filter, fieldOptions = _a.fieldOptions, handleChange = _a.handleChange, handleRemove = _a.handleRemove;
    var name;
    var operatorOptions = [];
    if (filter.name) {
        name = fieldOptions.find(function (f) { return f.value == filter.name; });
        //@ts-ignore
        operatorOptions = index_1.FILTER_OPERATORS[(name === null || name === void 0 ? void 0 : name.db_type) || 'integer'];
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(frontend_shadcn_1.Separator, null),
        react_1.default.createElement("div", { className: "flex flex-row justify-start items-start" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
                    react_1.default.createElement("div", { className: "flex flex-row space-x-2" },
                        react_1.default.createElement(components_1.SelectInput, { name: "name", options: fieldOptions, placeholder: "name", value: (filter === null || filter === void 0 ? void 0 : filter.name) || '', handleChange: function (ev) { return handleChange(ev, index); } }),
                        (filter === null || filter === void 0 ? void 0 : filter.name) && (react_1.default.createElement(components_1.SelectInput, { name: "operator", placeholder: "\u2026", options: operatorOptions, value: (filter === null || filter === void 0 ? void 0 : filter.operator) || '', handleChange: function (ev) { return handleChange(ev, index); } }))),
                    index_1.BOOLEAN_FIELDS.includes(name === null || name === void 0 ? void 0 : name.db_type) && (react_1.default.createElement(components_1.SelectInput, { name: "value", placeholder: "true or false", options: index_1.BOOLEAN_OPTIONS, value: (filter === null || filter === void 0 ? void 0 : filter.value) || '', handleChange: function (ev) { return handleChange(ev, index); } })),
                    index_1.DATE_FIELDS.includes(name === null || name === void 0 ? void 0 : name.variant) && (react_1.default.createElement(react_1.default.Fragment, null, ['gte', 'lte'].includes(filter === null || filter === void 0 ? void 0 : filter.operator) ? (react_1.default.createElement(components_1.SelectInput, { name: "value", placeholder: "date since", options: index_1.DATE_RANGE_OPTIONS, value: (filter === null || filter === void 0 ? void 0 : filter.value) || '', handleChange: function (ev) { return handleChange(ev, index); } })) : (react_1.default.createElement(components_1.TextInput, { type: "date", name: "value", placeholder: "value", value: (filter === null || filter === void 0 ? void 0 : filter.value) || '', handleChange: function (ev) { return handleChange(ev, index); } })))),
                    index_1.NUMBER_FIELDS.includes(name === null || name === void 0 ? void 0 : name.variant) && (react_1.default.createElement(react_1.default.Fragment, null, ['in', 'nin'].includes(filter === null || filter === void 0 ? void 0 : filter.operator) ? (react_1.default.createElement(components_1.ArrayInput, { name: "value", placeholder: "values", value: Array.isArray(filter === null || filter === void 0 ? void 0 : filter.value) ? filter === null || filter === void 0 ? void 0 : filter.value : [], handleChange: function (ev) { return handleChange(ev, index); } })) : (react_1.default.createElement(components_1.TextInput, { type: "number", name: "value", placeholder: "value", value: (filter === null || filter === void 0 ? void 0 : filter.value) || '', handleChange: function (ev) { return handleChange(ev, index); } })))),
                    index_1.STRING_FIELDS.includes(name === null || name === void 0 ? void 0 : name.variant) && (react_1.default.createElement(components_1.TextInput, { name: "value", placeholder: "value", value: (filter === null || filter === void 0 ? void 0 : filter.value) || '', handleChange: function (ev) { return handleChange(ev, index); } })),
                    index_1.SELECT_FIELDS.includes(name === null || name === void 0 ? void 0 : name.variant) && (react_1.default.createElement(components_1.Autosuggest, { name: "value", placeholder: "Select...", options: (_b = name === null || name === void 0 ? void 0 : name.options) === null || _b === void 0 ? void 0 : _b.map(function (opt) { return ({
                            label: opt,
                            value: opt,
                        }); }), value: (filter === null || filter === void 0 ? void 0 : filter.value) || '', handleChange: function (ev) { return handleChange(ev, index); } })))),
            react_1.default.createElement("div", { className: "mt-1 pr-2" },
                react_1.default.createElement(core_1.IconButton, { onClick: function () { return handleRemove(index); } },
                    react_1.default.createElement(lucide_react_1.X, { className: "w-5 h-5 text-foreground" }))))));
};
exports.default = FilternameWrapper;
