'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var frontend_shadcn_1 = require("frontend-shadcn");
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var CollectionHeader = function (props) {
    var url = props.url, _a = props.query, defaultQuery = _a === void 0 ? {} : _a, _b = props.filterOptions, filterOptions = _b === void 0 ? [] : _b, _c = props.sortOptions, sortOptions = _c === void 0 ? [] : _c, _d = props.enableCreate, enableCreate = _d === void 0 ? false : _d, _e = props.enableSearch, enableSearch = _e === void 0 ? false : _e, _f = props.enableGeoSearch, enableGeoSearch = _f === void 0 ? false : _f, _g = props.enableFilters, enableFilters = _g === void 0 ? false : _g, _h = props.enableSorting, enableSorting = _h === void 0 ? false : _h, _j = props.buttonText, buttonText = _j === void 0 ? 'Add' : _j;
    var _k = (0, hooks_1.useSearch)({
        url: url,
        query: defaultQuery,
    }), query = _k.query, keywords = _k.keywords, handleKeywordChange = _k.handleKeywordChange, location = _k.location, handleLocationChange = _k.handleLocationChange, handleSearch = _k.handleSearch, handleSortBy = _k.handleSortBy, handleSortDirection = _k.handleSortDirection, activeFilters = _k.activeFilters, handleAddFilter = _k.handleAddFilter;
    var handleFilterClick = function (name, value) {
        handleAddFilter({
            name: name,
            value: value,
            operator: 'eq',
        });
    };
    var handleAdd = (0, hooks_1.useCollectionForms)().handleAdd;
    if (!enableSearch && !enableFilters && !enableSorting && !enableCreate) {
        return null;
    }
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-1 mb-1" },
        react_1.default.createElement("div", { className: "flex flex-col sm:flex-row justify-between space-y-1 sm:space-y-0 sm:space-x-1" },
            react_1.default.createElement("div", { className: "flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-1" },
                enableSearch && !enableGeoSearch && (react_1.default.createElement(__1.SearchInput, { value: keywords, handleChange: handleKeywordChange, handleSearch: handleSearch })),
                enableGeoSearch && !enableSearch && (react_1.default.createElement(__1.GeoSearchInput, { value: keywords, location: location, handleChange: handleKeywordChange, handleLocationChange: handleLocationChange, handleSearch: handleSearch })),
                enableFilters && (react_1.default.createElement("div", { className: "w-full sm:w-auto" },
                    react_1.default.createElement(__1.FilterButton, { filterOptions: filterOptions, filters: activeFilters, handleFilter: handleFilterClick }))),
                enableSorting && (react_1.default.createElement("div", { className: "w-full sm:w-auto" },
                    react_1.default.createElement(__1.SortButton, { sortOptions: sortOptions, sortBy: (query === null || query === void 0 ? void 0 : query.sort_by) || 'id', sortDirection: (query === null || query === void 0 ? void 0 : query.sort_direction) || 'desc', handleSortBy: handleSortBy, handleSortDirection: handleSortDirection })))),
            enableCreate && (react_1.default.createElement("div", { className: "flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-1" },
                react_1.default.createElement(core_1.Button, { className: (0, frontend_shadcn_1.cn)('w-full sm:w-auto', 'bg-primary text-primary-foreground hover:bg-primary/90'), onClick: handleAdd },
                    react_1.default.createElement(__1.Icon, { name: "Plus", className: "mr-2 h-4 w-4" }),
                    buttonText))))));
};
exports.default = CollectionHeader;
