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
var CellExpand = (0, react_1.memo)(function GridCellExpand(props) {
    var cell = props.cell, cellExpanded = props.cellExpanded, width = props.width, _a = props.variant, variant = _a === void 0 ? "caption" : _a;
    var wrapper = (0, react_1.useRef)(null);
    var cellDiv = (0, react_1.useRef)(null);
    var cellValue = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var _c = (0, react_1.useState)(false), showFullCell = _c[0], setShowFullCell = _c[1];
    var _d = (0, react_1.useState)(false), showPopper = _d[0], setShowPopper = _d[1];
    var handleMouseEnter = function () {
        setShowPopper(true);
        setAnchorEl(cellDiv.current);
        setShowFullCell(true);
    };
    var handleMouseLeave = function () {
        setShowFullCell(false);
    };
    (0, react_1.useEffect)(function () {
        if (!showFullCell) {
            return undefined;
        }
        function handleKeyDown(nativeEvent) {
            // IE11, Edge (prior to using Bink?) use 'Esc'
            if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
                setShowFullCell(false);
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return function () {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [setShowFullCell, showFullCell]);
    return (react_1.default.createElement(material_1.Box, { ref: wrapper, sx: sx.root, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
        react_1.default.createElement(material_1.Box, { ref: cellDiv }),
        react_1.default.createElement(material_1.Typography, { variant: variant, ref: cellValue }, cell),
        showPopper && (react_1.default.createElement(material_1.Popper, { open: showFullCell && anchorEl !== null, anchorEl: anchorEl, style: { width: width }, sx: sx.popper },
            react_1.default.createElement(material_1.Paper, { elevation: 2, sx: __assign(__assign({}, sx.paper), { minHeight: wrapper.current.offsetHeight - 3 }) }, cellExpanded)))));
});
exports.default = CellExpand;
var sx = {
    popper: {
        zIndex: function (theme) { return theme.zIndex.modal; },
    },
    root: {
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
    },
    paper: {
        maxWidth: 600,
        p: 1,
    },
    text: {
        whiteSpace: "pre-wrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
};
