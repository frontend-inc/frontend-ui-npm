"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var hooks_1 = require("../../hooks");
var Loader = function (props) {
    var _a = props.loading, loading = _a === void 0 ? true : _a, _b = props.delay, delay = _b === void 0 ? 500 : _b;
    var easeLoading = (0, hooks_1.useDelayedLoading)({
        loading: loading,
        delay: delay,
    }).loading;
    if (!easeLoading)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.LinearProgress, { color: "primary", sx: sx.progress })));
};
exports.default = Loader;
var sx = {
    root: {
        p: 6,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    progress: {
        height: "4px",
        width: "220px",
        bgcolor: "transparent",
        color: "primary.dark",
        borderRadius: "4px",
    },
};
