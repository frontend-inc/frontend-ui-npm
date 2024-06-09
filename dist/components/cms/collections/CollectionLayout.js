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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var CollectionLayout = function (props) {
    var _a = props || {}, _b = _a.loading, loading = _b === void 0 ? false : _b, expandLeft = _a.expandLeft, expandRight = _a.expandRight, header = _a.header, leftPanel = _a.leftPanel, rightPanel = _a.rightPanel, children = _a.children;
    var gridTemplateColumns;
    if (expandLeft && expandRight) {
        gridTemplateColumns = '1fr 2fr 1fr';
    }
    else if (expandLeft) {
        gridTemplateColumns = '2fr 3fr';
    }
    else if (expandRight) {
        gridTemplateColumns = '3fr 2fr';
    }
    else {
        gridTemplateColumns = '1fr';
    }
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, direction: "column", spacing: 1 },
        header,
        react_1.default.createElement(material_1.Box, { sx: {
                display: 'grid',
                gap: '10px',
                gridTemplateColumns: {
                    sm: gridTemplateColumns,
                    xs: '1fr',
                },
            } },
            expandLeft && (react_1.default.createElement(material_1.Box, null, leftPanel)),
            react_1.default.createElement(material_1.Box, { sx: __assign({}, (loading && sx.loading)) }, children),
            expandRight && (react_1.default.createElement(material_1.Box, null, rightPanel)))));
};
exports.default = CollectionLayout;
var sx = {
    root: {
        width: "100%"
    },
    loading: {
        opacity: 0.7,
    },
};
