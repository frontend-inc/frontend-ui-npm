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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var FilterList_1 = __importDefault(require("./FilterList"));
var FilterButton = function (props) {
    var _a = props || {}, _b = _a.loading, loading = _b === void 0 ? false : _b, _c = _a.filters, filters = _c === void 0 ? [] : _c, _d = _a.filterOptions, filterOptions = _d === void 0 ? [] : _d, handleFilter = _a.handleFilter, _e = _a.disableFilterCount, disableFilterCount = _e === void 0 ? false : _e;
    var _f = (0, react_1.useState)(false), open = _f[0], setOpen = _f[1];
    var _g = (0, react_1.useState)(null), anchorEl = _g[0], setAnchorEl = _g[1];
    var handleClick = function (ev) {
        setAnchorEl(ev.currentTarget);
        setOpen(true);
    };
    var handleClose = function () { return setOpen(false); };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Badge, { sx: sx.badge, badgeContent: disableFilterCount ? 0 : filters === null || filters === void 0 ? void 0 : filters.length, color: "primary", anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
            } },
            react_1.default.createElement(material_1.Button, { sx: __assign(__assign({}, sx.button), ((filters === null || filters === void 0 ? void 0 : filters.length) > 0 && sx.hideBorder)), color: "secondary", variant: "contained", startIcon: loading ? (react_1.default.createElement(__1.IconLoading, { loading: loading })) : (react_1.default.createElement(__1.Icon, { name: "SlidersHorizontal", color: "secondary.contrastText", size: 20 })), onClick: handleClick }, "Filters")),
        react_1.default.createElement(material_1.Hidden, { smDown: true },
            react_1.default.createElement(__1.Popup, { p: 0, anchorEl: anchorEl, open: open, handleClose: handleClose, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                }, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                } },
                react_1.default.createElement(FilterList_1.default, { filters: filters, filterOptions: filterOptions, handleFilter: handleFilter }))),
        react_1.default.createElement(material_1.Hidden, { smUp: true },
            react_1.default.createElement(__1.Drawer, { open: open, handleClose: handleClose, title: "Search", disablePadding: true },
                react_1.default.createElement(FilterList_1.default, { filters: filters, filterOptions: filterOptions, handleFilter: handleFilter })))));
};
exports.default = FilterButton;
var sx = {
    root: {
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
    button: {
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
    hideBorder: {
        borderRight: 'none',
        '&:hover': {
            borderRight: 'none',
        },
    },
    clearButton: {
        width: '20px',
        borderLeft: 'none',
        '&:hover': {
            borderLeft: 'none',
        },
    },
    mobileDrawer: {
        width: {
            xs: '270px',
            sm: '360px',
        },
    },
    badge: {
        width: '100%',
    },
};
