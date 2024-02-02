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
var helpers_1 = require("../../../helpers");
var AccordionHasMany = function (props) {
    var field = props.field, url = props.url, foreignUrl = props.foreignUrl, handle = props.handle, _a = props.perPage, perPage = _a === void 0 ? 5 : _a, _b = props.query, defaultQuery = _b === void 0 ? null : _b;
    var theme = (0, material_1.useTheme)();
    var _c = (0, react_1.useState)([]), documents = _c[0], setDocuments = _c[1];
    var _d = (0, frontend_js_1.useResource)({
        url: url,
    }), resource = _d.resource, findOne = _d.findOne;
    var _e = (0, frontend_js_1.useResource)({
        url: foreignUrl,
    }), loading = _e.loading, query = _e.query, resources = _e.resources, findMany = _e.findMany;
    (0, react_1.useEffect)(function () {
        if (handle) {
            findOne(handle);
        }
    }, [handle]);
    (0, react_1.useEffect)(function () {
        if (resource && field) {
            setDocuments((0, helpers_1.getDocumentValue)(resource, field));
        }
    }, [resource, field]);
    (0, react_1.useEffect)(function () {
        if (foreignUrl && documents) {
            var documentIds = documents.map(function (document) { return document.id; });
            findMany(__assign(__assign(__assign({}, query), defaultQuery), { filters: {
                    AND: [
                        {
                            id: {
                                in: documentIds,
                            },
                        },
                    ],
                }, per_page: perPage, page: 1 }));
        }
    }, [documents, foreignUrl, defaultQuery]);
    return (react_1.default.createElement(material_1.Box, { sx: sx.root }, resources === null || resources === void 0 ? void 0 :
        resources.map(function (resource, i) { return (react_1.default.createElement(components_1.AccordionItem, { key: i, title: resource === null || resource === void 0 ? void 0 : resource.title, description: resource === null || resource === void 0 ? void 0 : resource.description, image: resource === null || resource === void 0 ? void 0 : resource.image })); }),
        !loading && (resources === null || resources === void 0 ? void 0 : resources.length) === 0 && (react_1.default.createElement(components_1.Placeholder, { enableBorder: true, icon: react_1.default.createElement(components_1.Icon, { name: "Search" }), title: "No results found", description: "Try adjusting your search or filters" }))));
};
exports.default = AccordionHasMany;
var sx = {
    root: {
        width: '100%',
    },
};
