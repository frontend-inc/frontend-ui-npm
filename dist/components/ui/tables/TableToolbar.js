'use client';
"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var react_2 = require("@nextui-org/react");
var frontend_shadcn_1 = require("frontend-shadcn");
var TableFilterButton_1 = __importDefault(require("./filters/TableFilterButton"));
var TableToolbar = function (props) {
    var loading = props.loading, selected = props.selected, query = props.query, _a = props.enableDelete, enableDelete = _a === void 0 ? false : _a, _b = props.enableEdit, enableEdit = _b === void 0 ? false : _b, handleKeywordChange = props.handleKeywordChange, handleKeywordSearch = props.handleKeywordSearch, handleFilter = props.handleFilter, handleEdit = props.handleEdit, handleDelete = props.handleDelete, handlePublish = props.handlePublish, handleUnpublish = props.handleUnpublish, secondaryActions = props.secondaryActions, fields = props.fields, handleSearch = props.handleSearch, handleChange = props.handleChange, handleClearFilters = props.handleClearFilters;
    var _c = (0, react_1.useState)(0), badgeCount = _c[0], setBadgeCount = _c[1];
    (0, react_1.useEffect)(function () {
        var _a;
        if (query === null || query === void 0 ? void 0 : query.filters) {
            setBadgeCount((_a = Object.keys(query.filters)) === null || _a === void 0 ? void 0 : _a.length);
        }
        else {
            setBadgeCount(0);
        }
    }, [query === null || query === void 0 ? void 0 : query.filters]);
    return (react_1.default.createElement("div", { className: "flex flex-row justify-between items-center w-full sm:w-auto" },
        react_1.default.createElement("div", { className: "flex flex-row justify-start items-center w-full gap-2.5" },
            react_1.default.createElement("div", null,
                react_1.default.createElement(components_1.SearchInput, { value: query === null || query === void 0 ? void 0 : query.keywords, handleChange: handleKeywordChange, handleSearch: handleKeywordSearch })),
            react_1.default.createElement("div", { className: "relative flex flex-row justify-start items-center" },
                react_1.default.createElement(TableFilterButton_1.default, { badgeCount: badgeCount, loading: loading, query: query, fields: fields, handleChange: handleChange, handleSearch: handleSearch, handleClear: handleClearFilters }))),
        react_1.default.createElement("div", { className: "w-60 flex flex-row justify-end items-center" },
            react_1.default.createElement("div", { className: "flex flex-row justify-start items-center" },
                react_1.default.createElement(components_2.Hidden, { mdDown: true },
                    react_1.default.createElement("div", { className: "flex flex-row space-x-1" },
                        (selected === null || selected === void 0 ? void 0 : selected.length) > 0 && (react_1.default.createElement(react_1.default.Fragment, null,
                            enableDelete && (react_1.default.createElement(react_2.Button, { color: "danger", onPress: function () { return handleDelete(selected); } }, "Delete")),
                            enableEdit && (react_1.default.createElement(react_1.default.Fragment, null,
                                react_1.default.createElement(react_2.Button, { color: "success", onPress: function () { return handlePublish(selected); } }, "Publish"),
                                react_1.default.createElement(react_2.Button, { onPress: function () { return handleUnpublish(selected); } }, "Unpublish"))))),
                        secondaryActions && secondaryActions)),
                react_1.default.createElement(components_2.Hidden, { mdUp: true },
                    react_1.default.createElement("div", { className: "flex flex-row justify-start items-center" },
                        react_1.default.createElement("div", { className: "relative" },
                            react_1.default.createElement(components_2.IconButton, { onPress: handleFilter },
                                react_1.default.createElement(lucide_react_1.Filter, { className: "w-5 h-5 text-foreground" })),
                            react_1.default.createElement(frontend_shadcn_1.Badge, { className: "py-0 px-1 rounded-full absolute top-0 right-0 transform translate-x-[3px] -translate-y-[3px]" }, badgeCount)),
                        (selected === null || selected === void 0 ? void 0 : selected.length) > 0 && (react_1.default.createElement(react_1.default.Fragment, null,
                            enableDelete && (react_1.default.createElement(react_2.Button, { isIconOnly: true, onPress: function () { return handleDelete(selected); } },
                                react_1.default.createElement(lucide_react_1.Trash, { className: "w-5 h-5 text-foreground" }))),
                            enableEdit && (react_1.default.createElement(react_2.Button, { onPress: function () { return handleEdit(selected); } },
                                react_1.default.createElement(lucide_react_1.Edit, { className: "w-5 h-5 text-foreground" })))))))))));
};
exports.default = TableToolbar;
