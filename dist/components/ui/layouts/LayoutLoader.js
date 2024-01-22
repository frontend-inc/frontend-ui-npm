"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var hooks_1 = require("../../../hooks");
var LayoutLoader = function (props) {
    var _a = props.loading, loading = _a === void 0 ? true : _a, _b = props.delay, delay = _b === void 0 ? 500 : _b, children = props.children;
    var easeLoading = (0, hooks_1.useDelayedLoading)({
        loading: loading,
        delay: delay,
    }).loading;
    if (!easeLoading)
        return children;
    return (react_1.default.createElement(material_1.Backdrop, { open: easeLoading, sx: sx.backdrop },
        react_1.default.createElement(material_1.LinearProgress, { color: "primary", sx: sx.progress })));
};
exports.default = LayoutLoader;
var sx = {
    backdrop: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.default",
        zIndex: function (theme) { return theme.zIndex.drawer + 1; },
    },
    progress: {
        height: "4px",
        width: "220px",
        bgcolor: "transparent",
        color: "primary.dark",
        borderRadius: "4px",
    },
};
