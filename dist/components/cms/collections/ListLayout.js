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
var ListLayout = function (props) {
    var _a = props.grid, grid = _a === void 0 ? false : _a, children = props.children;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (grid ? sx.grid : sx.list)) }, children));
};
exports.default = ListLayout;
var sx = {
    root: {
        width: '100%',
        overflowX: 'scroll',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    listDense: {
        gap: '8px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            md: '1fr 1fr 1fr',
            xs: '1fr',
        },
        gap: '16px',
        pb: 1,
    },
};
