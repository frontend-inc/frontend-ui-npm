'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var TableFilterForm_1 = __importDefault(require("./TableFilterForm"));
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_3 = require("frontend-shadcn");
var FilterButtonInput = function (_a) {
    var loading = _a.loading, query = _a.query, fields = _a.fields, _b = _a.badgeCount, badgeCount = _b === void 0 ? 0 : _b, handleSearch = _a.handleSearch, handleChange = _a.handleChange, handleClear = _a.handleClear;
    return (react_1.default.createElement(frontend_shadcn_2.Popover, null,
        react_1.default.createElement(frontend_shadcn_2.PopoverTrigger, { asChild: true },
            react_1.default.createElement(components_1.Button, { className: (0, frontend_shadcn_3.cn)('text-secondary-foreground', badgeCount > 0 && 'pr-2'), variant: "secondary" },
                react_1.default.createElement(lucide_react_1.ListFilter, { className: "mr-2 h-4 w-4" }),
                "Filter",
                badgeCount > 0 && (react_1.default.createElement(frontend_shadcn_1.Badge, { className: "ml-2 rounded-full px-2" }, badgeCount)))),
        react_1.default.createElement(frontend_shadcn_2.PopoverContent, { className: "w-[400px]" },
            react_1.default.createElement(TableFilterForm_1.default, { loading: loading, query: query, fields: fields, handleSearch: handleSearch, handleChange: handleChange, handleClearFilters: handleClear }))));
};
exports.default = FilterButtonInput;
