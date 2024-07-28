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
    var title = props.title, toolbar = props.toolbar, loading = props.loading, fields = props.fields, rows = props.rows, disableBorderRadius = props.disableBorderRadius, _a = props.enableSelect, enableSelect = _a === void 0 ? false : _a, _b = props.enableEdit, enableEdit = _b === void 0 ? false : _b, _c = props.enableDelete, enableDelete = _c === void 0 ? false : _c, _d = props.enableShow, enableShow = _d === void 0 ? false : _d, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, handleShow = props.handleShow, query = props.query, selected = props.selected, selectedIds = props.selectedIds, handleSelect = props.handleSelect, handleSelectAll = props.handleSelectAll, handleSort = props.handleSort, handlePaginate = props.handlePaginate, page = props.page, perPage = props.perPage, numPages = props.numPages, totalCount = props.totalCount, _e = props.styles, styles = _e === void 0 ? {} : _e, _f = props.emptyIcon, emptyIcon = _f === void 0 ? 'Search' : _f, _g = props.emptyTitle, emptyTitle = _g === void 0 ? 'No results found' : _g, _h = props.emptyDescription, emptyDescription = _h === void 0 ? 'Try adjusting your search or filters' : _h;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (disableBorderRadius && sx.disableBorderRadius)) },
        (title || toolbar) && (react_1.default.createElement(material_1.Box, { p: 1, sx: sx.toolbar },
            title && (react_1.default.createElement(material_1.Typography, { variant: "subtitle1", color: "text.primary" }, title)),
            toolbar && toolbar)),
        react_1.default.createElement(components_1.TableContainer, { styles: styles },
            react_1.default.createElement(material_1.TableBody, null,
                react_1.default.createElement(components_1.TableHeaders, { enableEdit: enableEdit, enableSelect: enableSelect, enableDelete: enableDelete, enableShow: enableShow, fields: fields, sortBy: query === null || query === void 0 ? void 0 : query.sort_by, sortDirection: query === null || query === void 0 ? void 0 : query.sort_direction, checked: (selected === null || selected === void 0 ? void 0 : selected.length) > 0 && (selected === null || selected === void 0 ? void 0 : selected.length) === (rows === null || rows === void 0 ? void 0 : rows.length), handleSort: handleSort, handleSelectAll: handleSelectAll }), rows === null || rows === void 0 ? void 0 :
                rows.map(function (row) { return (react_1.default.createElement(components_1.TableRow, { key: row === null || row === void 0 ? void 0 : row.id, row: row, fields: fields, selectedIds: selectedIds, enableSelect: enableSelect, enableEdit: enableEdit, enableDelete: enableDelete, enableShow: enableShow, handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete, handleShow: handleShow, handleSelect: handleSelect })); }),
                !loading && (rows === null || rows === void 0 ? void 0 : rows.length) == 0 && (react_1.default.createElement(material_1.TableRow, null,
                    react_1.default.createElement(material_1.TableCell, { colSpan: (fields === null || fields === void 0 ? void 0 : fields.length) + 1 },
                        react_1.default.createElement(components_1.Placeholder, { icon: emptyIcon, title: emptyTitle, description: emptyDescription })))))),
        react_1.default.createElement(components_1.Pagination, { page: page, perPage: perPage, numPages: numPages, totalCount: totalCount, loading: loading, handlePaginate: handlePaginate })));
};
exports.default = TableList;
var sx = {
    root: {
        overflow: 'hidden',
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
    disableBorderRadius: {
        borderRadius: 0,
    },
    toolbar: {
        minHeight: 40,
        width: '100%',
    },
};
