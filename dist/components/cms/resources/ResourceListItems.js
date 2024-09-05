"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var ResourceListItems = function (props) {
    var _a = props || {}, page = _a.page, _b = _a.grid, grid = _b === void 0 ? false : _b, numPages = _a.numPages, handlePaginate = _a.handlePaginate, resources = _a.resources, renderItem = _a.renderItem;
    return (react_1.default.createElement(material_1.Stack, { spacing: 2, sx: sx.fullWidth },
        !grid ? (react_1.default.createElement(material_1.List, null, resources === null || resources === void 0 ? void 0 : resources.map(function (resource) { return renderItem(resource, props); }))) : (react_1.default.createElement(material_1.Box, { sx: sx.grid }, resources === null || resources === void 0 ? void 0 : resources.map(function (resource) { return renderItem(resource, props); }))),
        react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, handlePaginate: function () { return handlePaginate(page + 1); } })));
};
exports.default = ResourceListItems;
var sx = {
    fullWidth: {
        width: '100%',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    listDense: {
        gap: '8px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            xl: '1fr 1fr 1fr 1fr 1fr',
            lg: '1fr 1fr 1fr 1fr',
            md: '1fr 1fr 1fr',
            sm: '1fr 1fr',
            xs: '1fr',
        },
        gap: '16px',
    },
};
