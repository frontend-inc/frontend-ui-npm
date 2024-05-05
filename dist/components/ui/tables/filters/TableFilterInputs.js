"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var TableFilterInput_1 = __importDefault(require("./TableFilterInput"));
var FilterInputs = function (props) {
    var filters = props.filters, fieldOptions = props.fieldOptions, handleChange = props.handleChange, handleRemove = props.handleRemove;
    return (react_1.default.createElement(react_1.default.Fragment, null, Array.isArray(filters) &&
        (filters === null || filters === void 0 ? void 0 : filters.map(function (filter, index) { return (react_1.default.createElement(material_1.Box, { key: index },
            react_1.default.createElement(TableFilterInput_1.default, { index: index, filter: filter, fieldOptions: fieldOptions, handleChange: handleChange, handleRemove: handleRemove }))); }))));
};
exports.default = FilterInputs;
