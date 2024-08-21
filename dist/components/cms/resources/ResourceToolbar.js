"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var Toolbar = function (props) {
    var _a = props || {}, _b = _a.direction, direction = _b === void 0 ? 'row' : _b, enableSearch = _a.enableSearch, enableFilters = _a.enableFilters, enableSorting = _a.enableSorting, enableCreate = _a.enableCreate, handleSearch = _a.handleSearch, handleKeywordChange = _a.handleKeywordChange, handleFilter = _a.handleFilter, handleClearFilters = _a.handleClearFilters, handleSort = _a.handleSort, handleSortDirection = _a.handleSortDirection, handleAdd = _a.handleAdd, keywords = _a.keywords, activeFilters = _a.activeFilters, filterOptions = _a.filterOptions, sortOptions = _a.sortOptions, _c = _a.query, query = _c === void 0 ? {} : _c;
    return (react_1.default.createElement(material_1.Stack, { direction: { xs: 'column', sm: direction }, sx: sx.buttons, spacing: 1 },
        react_1.default.createElement(material_1.Stack, { alignItems: 'center', direction: { xs: 'column', sm: direction }, spacing: 1 },
            enableSearch && (react_1.default.createElement(__1.SearchInput, { value: keywords, handleChange: handleKeywordChange, handleSearch: handleSearch })),
            enableFilters && (react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(__1.FilterButton, { filters: activeFilters, handleFilter: handleFilter, handleClear: handleClearFilters, filterOptions: filterOptions }))),
            enableSorting && (react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(__1.SortButton, { sortBy: (query === null || query === void 0 ? void 0 : query.sort_by) || 'id', sortDirection: (query === null || query === void 0 ? void 0 : query.sort_direction) || 'desc', sortOptions: sortOptions, handleSortBy: handleSort, handleSortDirection: handleSortDirection })))),
        enableCreate && (react_1.default.createElement(material_1.Button, { sx: sx.button, color: "secondary", variant: "contained", onClick: handleAdd, startIcon: react_1.default.createElement(__1.Icon, { name: "Plus", color: "secondary.contrastText", size: 20 }) }, "Add"))));
};
exports.default = Toolbar;
var sx = {
    buttons: {
        width: '100%',
        justifyContent: 'space-between',
    },
    button: {
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
};
