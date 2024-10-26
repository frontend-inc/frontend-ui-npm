'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var ProductHeader = function (props) {
    var url = props.url, _a = props.query, defaultQuery = _a === void 0 ? {} : _a, _b = props.filterOptions, filterOptions = _b === void 0 ? [] : _b, _c = props.sortOptions, sortOptions = _c === void 0 ? [] : _c, _d = props.enableSearch, enableSearch = _d === void 0 ? false : _d, _e = props.enableFilters, enableFilters = _e === void 0 ? false : _e, _f = props.enableSorting, enableSorting = _f === void 0 ? false : _f;
    var _g = (0, hooks_1.useSearch)({
        url: url,
        query: defaultQuery,
    }), query = _g.query, keywords = _g.keywords, handleKeywordChange = _g.handleKeywordChange, handleSearch = _g.handleSearch, handleSortBy = _g.handleSortBy, handleSortDirection = _g.handleSortDirection, activeFilters = _g.activeFilters, handleFilter = _g.handleFilter, handleClearFilters = _g.handleClearFilters;
    if (!enableSearch && !enableFilters && !enableSorting) {
        return null;
    }
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2 mb-4" },
        react_1.default.createElement("div", { className: "flex flex-row justify-between items-center space-x-1" },
            react_1.default.createElement("div", { className: "flex flex-row justify-center items-center" },
                enableSearch && (react_1.default.createElement(__1.SearchInput, { value: keywords, handleChange: handleKeywordChange, handleSearch: handleSearch })),
                enableFilters && (react_1.default.createElement("div", { className: "w-full sm:w-auto" },
                    react_1.default.createElement(__1.FilterButton, { filterOptions: filterOptions, filters: activeFilters, handleFilter: handleFilter, handleClear: handleClearFilters }))),
                enableSorting && (react_1.default.createElement("div", { className: "w-full sm:w-auto" },
                    react_1.default.createElement(__1.SortButton, { sortOptions: sortOptions, sortBy: (query === null || query === void 0 ? void 0 : query.sort_by) || 'id', sortDirection: (query === null || query === void 0 ? void 0 : query.sort_direction) || 'desc', handleSortBy: handleSortBy, handleSortDirection: handleSortDirection })))))));
};
exports.default = ProductHeader;
