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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("hooks");
var material_1 = require("@mui/material");
var components_1 = require("components");
var Logo_1 = __importDefault(require("./Logo"));
var material_2 = require("@mui/material");
var Logos = function (props) {
    var title = props.title, _a = props.layout, layout = _a === void 0 ? 'grid' : _a, url = props.url, _b = props.query, defaultQuery = _b === void 0 ? {} : _b, _c = props.perPage, perPage = _c === void 0 ? 20 : _c, editing = props.editing;
    var _d = (0, hooks_1.useResource)({
        url: url,
    }), loading = _d.loading, findMany = _d.findMany, resources = _d.resources;
    (0, react_1.useEffect)(function () {
        if (url && defaultQuery && perPage) {
            findMany(__assign(__assign({}, defaultQuery), { per_page: perPage }));
        }
    }, [url, defaultQuery, perPage]);
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(material_2.Typography, { variant: "caption", sx: sx.caption }, title),
        layout == 'grid' && (react_1.default.createElement(components_1.GridView, { editing: editing, loading: loading, items: resources, component: Logo_1.default })),
        layout == 'carousel' && (react_1.default.createElement(components_1.ListView, { flexDirection: "row", justifyContent: "center", spacing: 4, editing: editing, items: resources, component: Logo_1.default })),
        !loading && (resources === null || resources === void 0 ? void 0 : resources.length) === 0 && (react_1.default.createElement(components_1.Placeholder, { icon: react_1.default.createElement(components_1.Icon, { name: "Search" }), title: "No results found", description: "Try adjusting your search or filters" }))));
};
exports.default = Logos;
var sx = {
    root: {
        width: '100%',
        p: 2,
        bgcolor: 'background.main',
    },
    caption: {
        color: 'text.primary',
        textAlign: 'center',
    },
};
