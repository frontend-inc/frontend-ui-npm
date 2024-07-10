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
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var Table = function (props) {
    var _a = (0, react_1.useState)(false), showFilters = _a[0], setShowFilters = _a[1];
    var loading = props.loading, fields = props.fields, rows = props.rows, _b = props.enableSelect, enableSelect = _b === void 0 ? false : _b, _c = props.enableEdit, enableEdit = _c === void 0 ? false : _c, _d = props.enableDelete, enableDelete = _d === void 0 ? false : _d, handleClick = props.handleClick, handleEdit = props.handleEdit, handleEditSelected = props.handleEditSelected, handleDelete = props.handleDelete, handlePublish = props.handlePublish, handleUnpublish = props.handleUnpublish, secondaryActions = props.secondaryActions, query = props.query, handleClearQuery = props.handleClearQuery, handleQueryChange = props.handleQueryChange, handleSearch = props.handleSearch, handleKeywordSearch = props.handleKeywordSearch, handleSort = props.handleSort, _e = props.page, page = _e === void 0 ? 1 : _e, _f = props.perPage, perPage = _f === void 0 ? 10 : _f, numPages = props.numPages, totalCount = props.totalCount, handlePaginate = props.handlePaginate, _g = props.disableBorderRadius, disableBorderRadius = _g === void 0 ? false : _g, _h = props.styles, styles = _h === void 0 ? {} : _h, emptyIcon = props.emptyIcon, emptyTitle = props.emptyTitle, emptyDescription = props.emptyDescription;
    var handleKeywordChange = function (e) {
        handleQueryChange({
            target: {
                name: 'keywords',
                value: e.target.value,
            },
        });
    };
    var _j = (0, hooks_1.useSelected)(), selected = _j.selected, selectedIds = _j.selectedIds, setSelected = _j.setSelected, setSelectedIds = _j.setSelectedIds, handleSelect = _j.handleSelect;
    var _k = (0, react_1.useState)(null), anchorEl = _k[0], setAnchorEl = _k[1];
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.TableList, { loading: loading, disableBorderRadius: disableBorderRadius, query: query, toolbar: react_1.default.createElement(components_1.TableToolbar, { loading: loading, query: query, selected: selected, handleKeywordSearch: handleKeywordSearch, handleKeywordChange: handleKeywordChange, handleFilter: handleFilterClick, handleClearQuery: handleClearQuery, enableEdit: enableEdit, enableDelete: enableDelete, handleDelete: handleDelete, handleEdit: handleEditSelected, handlePublish: handlePublish, handleUnpublish: handleUnpublish, secondaryActions: secondaryActions }), fields: fields, rows: rows, enableEdit: enableEdit, enableSelect: enableSelect, selected: selected, selectedIds: selectedIds, handleClick: handleClick, handleEdit: handleEdit, handleSelect: handleSelect, handleSort: handleSort, handleSelectAll: handleSelectAll, page: page, perPage: perPage, numPages: numPages, totalCount: totalCount, handlePaginate: handlePaginate, emptyIcon: emptyIcon, emptyTitle: emptyTitle, emptyDescription: emptyDescription, styles: styles }),
        react_1.default.createElement(components_1.TableFilterPopup, { open: showFilters, anchorEl: anchorEl, query: query, handleClose: function () { return setShowFilters(false); }, fields: fields, handleSearch: handleSearch, handleChange: handleQueryChange, handleClearFilters: handleClearQuery })));
};
exports.default = Table;
