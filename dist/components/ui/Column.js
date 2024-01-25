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
var context_1 = require("../../context");
var Column = function (props) {
    var children = props.children, _a = props.cols, cols = _a === void 0 ? 1 : _a, _b = props.gap, gap = _b === void 0 ? 0 : _b, _c = props.py, py = _c === void 0 ? 4 : _c, bgcolor = props.bgcolor, maxWidth = props.maxWidth;
    var theme = (0, react_1.useContext)(context_1.ThemeContext).theme;
    return (react_1.default.createElement(context_1.ThemeProvider, { muiTheme: theme, bgcolor: bgcolor },
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.box), { bgcolor: bgcolor }) },
            react_1.default.createElement(material_1.Container, { sx: __assign(__assign({}, sx.root), { gridTemplateColumns: {
                        sm: "repeat(".concat(Number(cols), ", 1fr)"),
                        xs: '1fr'
                    }, gap: gap, py: py, px: Number(py) > 0 ? 2 : 0, bgcolor: bgcolor }), maxWidth: maxWidth }, children))));
};
exports.default = Column;
var sx = {
    root: {
        py: 4,
    },
    box: {
        p: 0,
        width: "100%"
    }
};
