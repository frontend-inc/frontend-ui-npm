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
var context_1 = require("../../../context");
var frontend_js_1 = require("frontend-js");
var router_1 = require("next/router");
var helpers_1 = require("../../../helpers");
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var ForeignCollection = function (props) {
    var field = props.field, resource = props.resource, _a = props.layout, layout = _a === void 0 ? 'list' : _a, _b = props.style, style = _b === void 0 ? 'card' : _b, foreignUrl = props.foreignUrl, navigateUrl = props.navigateUrl, _c = props.perPage, perPage = _c === void 0 ? 5 : _c, buttonText = props.buttonText, _d = props.query, defaultQuery = _d === void 0 ? null : _d, _e = props.enableBorder, enableBorder = _e === void 0 ? false : _e, _f = props.enableGradient, enableGradient = _f === void 0 ? false : _f, _g = props.enableLoadMore, enableLoadMore = _g === void 0 ? true : _g;
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _h = (0, frontend_js_1.useResource)({
        url: foreignUrl,
    }), loading = _h.loading, query = _h.query, resources = _h.resources, findMany = _h.findMany, page = _h.page, numPages = _h.numPages, loadMore = _h.loadMore;
    var handleClick = function (item) {
        if (clientUrl && navigateUrl && (item === null || item === void 0 ? void 0 : item.handle)) {
            router.push("".concat(clientUrl).concat(navigateUrl, "/").concat(item === null || item === void 0 ? void 0 : item.handle));
        }
    };
    (0, react_1.useEffect)(function () {
        if (resource && field && foreignUrl) {
            var documents = (0, helpers_1.filterDocumentLinks)(resource, field === null || field === void 0 ? void 0 : field.foreign_content_type);
            var documentIds = documents === null || documents === void 0 ? void 0 : documents.map(function (document) { return document.id; });
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
    }, [resource, field, foreignUrl]);
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(components_1.CollectionList, { layout: layout, style: style, resources: resources, handleClick: handleClick, buttonText: buttonText, enableBorder: enableBorder, enableGradient: enableGradient }),
        enableLoadMore && (react_1.default.createElement(components_1.LoadMore, { page: page, numPages: numPages, loadMore: loadMore }))));
};
exports.default = ForeignCollection;
var sx = {
    root: {
        width: '100%',
    },
    content: {
        width: '100%',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            md: '1fr 1fr 1fr',
            xs: '1fr',
        },
        gap: '16px',
    },
    item: {
        p: 2,
    },
};
