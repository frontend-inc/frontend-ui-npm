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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var theme_1 = require("../../theme");
var Section = function (props) {
    var _a = props.enableTransitions, enableTransitions = _a === void 0 ? false : _a, children = props.children, bgcolor = props.bgcolor, maxWidth = props.maxWidth, _b = props.py, py = _b === void 0 ? 6 : _b, _c = props.px, px = _c === void 0 ? 3 : _c;
    var _d = (0, react_1.useState)(theme_1.muiTheme.breakpoints.values.md), width = _d[0], setWidth = _d[1];
    // Since breakpoints are modified to
    // to compensate for the extra width of the Editor
    // we need to adjust the width of the Section component manually
    (0, react_1.useEffect)(function () {
        switch (maxWidth) {
            case 'sm':
                setWidth(theme_1.muiTheme.breakpoints.values.sm);
                break;
            case 'md':
                setWidth(theme_1.muiTheme.breakpoints.values.md);
                break;
            default:
                setWidth('100%');
                break;
        }
    }, [maxWidth]);
    return (react_1.default.createElement(material_1.Fade, { in: true, timeout: 1000 },
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), { bgcolor: bgcolor }) },
            react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.container), (enableTransitions && sx.containerTransitions)), { py: py, px: px, maxWidth: width }) }, children))));
};
exports.default = Section;
var sx = {
    root: {
        width: '100%',
        minHeight: '60px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    containerTransitions: {
        transition: 'all 0.3s ease-in-out',
    },
    title: {
        width: '100%',
    },
};
