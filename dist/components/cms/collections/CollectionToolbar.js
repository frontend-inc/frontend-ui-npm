"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var CollectionToolbar = function (props) {
    var handleNull = function () { return null; };
    var _a = props.query, query = _a === void 0 ? {} : _a, activeFilters = props.activeFilters, _b = props.enableCreate, enableCreate = _b === void 0 ? false : _b, _c = props.enableSearch, enableSearch = _c === void 0 ? false : _c, _d = props.enableFilters, enableFilters = _d === void 0 ? false : _d, _e = props.enableSorting, enableSorting = _e === void 0 ? false : _e, _f = props.filterOptions, filterOptions = _f === void 0 ? [] : _f, _g = props.sortOptions, sortOptions = _g === void 0 ? [] : _g, _h = props.handleAdd, handleAdd = _h === void 0 ? handleNull : _h, handleFilter = props.handleFilter, handleClearFilters = props.handleClearFilters, keywords = props.keywords, handleKeywordChange = props.handleKeywordChange, handleSortBy = props.handleSortBy, handleSortDirection = props.handleSortDirection, handleSearch = props.handleSearch;
    if (!enableSearch && !enableFilters && !enableSorting && !enableCreate) {
        return null;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        enableSearch && (react_1.default.createElement(material_1.Box, { sx: sx.searchBar },
            react_1.default.createElement(components_1.SearchInput, { value: keywords, handleChange: handleKeywordChange, handleSearch: handleSearch }))),
        react_1.default.createElement(material_1.Stack, { justifyContent: 'space-between', direction: { sm: 'row', xs: 'column' }, spacing: 1 },
            react_1.default.createElement(material_1.Stack, { spacing: 1, direction: { xs: 'column', sm: 'row' } },
                enableFilters && (react_1.default.createElement(material_1.Box, null,
                    react_1.default.createElement(components_1.FilterButton, { filters: activeFilters, handleFilter: handleFilter, handleClear: handleClearFilters, filterOptions: filterOptions }))),
                enableSorting && (react_1.default.createElement(components_1.SortButton, { sortBy: (query === null || query === void 0 ? void 0 : query.sort_by) || 'id', sortDirection: (query === null || query === void 0 ? void 0 : query.sort_direction) || 'desc', sortOptions: sortOptions, handleSortBy: handleSortBy, handleSortDirection: handleSortDirection }))),
            enableCreate && (react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(material_1.Button, { sx: sx.button, color: "secondary", variant: "contained", onClick: handleAdd, startIcon: react_1.default.createElement(components_1.Icon, { name: "Plus", size: 20 }) }, "Add"))))));
};
exports.default = CollectionToolbar;
var sx = {
    root: {
        width: '100%',
    },
    button: {
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
    toolbar: {
        borderTop: '1px solid',
        borderColor: 'divider',
    },
    toolbarActions: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: {
            xs: 'column',
            sm: 'row',
        }
    },
    loading: {
        opacity: 0.7,
    },
    circularProgress: {
        color: 'primary.main',
    },
    searchBar: {
        width: '100%'
    },
};
