"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var BackdropLoading = function (props) {
    var _a = props.loading, loading = _a === void 0 ? false : _a;
    return (react_1.default.createElement(material_1.Backdrop, { sx: sx.root, open: loading },
        react_1.default.createElement(material_1.CircularProgress, { color: "inherit" })));
};
exports.default = BackdropLoading;
var sx = {
    root: {
        color: '#fff',
        zIndex: function (theme) { return theme.zIndex.drawer + 1; },
    },
};
