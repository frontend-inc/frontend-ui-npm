"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../../..");
var FilterKeywordsInput = function (props) {
    var label = props.label, value = props.value, handleChange = props.handleChange, handleSearch = props.handleSearch;
    return (react_1.default.createElement(material_1.Box, { sx: sx.inputField },
        label && (react_1.default.createElement(material_1.Box, { sx: sx.inputLabel },
            react_1.default.createElement(material_1.Typography, { variant: "subtitle2", color: "textSecondary" }, label))),
        react_1.default.createElement(material_1.Box, { sx: sx.inputKeywords },
            react_1.default.createElement(__1.SearchInput, { name: label, value: value, placeholder: "Keywords", handleChange: handleChange, handleSearch: handleSearch }))));
};
exports.default = FilterKeywordsInput;
var sx = {
    button: {
        mt: 2,
    },
    searchBar: {
        width: '100%',
    },
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
    inputKeywords: {
        width: '100%',
        mr: '30px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
};
