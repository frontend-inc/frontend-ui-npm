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
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminProductHeader = function (props) {
    var handleReload = (props || {}).handleReload;
    var _a = (0, hooks_1.useProducts)(), loading = _a.loading, generateAiProducts = _a.generateAiProducts;
    return (react_1.default.createElement(components_1.ResourceHeader, __assign({}, props, { secondaryAction: react_1.default.createElement(components_1.AiButton, { loading: loading, title: 'Generate products using AI', description: 'Generate products using AI', handleClick: generateAiProducts }) })));
};
exports.default = AdminProductHeader;
var sx = {
    iconButton: {
        minWidth: 44,
        borderRadius: 1,
        bgcolor: 'secondary.main',
        '&:hover': {
            bgcolor: 'secondary.dark'
        }
    }
};
