"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var ResourceList = function (props) {
    var _a = props || {}, resources = _a.resources, page = _a.page, numPages = _a.numPages, enableBorder = _a.enableBorder, enableEdit = _a.enableEdit, enableDelete = _a.enableDelete, handleClick = _a.handleClick, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete, handleLoadMore = _a.handleLoadMore, _b = _a.component, Component = _b === void 0 ? components_1.Resource : _b;
    return (react_1.default.createElement(material_1.Stack, { spacing: 2, sx: sx.fullWidth },
        react_1.default.createElement(material_1.List, null, resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) { return (react_1.default.createElement(Component, { key: index, enableBorder: enableBorder, resource: resource, handleClick: handleClick ? function () { return handleClick(resource); } : undefined, handleEdit: enableEdit ? function () { return handleEdit(resource); } : undefined, handleDelete: enableDelete ? function () { return handleDelete(resource); } : undefined })); })),
        react_1.default.createElement(components_1.LoadMore, { page: page, numPages: numPages, loadMore: handleLoadMore })));
};
exports.default = ResourceList;
var sx = {
    fullWidth: {
        width: '100%'
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
            md: '1fr 1fr 1fr',
            xs: '1fr',
        },
        gap: '16px',
    },
};
