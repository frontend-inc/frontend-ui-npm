'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var Table = function (props) {
    var loading = props.loading, headers = props.headers, rows = props.rows, _a = props.enableSelect, enableSelect = _a === void 0 ? false : _a, _b = props.enableEdit, enableEdit = _b === void 0 ? false : _b, _c = props.enableDelete, enableDelete = _c === void 0 ? false : _c, handleClick = props.handleClick, handleEdit = props.handleEdit, handleEditSelected = props.handleEditSelected, handleDelete = props.handleDelete, handlePublish = props.handlePublish, handleUnpublish = props.handleUnpublish, secondaryActions = props.secondaryActions, query = props.query, handleClearQuery = props.handleClearQuery, handleQueryChange = props.handleQueryChange, handleSearch = props.handleSearch, handleKeywordSearch = props.handleKeywordSearch, handleSort = props.handleSort, _d = props.page, page = _d === void 0 ? 1 : _d, _e = props.perPage, perPage = _e === void 0 ? 10 : _e, numPages = props.numPages, totalCount = props.totalCount, handlePaginate = props.handlePaginate, _f = props.disableBorderRadius, disableBorderRadius = _f === void 0 ? false : _f, emptyIcon = props.emptyIcon, emptyTitle = props.emptyTitle, emptyDescription = props.emptyDescription;
    var handleKeywordChange = function (e) {
        handleQueryChange({
            target: {
                name: 'keywords',
                value: e.target.value,
            },
        });
    };
    var _g = (0, hooks_1.useSelected)(), selected = _g.selected, selectedIds = _g.selectedIds, setSelected = _g.setSelected, setSelectedIds = _g.setSelectedIds, handleSelect = _g.handleSelect;
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
    return (react_1.default.createElement(components_1.TableList, { loading: loading, disableBorderRadius: disableBorderRadius, query: query, toolbar: react_1.default.createElement(components_1.TableToolbar, { loading: loading, query: query, selected: selected, handleKeywordSearch: handleKeywordSearch, handleKeywordChange: handleKeywordChange, handleClearQuery: handleClearQuery, enableEdit: enableEdit, enableDelete: enableDelete, handleDelete: handleDelete, handleEdit: handleEditSelected, handlePublish: handlePublish, handleUnpublish: handleUnpublish, secondaryActions: secondaryActions, fields: headers, handleFilter: handleSearch, handleSearch: handleSearch, handleChange: handleQueryChange, handleClearFilters: handleClearQuery }), headers: headers, resources: rows, enableEdit: enableEdit, enableSelect: enableSelect, selected: selected, selectedIds: selectedIds, handleClick: handleClick, handleEdit: handleEdit, handleSelect: handleSelect, handleSort: handleSort, handleSelectAll: handleSelectAll, page: page, perPage: perPage, numPages: numPages, totalCount: totalCount, handlePaginate: handlePaginate, emptyIcon: emptyIcon, emptyTitle: emptyTitle, emptyDescription: emptyDescription }));
};
exports.default = Table;
