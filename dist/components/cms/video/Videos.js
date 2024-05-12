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
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var material_2 = require("@mui/material");
var Videos = function (props) {
    var title = props.title, _a = props.variant, variant = _a === void 0 ? 'grid' : _a, _b = props.style, style = _b === void 0 ? 'cover' : _b, url = props.url, _c = props.query, defaultQuery = _c === void 0 ? {} : _c, _d = props.perPage, perPage = _d === void 0 ? 20 : _d, enableOverlay = props.enableOverlay, enableGradient = props.enableGradient, enableBorder = props.enableBorder;
    var _e = (0, frontend_js_1.useResource)({
        url: url,
    }), loading = _e.loading, findMany = _e.findMany, resources = _e.resources;
    var handleClick = function () { return null; };
    (0, react_1.useEffect)(function () {
        if (url && defaultQuery && perPage) {
            findMany(__assign(__assign({}, defaultQuery), { per_page: perPage }));
        }
    }, [url, defaultQuery, perPage]);
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(material_2.Typography, { variant: "h5", color: "text.primary" }, title),
        react_1.default.createElement(components_1.CollectionList, { actions: [], variant: variant, style: style, resources: resources, enableBorder: enableBorder, enableGradient: enableGradient, handleClick: handleClick, enableEdit: false, enableDelete: false, handleEdit: function () { return null; }, handleDelete: function () { return null; } }),
        !loading && (resources === null || resources === void 0 ? void 0 : resources.length) === 0 && (react_1.default.createElement(components_1.Placeholder, { icon: 'Video', title: "No videos found", description: "Try adjusting your search or filters" }))));
};
exports.default = Videos;
var sx = {
    root: {
        width: '100%',
    },
};
