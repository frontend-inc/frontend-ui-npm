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
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var DataHeader = function (props) {
    var url = props.url, _a = props.query, defaultQuery = _a === void 0 ? {} : _a, _b = props.filterOptions, filterOptions = _b === void 0 ? [] : _b, _c = props.sortOptions, sortOptions = _c === void 0 ? [] : _c, _d = props.enableCreate, enableCreate = _d === void 0 ? false : _d, _e = props.enableSearch, enableSearch = _e === void 0 ? false : _e, _f = props.enableFilters, enableFilters = _f === void 0 ? false : _f, _g = props.enableSorting, enableSorting = _g === void 0 ? false : _g, _h = props.buttonText, buttonText = _h === void 0 ? 'Add' : _h, secondaryAction = props.secondaryAction, _j = props.component, SearchComponent = _j === void 0 ? __1.SearchInput : _j, _k = props.slots, slots = _k === void 0 ? {
        search: {},
    } : _k;
    var _l = (0, hooks_1.useSearch)({
        url: url,
        query: defaultQuery,
    }), query = _l.query, keywords = _l.keywords, handleKeywordChange = _l.handleKeywordChange, handleSearch = _l.handleSearch, handleSortBy = _l.handleSortBy, handleSortDirection = _l.handleSortDirection, activeFilters = _l.activeFilters, handleFilter = _l.handleFilter, handleClearFilters = _l.handleClearFilters;
    var handleAdd = (0, hooks_1.useForms)().handleAdd;
    if (!enableSearch && !enableFilters && !enableSorting && !enableCreate) {
        return null;
    }
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, mb: 1 },
        react_1.default.createElement(material_1.Stack, { justifyContent: "space-between", direction: { sm: 'row', xs: 'column' }, spacing: 1 },
            react_1.default.createElement(material_1.Stack, { spacing: 1, direction: { xs: 'column', sm: 'row' }, alignItems: "center" },
                enableSearch && (react_1.default.createElement(SearchComponent, __assign({ value: keywords, handleChange: handleKeywordChange, handleSearch: handleSearch }, slots.search))),
                enableFilters && (react_1.default.createElement(material_1.Box, { sx: sx.buttonContainer },
                    react_1.default.createElement(__1.FilterButton, { filterOptions: filterOptions, filters: activeFilters, handleFilter: handleFilter, handleClear: handleClearFilters }))),
                enableSorting && (react_1.default.createElement(material_1.Box, { sx: sx.buttonContainer },
                    react_1.default.createElement(__1.SortButton, { sortOptions: sortOptions, sortBy: (query === null || query === void 0 ? void 0 : query.sort_by) || 'id', sortDirection: (query === null || query === void 0 ? void 0 : query.sort_direction) || 'desc', handleSortBy: handleSortBy, handleSortDirection: handleSortDirection })))),
            (enableCreate || secondaryAction) && (react_1.default.createElement(material_1.Stack, { spacing: 1, direction: { xs: 'column', sm: 'row' }, alignItems: "center" },
                react_1.default.createElement(material_1.Button, { sx: sx.button, color: "primary", variant: "contained", onClick: handleAdd, startIcon: react_1.default.createElement(__1.Icon, { name: "Plus", color: "primary.contrastText" }) }, buttonText))))));
};
exports.default = DataHeader;
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
        },
    },
    buttonContainer: {
        width: {
            xs: '100%',
            sm: 'auto',
        },
    },
    loading: {
        opacity: 0.7,
    },
    circularProgress: {
        color: 'primary.main',
    },
    searchBar: {
        width: '100%',
    },
};
