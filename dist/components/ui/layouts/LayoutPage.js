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
var components_1 = require("components");
var material_1 = require("@mui/material");
var LayoutPage = function (props) {
    var children = props.children, _a = props.disableGutters, disableGutters = _a === void 0 ? false : _a, _b = props.loading, loading = _b === void 0 ? false : _b;
    return (react_1.default.createElement(components_1.LayoutLoader, { loading: loading },
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.content), (disableGutters && sx.disableGutters)) }, children)));
};
exports.default = LayoutPage;
var sx = {
    content: {
        width: '100%',
        bgcolor: 'background.default',
        minHeight: 'calc(100vh - 150px)',
    },
    disableGutters: {
        py: 0,
    },
};
