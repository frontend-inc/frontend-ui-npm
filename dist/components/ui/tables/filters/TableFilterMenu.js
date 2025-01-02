'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lucide_react_1 = require("lucide-react");
var TableFilterForm_1 = __importDefault(require("./TableFilterForm"));
var react_2 = require("@nextui-org/react");
var frontend_shadcn_1 = require("frontend-shadcn");
var TableFilterMenu = function (_a) {
    var loading = _a.loading, query = _a.query, fields = _a.fields, handleChange = _a.handleChange, handleClearFilters = _a.handleClearFilters, handleSearch = _a.handleSearch;
    return (react_1.default.createElement(frontend_shadcn_1.Popover, null,
        react_1.default.createElement(frontend_shadcn_1.PopoverTrigger, { asChild: true },
            react_1.default.createElement(react_2.Button, { isIconOnly: true, variant: "ghost" },
                react_1.default.createElement(lucide_react_1.FilterIcon, { className: "h-4 w-4" }))),
        react_1.default.createElement(frontend_shadcn_1.PopoverContent, { className: "w-80 p-0" },
            react_1.default.createElement("div", { className: "bg-background max-w-[420px] w-full" },
                react_1.default.createElement("div", { className: "flex items-center justify-start h-[46px] py-0 px-4 border-b" },
                    react_1.default.createElement(lucide_react_1.FilterIcon, { className: "h-5 w-5 text-primary mr-2" }),
                    react_1.default.createElement("span", { className: "text-sm text-foreground/70" }, "Search filters")),
                react_1.default.createElement("div", { className: "p-4" },
                    react_1.default.createElement(TableFilterForm_1.default, { loading: loading, query: query, fields: fields, handleChange: handleChange, handleClearFilters: handleClearFilters, handleSearch: handleSearch }),
                    react_1.default.createElement(react_2.Button, { className: "w-full mt-2", onPress: handleSearch, startContent: react_1.default.createElement(lucide_react_1.Search, { className: "h-4 w-4" }) }, "Search"))))));
};
exports.default = TableFilterMenu;
