"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var FULL_WIDTH_VARIANTS = ['text', 'image', 'url'];
var Details = function (props) {
    var resource = props.resource, displayFields = props.displayFields, _a = props.enableBorder, enableBorder = _a === void 0 ? false : _a;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 1 }, document &&
            (displayFields === null || displayFields === void 0 ? void 0 : displayFields.map(function (field, i) { return (react_1.default.createElement(material_1.Grid, { key: i, item: true, xs: 12, sm: FULL_WIDTH_VARIANTS.includes(field === null || field === void 0 ? void 0 : field.variant) ? 12 : 6 },
                react_1.default.createElement(__1.Field, { field: field, enableBorder: enableBorder, resource: resource }))); })))));
};
exports.default = Details;
var sx = {
    root: {
        width: '100%',
    },
    itemFullWidth: {
        gridColumn: 'span 3',
    },
};
