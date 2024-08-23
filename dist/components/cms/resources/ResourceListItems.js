"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var ResourceList = function (props) {
    var _a = props || {}, resources = _a.resources, page = _a.page, numPages = _a.numPages, handleLoadMore = _a.handleLoadMore, renderItem = _a.renderItem;
    return (react_1.default.createElement(material_1.Stack, { spacing: 2, sx: sx.fullWidth },
        react_1.default.createElement(material_1.List, null, resources === null || resources === void 0 ? void 0 : resources.map(function (resource) { return renderItem(resource, props); })),
        react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, loadMore: handleLoadMore })));
};
exports.default = ResourceList;
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
            md: '1fr 1fr 1fr',
            xs: '1fr',
        },
        gap: '16px',
    },
};
