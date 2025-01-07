'use client';
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var lucide_react_1 = require("lucide-react");
var index_1 = require("../../../../constants/index");
var react_2 = require("@nextui-org/react");
var components_1 = require("../../../../components");
var components_2 = require("../../../../components");
var components_3 = require("../../../../components");
function TableFilterForm(_a) {
    var loading = _a.loading, query = _a.query, fields = _a.fields, handleChange = _a.handleChange, handleSearch = _a.handleSearch, handleClearFilters = _a.handleClearFilters;
    var _b = (0, react_1.useState)([]), filterOptions = _b[0], setFilterOptions = _b[1];
    var _c = (0, react_1.useState)([]), sortOptions = _c[0], setSortOptions = _c[1];
    var _d = (0, react_1.useState)([]), activeFilters = _d[0], setActiveFilters = _d[1];
    var defaultFilter = {
        field: 'id',
        operator: 'eq',
        value: '',
    };
    var handleFilterChange = function (ev, index) {
        var _a = ev.target, name = _a.name, value = _a.value;
        setActiveFilters(function (prevFilters) {
            var _a;
            var updatedFilters = __spreadArray([], prevFilters, true);
            updatedFilters[index] = __assign(__assign(__assign({}, updatedFilters[index]), (_a = {}, _a[name] = value, _a)), (name === 'field' && { operator: '', value: '' }));
            return updatedFilters;
        });
    };
    var handleAddFilter = function () {
        setActiveFilters(function (prevFilters) { return __spreadArray(__spreadArray([], prevFilters, true), [defaultFilter], false); });
    };
    var handleRemoveFilter = function (index) {
        setActiveFilters(function (prevFilters) { return prevFilters.filter(function (_, i) { return i !== index; }); });
    };
    var handleFilterSearch = function () {
        var filters = activeFilters.reduce(function (acc, _a) {
            var _b, _c;
            var where = _a.where, field = _a.field, operator = _a.operator, value = _a.value;
            if (!acc[where])
                acc[where] = [];
            acc[where].push((_b = {}, _b[field] = (_c = {}, _c[operator] = value, _c), _b));
            return acc;
        }, {});
        var searchQuery = {
            page: 1,
            keywords: (query === null || query === void 0 ? void 0 : query.keywords) || '',
            per_page: (query === null || query === void 0 ? void 0 : query.per_page) || 20,
            sort_by: (query === null || query === void 0 ? void 0 : query.sort_by) || 'id',
            sort_direction: (query === null || query === void 0 ? void 0 : query.sort_direction) || 'desc',
            filters: filters,
        };
        handleSearch(searchQuery);
    };
    var handleFilterFields = function (fields, filterFn) {
        return fields
            .filter(filterFn)
            .map(function (field) { return ({
            label: field.label,
            value: field.name,
            variant: field.variant,
            db_type: field.db_type,
            options: field.options,
        }); })
            .sort(function (a, b) { return a.label.localeCompare(b.label); });
    };
    (0, react_1.useEffect)(function () {
        if (fields) {
            setFilterOptions(handleFilterFields(fields, function (field) {
                return index_1.FILTERABLE_TYPES.includes(field === null || field === void 0 ? void 0 : field.variant);
            }));
            setSortOptions(handleFilterFields(fields, function (field) {
                return index_1.SORTABLE_TYPES.includes(field === null || field === void 0 ? void 0 : field.variant);
            }));
        }
    }, [fields]);
    (0, react_1.useEffect)(function () {
        if (query && query.filters) {
            // Use Object.keys to iterate over query.filters
            var formattedFilters = Object.keys(query.filters)
                .map(function (where) {
                var filters = query.filters[where];
                // Use map to iterate over filters and format them
                return filters.map(function (filter) {
                    var field = Object.keys(filter)[0];
                    var operator = Object.keys(filter[field])[0];
                    var value = filter[field][operator];
                    return { where: where, field: field, operator: operator, value: value };
                });
            })
                // Use reduce to flatten the resulting arrays
                .reduce(function (acc, curr) { return acc.concat(curr); }, []);
            // Set active filters
            setActiveFilters(formattedFilters);
        }
    }, [query]);
    return (react_1.default.createElement("div", { className: "space-y-2" },
        react_1.default.createElement(components_2.TableFilterKeywordsInput, { label: "keywords", value: query === null || query === void 0 ? void 0 : query.keywords, handleChange: handleChange, handleSearch: handleFilterSearch }),
        react_1.default.createElement(components_3.TableFilterSortInput, { label: "sort by", fieldOptions: sortOptions, handleChange: handleChange, sortBy: query === null || query === void 0 ? void 0 : query.sort_by, sortDirection: query === null || query === void 0 ? void 0 : query.sort_direction }),
        react_1.default.createElement(components_1.TableFilterInputs, { filters: activeFilters, fieldOptions: filterOptions, handleChange: handleFilterChange, handleRemove: handleRemoveFilter }),
        react_1.default.createElement(react_2.Button, { isIconOnly: true, variant: "ghost", onPress: handleAddFilter },
            react_1.default.createElement(lucide_react_1.Plus, { className: "w-4 h-4 text-foreground" })),
        react_1.default.createElement(react_2.Button, { isLoading: loading, onPress: handleFilterSearch, startContent: react_1.default.createElement(lucide_react_1.Search, { className: "w-4 h-4" }) }, "Search"),
        react_1.default.createElement(react_2.Button, { onPress: handleClearFilters, startContent: react_1.default.createElement(lucide_react_1.FilterIcon, { className: "w-4 h-4" }) }, "Reset filters")));
}
exports.default = TableFilterForm;
