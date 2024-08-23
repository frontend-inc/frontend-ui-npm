"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var GeoToolbar = function (props) {
    var url = props.url, _a = props.query, defaultQuery = _a === void 0 ? {} : _a, _b = props.filterOptions, filterOptions = _b === void 0 ? [] : _b, _c = props.sortOptions, sortOptions = _c === void 0 ? [] : _c, _d = props.enableCreate, enableCreate = _d === void 0 ? false : _d, _e = props.enableSearch, enableSearch = _e === void 0 ? false : _e, _f = props.enableFilters, enableFilters = _f === void 0 ? false : _f, _g = props.enableSorting, enableSorting = _g === void 0 ? false : _g;
    var _h = (0, hooks_1.useSearch)({
        url: url,
        query: defaultQuery,
    }), query = _h.query, keywords = _h.keywords, handleKeywordChange = _h.handleKeywordChange, location = _h.location, handleLocationChange = _h.handleLocationChange, handleSearch = _h.handleSearch, handleSortBy = _h.handleSortBy, handleSortDirection = _h.handleSortDirection, activeFilters = _h.activeFilters, handleFilter = _h.handleFilter, handleClearFilters = _h.handleClearFilters;
    var handleAdd = (0, hooks_1.useForms)().handleAdd;
    if (!enableSearch && !enableFilters && !enableSorting && !enableCreate) {
        return null;
    }
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, mb: 1 },
        react_1.default.createElement(material_1.Stack, { justifyContent: "space-between", direction: { sm: 'row', xs: 'column' }, spacing: 1 },
            react_1.default.createElement(material_1.Stack, { spacing: 1, direction: { xs: 'column', sm: 'row' }, alignItems: "center" },
                enableSearch && (react_1.default.createElement(__1.GeoSearchInput, { value: keywords, location: location, handleChange: handleKeywordChange, handleLocationChange: handleLocationChange, handleSearch: handleSearch })),
                enableFilters && (react_1.default.createElement(material_1.Box, { sx: sx.buttonContainer },
                    react_1.default.createElement(__1.FilterButton, { filterOptions: filterOptions, filters: activeFilters, handleFilter: handleFilter, handleClear: handleClearFilters }))),
                enableSorting && (react_1.default.createElement(material_1.Box, { sx: sx.buttonContainer },
                    react_1.default.createElement(__1.SortButton, { sortOptions: sortOptions, sortBy: (query === null || query === void 0 ? void 0 : query.sort_by) || 'id', sortDirection: (query === null || query === void 0 ? void 0 : query.sort_direction) || 'desc', handleSortBy: handleSortBy, handleSortDirection: handleSortDirection })))),
            enableCreate && (react_1.default.createElement(material_1.Stack, { spacing: 1, direction: { xs: 'column', sm: 'row' }, alignItems: "center" },
                react_1.default.createElement(material_1.Button, { sx: sx.button, color: "secondary", variant: "contained", onClick: handleAdd, startIcon: react_1.default.createElement(__1.Icon, { name: "Plus", size: 20, color: "secondary.contrastText" }) }, "Add"))))));
};
exports.default = GeoToolbar;
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
