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
var MobileStickyButtons = function (props) {
    var children = props.children, _a = props.flexDirection, flexDirection = _a === void 0 ? {
        xs: 'row',
        sm: 'column',
    } : _a;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), { flexDirection: flexDirection }) }, children));
};
exports.default = MobileStickyButtons;
var sx = {
    root: {
        zIndex: function (theme) { return theme.zIndex.appBar; },
        width: {
            sm: '100%',
            xs: '100vw',
        },
        display: 'flex',
        flexDirection: {
            xs: 'row',
            sm: 'column',
        },
        gap: '5px',
        position: {
            xs: 'fixed',
            sm: 'relative',
        },
        bottom: {
            sm: 'auto',
            xs: '70px',
        },
        bgcolor: {
            xs: 'background.paper',
            sm: 'transparent',
        },
        boxShadow: {
            sm: 'none',
            xs: "0px 0px 3px 2px rgb(120 120 175 / 20%)",
        },
        p: {
            sm: 0,
            xs: 1,
        },
        left: {
            sm: 'auto',
            xs: 0,
        },
        alignItems: {
            sm: 'flex-end',
            xs: 'center',
        },
        justifyContent: {
            sm: 'flex-end',
            xs: 'space-between',
        },
    },
};
