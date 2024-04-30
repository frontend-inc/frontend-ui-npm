"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var TableList = function (props) {
    var title = props.title, toolbar = props.toolbar, loading = props.loading, fields = props.fields, rows = props.rows, enableBorder = props.enableBorder, disableBorderRadius = props.disableBorderRadius, _a = props.enableSelect, enableSelect = _a === void 0 ? false : _a, _b = props.enableEdit, enableEdit = _b === void 0 ? false : _b, _c = props.enableDelete, enableDelete = _c === void 0 ? false : _c, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, query = props.query, selected = props.selected, selectedIds = props.selectedIds, handleSelect = props.handleSelect, handleSelectAll = props.handleSelectAll, handleSort = props.handleSort, handlePaginate = props.handlePaginate, page = props.page, perPage = props.perPage, numPages = props.numPages, numResults = props.numResults, totalCount = props.totalCount, _d = props.styles, styles = _d === void 0 ? {} : _d;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)), (disableBorderRadius && sx.disableBorderRadius)) },
        react_1.default.createElement(material_1.Box, { p: 1, sx: sx.toolbar },
            title && (react_1.default.createElement(material_1.Typography, { variant: "subtitle1", color: 'text.primary' }, title)),
            toolbar && toolbar),
        react_1.default.createElement(components_1.TableContainer, { styles: styles },
            react_1.default.createElement(components_1.TableHeaders, { enableEdit: enableEdit, enableSelect: enableSelect, enableDelete: enableDelete, fields: fields, sortBy: query === null || query === void 0 ? void 0 : query.sort_by, sortDirection: query === null || query === void 0 ? void 0 : query.sort_direction, checked: (selected === null || selected === void 0 ? void 0 : selected.length) > 0 && (selected === null || selected === void 0 ? void 0 : selected.length) === (rows === null || rows === void 0 ? void 0 : rows.length), handleSort: handleSort, handleSelectAll: handleSelectAll }),
            react_1.default.createElement(material_1.TableBody, null, rows === null || rows === void 0 ? void 0 : rows.map(function (row) { return (react_1.default.createElement(components_1.TableRow, { key: row === null || row === void 0 ? void 0 : row.id, row: row, fields: fields, selectedIds: selectedIds, enableSelect: enableSelect, enableEdit: enableEdit, enableDelete: enableDelete, handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete, handleSelect: handleSelect })); }))),
        react_1.default.createElement(components_1.Pagination, { page: page, perPage: perPage, numPages: numPages, totalCount: totalCount, numResults: numResults, loading: loading, handlePaginate: handlePaginate })));
};
exports.default = TableList;
var sx = {
    root: {
        overflow: 'hidden',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
    disableBorderRadius: {
        borderRadius: 0
    },
    toolbar: {
        minHeight: 40,
        width: "100%"
    }
};
