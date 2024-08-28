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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var lucide_react_1 = require("lucide-react");
var components_2 = require("../../../components");
var TableToolbar = function (props) {
    var loading = props.loading, selected = props.selected, query = props.query, _a = props.enableDelete, enableDelete = _a === void 0 ? false : _a, _b = props.enableEdit, enableEdit = _b === void 0 ? false : _b, handleKeywordChange = props.handleKeywordChange, handleKeywordSearch = props.handleKeywordSearch, handleFilter = props.handleFilter, handleEdit = props.handleEdit, handleDelete = props.handleDelete, handlePublish = props.handlePublish, handleUnpublish = props.handleUnpublish, handleClearQuery = props.handleClearQuery, secondaryActions = props.secondaryActions;
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
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Box, { sx: sx.searchBar },
            react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(components_1.SearchInput, { value: query === null || query === void 0 ? void 0 : query.keywords, handleChange: handleKeywordChange, handleSearch: handleKeywordSearch })),
            react_1.default.createElement(material_1.Hidden, { mdDown: true },
                react_1.default.createElement(material_1.Box, { sx: sx.toolbar },
                    react_1.default.createElement(components_2.TableFilterButton, { loading: loading, query: query, handleClick: handleFilter, badgeCount: badgeCount, handleClearFilters: handleClearQuery })))),
        react_1.default.createElement(material_1.Box, { sx: sx.buttons },
            react_1.default.createElement(material_1.Box, { sx: sx.toolbar },
                react_1.default.createElement(material_1.Hidden, { mdDown: true },
                    react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
                        (selected === null || selected === void 0 ? void 0 : selected.length) > 0 && (react_1.default.createElement(react_1.default.Fragment, null,
                            enableDelete && (react_1.default.createElement(material_1.Button, { color: "secondary", variant: "contained", onClick: function () { return handleDelete(selected); } }, "Delete")),
                            enableEdit && (react_1.default.createElement(react_1.default.Fragment, null,
                                react_1.default.createElement(material_1.Button, { color: "secondary", variant: "contained", onClick: function () { return handlePublish(selected); } }, "Publish"),
                                react_1.default.createElement(material_1.Button, { color: "secondary", variant: "contained", onClick: function () { return handleUnpublish(selected); } }, "Unpublish"))))),
                        secondaryActions && secondaryActions)),
                react_1.default.createElement(material_1.Hidden, { mdUp: true },
                    react_1.default.createElement(material_1.Box, { sx: sx.toolbar },
                        react_1.default.createElement(material_1.Badge, { badgeContent: badgeCount, anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'right',
                            } },
                            react_1.default.createElement(material_1.IconButton, { onClick: handleFilter },
                                react_1.default.createElement(icons_material_1.FilterList, { sx: sx.icon }))),
                        (selected === null || selected === void 0 ? void 0 : selected.length) > 0 && (react_1.default.createElement(react_1.default.Fragment, null,
                            enableDelete && (
                            //@ts-ignore
                            react_1.default.createElement(material_1.IconButton, { onClick: handleDelete },
                                react_1.default.createElement(lucide_react_1.Trash, null))),
                            enableEdit && (
                            //@ts-ignore
                            react_1.default.createElement(material_1.IconButton, { onClick: handleEdit },
                                react_1.default.createElement(lucide_react_1.Edit, null)))))))))));
};
exports.default = TableToolbar;
var sx = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: {
            xs: 'calc(100vw - 42px)',
            sm: '100%',
        },
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    titleBar: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '140px',
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        gap: '10px',
    },
    navigateBtn: {
        mr: 2,
    },
    filterButton: {
        ml: 1,
        color: 'text.secondary',
    },
    clearFilterButton: {
        height: 34,
        color: 'text.secondary',
    },
    title: {
        lineHeight: 1.2,
    },
    buttons: {
        width: 240,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    icon: {
        color: 'text.secondary',
    },
    sortIcon: {
        height: 20,
        width: 20,
        color: 'text.secondary',
    },
};
