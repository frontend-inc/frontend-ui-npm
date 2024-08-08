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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var context_1 = require("../../../context");
var router_1 = require("next/router");
var __2 = require("../..");
var hooks_1 = require("../../../hooks");
var helpers_1 = require("../../../helpers");
var ListItems = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = (0, frontend_js_1.useResourceContext)(), setResource = _a.setResource, loading = _a.loading, resources = _a.resources, page = _a.page, numPages = _a.numPages, _b = _a.query, query = _b === void 0 ? {} : _b, setQuery = _a.setQuery, setOpenShow = _a.setOpenShow;
    var _c = props.buttons, buttons = _c === void 0 ? [] : _c, _d = props.style, style = _d === void 0 ? 'card' : _d, href = props.href, _e = props.displayFields, displayFields = _e === void 0 ? [] : _e, _f = props.enableGradient, enableGradient = _f === void 0 ? false : _f, _g = props.enableOverlay, enableOverlay = _g === void 0 ? false : _g, _h = props.enableEdit, enableEdit = _h === void 0 ? false : _h, _j = props.enableDelete, enableDelete = _j === void 0 ? false : _j, _k = props.enableFavorites, enableFavorites = _k === void 0 ? false : _k, _l = props.enableLikes, enableLikes = _l === void 0 ? false : _l, _m = props.enableUsers, enableUsers = _m === void 0 ? false : _m, _o = props.enableRatings, enableRatings = _o === void 0 ? false : _o, _p = props.enableComments, enableComments = _p === void 0 ? false : _p, emptyIcon = props.emptyIcon, _q = props.emptyTitle, emptyTitle = _q === void 0 ? 'No results found' : _q, _r = props.emptyDescription, emptyDescription = _r === void 0 ? 'Try changing your search or filters.' : _r, rest = __rest(props, ["buttons", "style", "href", "displayFields", "enableGradient", "enableOverlay", "enableEdit", "enableDelete", "enableFavorites", "enableLikes", "enableUsers", "enableRatings", "enableComments", "emptyIcon", "emptyTitle", "emptyDescription"]);
    var handleNavigate = function (resource) {
        if (href) {
            if (clientUrl && href && (resource === null || resource === void 0 ? void 0 : resource.handle)) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
                router.push("".concat(clientUrl).concat(href, "/").concat(resource === null || resource === void 0 ? void 0 : resource.handle));
            }
        }
        else {
            setResource(resource);
            setOpenShow(true);
        }
    };
    var _s = props.handleClick, handleClick = _s === void 0 ? handleNavigate : _s;
    var _t = (0, hooks_1.useForms)(), handleEdit = _t.handleEdit, handleDeleteClick = _t.handleDeleteClick;
    var grid = false;
    var LAYOUTS = {
        list: false,
        card: true,
        avatar: false,
        cover: true,
        chip: false,
        text: false,
        table: false,
    };
    grid = LAYOUTS[style];
    var handleLoadMore = function () {
        var perPage = ((query === null || query === void 0 ? void 0 : query.per_page) || 12) + 12;
        setQuery(__assign(__assign({}, query), { per_page: perPage }));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 2 },
            react_1.default.createElement(__2.ListLayout, { grid: grid }, resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) { return (react_1.default.createElement(__2.ListCard, { key: index, style: style, resource: resource, displayFields: displayFields, handleClick: function () { return handleClick(resource); }, buttons: (0, helpers_1.buildActions)({
                    enableEdit: enableEdit,
                    enableDelete: enableDelete,
                    handleEdit: function () { return handleEdit(resource); },
                    handleDelete: function () { return handleDeleteClick(resource); },
                    buttons: buttons,
                }), enableUsers: enableUsers, enableComments: enableComments, enableFavorites: enableFavorites, enableLikes: enableLikes, enableRatings: enableRatings, enableGradient: enableGradient, enableOverlay: enableOverlay })); })),
            react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, loadMore: handleLoadMore })),
        !loading && (resources === null || resources === void 0 ? void 0 : resources.length) == 0 && (react_1.default.createElement(__2.Placeholder, { enableBorder: true, icon: emptyIcon, title: emptyTitle, description: emptyDescription }))));
};
exports.default = ListItems;
