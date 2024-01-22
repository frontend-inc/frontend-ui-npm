"use strict";
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
exports.SEARCH_FILTER_TYPES = exports.START_DATE_SORT = exports.PRICE_SORT = exports.TITLE_SORT = exports.SORTABLE_TYPES = exports.FILTERABLE_TYPES = exports.FILTER_OPERATORS = exports.DATE_RANGE_OPTIONS = exports.BOOLEAN_FILTER_OPERATORS = exports.DATE_FILTER_OPERATORS = exports.NUMBER_FILTER_OPERATORS = exports.TEXT_FILTER_OPERATORS = exports.EQUAL_OPERATOR = exports.BOOLEAN_OPTIONS = exports.SORT_DIRECTIONS = exports.WHERE_OPTIONS = exports.NUMBER_AND_STRING_FIELDS = exports.ARRAY_FIELDS = exports.JSON_FIELDS = exports.DATE_FIELDS = exports.NUMBER_FIELDS = exports.SELECT_FIELDS = exports.STRING_FIELDS = exports.BOOLEAN_FIELDS = void 0;
exports.BOOLEAN_FIELDS = ["boolean"];
exports.STRING_FIELDS = ["string", "text"];
exports.SELECT_FIELDS = ["select"];
exports.NUMBER_FIELDS = ["number", "float", "price", "rating"];
exports.DATE_FIELDS = ["date", "datetime"];
exports.JSON_FIELDS = ["json"];
exports.ARRAY_FIELDS = ["array", "tags"];
exports.NUMBER_AND_STRING_FIELDS = __spreadArray(__spreadArray([], exports.NUMBER_FIELDS, true), exports.STRING_FIELDS, true);
exports.WHERE_OPTIONS = [
    { label: "and", value: "AND" },
    { label: "or", value: "OR" },
];
exports.SORT_DIRECTIONS = [
    { label: "Increasing", value: "asc" },
    { label: "Decreasing", value: "desc" },
];
exports.BOOLEAN_OPTIONS = [
    { label: "true", value: "true" },
    { label: "false", value: "false" },
];
exports.EQUAL_OPERATOR = [{ label: "=", value: "eq" }];
exports.TEXT_FILTER_OPERATORS = [
    { label: "=", value: "eq" },
    { label: "!=", value: "neq" },
];
exports.NUMBER_FILTER_OPERATORS = [
    { label: ">", value: "gt" },
    { label: ">=", value: "gte" },
    { label: "=", value: "eq" },
    { label: "<", value: "lt" },
    { label: "<=", value: "lte" },
    { label: "!=", value: "neq" },
    { label: "in", value: "in" },
    { label: "not in", value: "nin" },
];
exports.DATE_FILTER_OPERATORS = [
    { label: ">", value: "gt" },
    { label: "<", value: "lt" },
    { label: "after", value: "gte" },
    { label: "before", value: "lte" },
];
exports.BOOLEAN_FILTER_OPERATORS = [
    { label: "=", value: "eq" },
    { label: "!=", value: "neq" },
];
exports.DATE_RANGE_OPTIONS = [
    { label: "Yesterday", value: "1_day_ago" },
    { label: "7 days ago", value: "7_days_ago" },
    { label: "14 days ago", value: "14_days_ago" },
    { label: "30 days ago", value: "30_days_ago" },
    { label: "60 days ago", value: "60_days_ago" },
    { label: "90 days ago", value: "90_days_ago" },
    { label: "Current year", value: "current_year" },
    { label: "Tomorrow", value: "1_day" },
    { label: "7 days", value: "7_days" },
    { label: "14 days", value: "14_days" },
    { label: "30 days", value: "30_days" },
    { label: "60 days", value: "60_days" },
    { label: "90 days", value: "90_days" },
    { label: "Next year", value: "next_year" },
];
exports.FILTER_OPERATORS = {
    integer: exports.NUMBER_FILTER_OPERATORS,
    float: exports.NUMBER_FILTER_OPERATORS,
    string: exports.TEXT_FILTER_OPERATORS,
    text: exports.TEXT_FILTER_OPERATORS,
    date: exports.DATE_FILTER_OPERATORS,
    datetime: exports.DATE_FILTER_OPERATORS,
    boolean: exports.BOOLEAN_FILTER_OPERATORS,
};
exports.FILTERABLE_TYPES = [
    "boolean",
    "date",
    "datetime",
    "float",
    "number",
    "price",
    "rating",
    "select",
];
exports.SORTABLE_TYPES = [
    "float",
    "rating",
    "number",
    "string",
    "text",
    "price",
    "url",
];
exports.TITLE_SORT = {
    label: "Title",
    name: "title",
};
exports.PRICE_SORT = {
    label: "Price",
    name: "price",
};
exports.START_DATE_SORT = {
    label: "Date",
    name: "start_date",
};
exports.SEARCH_FILTER_TYPES = ["boolean", "rating", "select"];
