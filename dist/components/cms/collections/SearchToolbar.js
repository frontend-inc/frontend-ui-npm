"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var SearchToolbar = function (props) {
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var url = props.url, filterUser = props.filterUser, filterTeam = props.filterTeam, _a = props.query, defaultQuery = _a === void 0 ? {} : _a, perPage = props.perPage, _b = props.enableCreate, enableCreate = _b === void 0 ? false : _b, _c = props.enableSearch, enableSearch = _c === void 0 ? false : _c, _d = props.enableGeoSearch, enableGeoSearch = _d === void 0 ? false : _d, _e = props.enableFilters, enableFilters = _e === void 0 ? false : _e, _f = props.enableSorting, enableSorting = _f === void 0 ? false : _f, _g = props.filterOptions, filterOptions = _g === void 0 ? [] : _g, _h = props.sortOptions, sortOptions = _h === void 0 ? [] : _h;
    var _j = (0, hooks_1.useSearch)({
        url: url,
        user: currentUser,
        perPage: perPage,
        filterUser: filterUser,
        filterTeam: filterTeam,
        query: defaultQuery,
    }), query = _j.query, keywords = _j.keywords, handleKeywordChange = _j.handleKeywordChange, location = _j.location, handleLocationChange = _j.handleLocationChange, handleSearch = _j.handleSearch, handleSortBy = _j.handleSortBy, handleSortDirection = _j.handleSortDirection, activeFilters = _j.activeFilters, handleFilter = _j.handleFilter, handleClearFilters = _j.handleClearFilters;
    var handleAdd = (0, hooks_1.useForms)().handleAdd;
    var displayFilters = enableFilters && filterOptions.length > 0;
    var displaySorting = enableSorting && sortOptions.length > 0;
    if (!enableSearch && !displayFilters && !displaySorting && !enableCreate) {
        return null;
    }
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, mb: 1 },
        react_1.default.createElement(material_1.Stack, { justifyContent: "space-between", direction: { sm: 'row', xs: 'column' }, spacing: 1 },
            react_1.default.createElement(material_1.Stack, { spacing: 1, direction: { xs: 'column', sm: 'row' }, alignItems: "center" },
                enableSearch && !enableGeoSearch && (react_1.default.createElement(__1.SearchInput, { value: keywords, handleChange: handleKeywordChange, handleSearch: handleSearch })),
                enableGeoSearch && (react_1.default.createElement(__1.GeoSearchInput, { value: keywords, location: location, handleChange: handleKeywordChange, handleLocationChange: handleLocationChange, handleSearch: handleSearch })),
                displayFilters && (react_1.default.createElement(material_1.Box, { sx: sx.buttonContainer },
                    react_1.default.createElement(__1.FilterButton, { filters: activeFilters, handleFilter: handleFilter, handleClear: handleClearFilters, filterOptions: filterOptions }))),
                displaySorting && (react_1.default.createElement(material_1.Box, { sx: sx.buttonContainer },
                    react_1.default.createElement(__1.SortButton, { sortBy: (query === null || query === void 0 ? void 0 : query.sort_by) || 'id', sortDirection: (query === null || query === void 0 ? void 0 : query.sort_direction) || 'desc', sortOptions: sortOptions, handleSortBy: handleSortBy, handleSortDirection: handleSortDirection })))),
            enableCreate && (react_1.default.createElement(material_1.Stack, { spacing: 1, direction: { xs: 'column', sm: 'row' }, alignItems: "center" },
                react_1.default.createElement(material_1.Button, { sx: sx.button, color: "secondary", variant: "contained", onClick: handleAdd, startIcon: react_1.default.createElement(__1.Icon, { name: "Plus", size: 20, color: "secondary.contrastText" }) }, "Add"))))));
};
exports.default = SearchToolbar;
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
