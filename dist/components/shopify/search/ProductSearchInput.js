"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var ProductSearchInput = function (props) {
    var value = props.value, handleChange = props.handleChange, handleSearch = props.handleSearch, _a = props.placeholder, placeholder = _a === void 0 ? "Enter keywords..." : _a;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Input, { fullWidth: true, name: "keywords", value: value, onChange: handleChange, disableUnderline: true, autoComplete: "off", placeholder: placeholder, endAdornment: react_1.default.createElement(material_1.InputAdornment, { position: "end" },
                react_1.default.createElement(material_1.Button, { sx: sx.button, onClick: function () { return handleSearch(value); } }, "Search")) })));
};
exports.default = ProductSearchInput;
var sx = {
    root: {
        display: "flex",
        alignItems: "center",
        ml: "auto",
        flex: {
            sm: "1 1 auto",
            md: "auto",
        },
        borderBottom: "1px solid",
        borderColor: "primary.main",
    },
    icon: {
        px: 1,
        height: "100%",
        display: "flex",
        alignItems: "center",
    },
    button: {
        px: 2,
        minWidth: "60px",
        borderRadius: "4px",
    },
};
