'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../../..");
var SORT_DIRECTIONS = [
    { label: 'decreasing', value: 'desc' },
    { label: 'increasing', value: 'asc' },
];
var TableFilterSortInput = function (_a) {
    var label = _a.label, _b = _a.sortBy, sortBy = _b === void 0 ? '' : _b, _c = _a.sortDirection, sortDirection = _c === void 0 ? '' : _c, _d = _a.fieldOptions, fieldOptions = _d === void 0 ? [] : _d, handleChange = _a.handleChange;
    return (react_1.default.createElement("div", { className: "flex flex-col py-2 px-0" },
        label && (react_1.default.createElement("div", { className: "min-w-[100px]" },
            react_1.default.createElement("label", { className: "text-sm font-medium text-gray-500" }, label))),
        react_1.default.createElement("div", { className: "flex flex-row space-x-2" },
            react_1.default.createElement("div", { className: " mr-4" },
                react_1.default.createElement(__1.SelectInput, { name: "sort_by", options: fieldOptions, placeholder: "Sort field", value: sortBy, handleChange: handleChange })),
            react_1.default.createElement("div", { className: "mr-12" },
                react_1.default.createElement(__1.SelectInput, { name: "sort_direction", options: SORT_DIRECTIONS, placeholder: "Sort direction", value: sortDirection, handleChange: handleChange })))));
};
exports.default = TableFilterSortInput;
