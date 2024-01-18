"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var Table = function (props) {
    var _a = (0, react_1.useState)(false), showFilters = _a[0], setShowFilters = _a[1];
    var loading = props.loading, _b = props.enableBorder, enableBorder = _b === void 0 ? true : _b, fields = props.fields, rows = props.rows, _c = props.enableSelect, enableSelect = _c === void 0 ? false : _c, _d = props.enableEdit, enableEdit = _d === void 0 ? false : _d, _e = props.enableDelete, enableDelete = _e === void 0 ? false : _e, handleClick = props.handleClick, handleEdit = props.handleEdit, handleEditSelected = props.handleEditSelected, handleDelete = props.handleDelete, handlePublish = props.handlePublish, handleUnpublish = props.handleUnpublish, secondaryActions = props.secondaryActions, query = props.query, handleClearQuery = props.handleClearQuery, handleQueryChange = props.handleQueryChange, handleSearch = props.handleSearch, handleKeywordSearch = props.handleKeywordSearch, handleSort = props.handleSort, _f = props.page, page = _f === void 0 ? 1 : _f, _g = props.numPages, numPages = _g === void 0 ? 1 : _g, _h = props.totalCount, totalCount = _h === void 0 ? 0 : _h, handlePaginate = props.handlePaginate, _j = props.styles, styles = _j === void 0 ? {} : _j;
    var handleKeywordChange = function (e) {
        handleQueryChange({
            target: {
                name: 'keywords',
                value: e.target.value,
            },
        });
    };
    var _k = (0, hooks_1.useSelected)(), selected = _k.selected, selectedIds = _k.selectedIds, setSelected = _k.setSelected, setSelectedIds = _k.setSelectedIds, handleSelect = _k.handleSelect;
    var _l = (0, react_1.useState)(null), anchorEl = _l[0], setAnchorEl = _l[1];
    var handleFilterClick = function (ev) {
        setAnchorEl(ev.currentTarget);
        setShowFilters(true);
    };
    var handleSelectAll = function () {
        if ((selected === null || selected === void 0 ? void 0 : selected.length) === (rows === null || rows === void 0 ? void 0 : rows.length)) {
            setSelected([]);
            setSelectedIds([]);
        }
        else {
            setSelected(rows);
            setSelectedIds(rows.map(function (r) { return r.id; }));
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(components_1.TableToolbar, { loading: loading, query: query, selected: selected, handleKeywordSearch: handleKeywordSearch, handleKeywordChange: handleKeywordChange, handleFilter: handleFilterClick, handleClearQuery: handleClearQuery, enableEdit: enableEdit, enableDelete: enableDelete, handleDelete: handleDelete, handleEdit: handleEditSelected, handlePublish: handlePublish, handleUnpublish: handleUnpublish, secondaryActions: secondaryActions }),
        react_1.default.createElement(components_1.TableContainer, { styles: styles },
            react_1.default.createElement(components_1.TableHeaders, { enableEdit: enableEdit, enableSelect: enableSelect, fields: fields, sortBy: query === null || query === void 0 ? void 0 : query.sort_by, sortDirection: query === null || query === void 0 ? void 0 : query.sort_direction, checked: (selected === null || selected === void 0 ? void 0 : selected.length) > 0 && (selected === null || selected === void 0 ? void 0 : selected.length) === (rows === null || rows === void 0 ? void 0 : rows.length), handleSort: handleSort, handleSelectAll: handleSelectAll }),
            react_1.default.createElement(material_1.TableBody, null, rows === null || rows === void 0 ? void 0 : rows.map(function (row) { return (react_1.default.createElement(components_1.TableRow, { key: row === null || row === void 0 ? void 0 : row.id, row: row, fields: fields, selectedIds: selectedIds, enableSelect: enableSelect, enableEdit: enableEdit, handleClick: handleClick, handleEdit: handleEdit, handleSelect: handleSelect })); }))),
        react_1.default.createElement(components_1.Pagination, { page: page, numPages: numPages, totalCount: totalCount, loading: loading, handlePaginate: handlePaginate }),
        react_1.default.createElement(components_1.FilterPopup, { open: showFilters, anchorEl: anchorEl, query: query, handleClose: function () { return setShowFilters(false); }, fields: fields, handleSearch: handleSearch, handleChange: handleQueryChange, handleClearFilters: handleClearQuery })));
};
exports.default = Table;
var sx = {
    root: {
        bgcolor: 'background.paper',
        borderRadius: function (theme) { return theme.shape.borderRadius; },
        border: '1px solid',
        borderColor: 'divider',
    },
};
