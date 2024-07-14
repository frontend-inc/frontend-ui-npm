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
var ListItems = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = (0, frontend_js_1.useList)(), resource = _a.resource, setResource = _a.setResource, loading = _a.loading, resources = _a.resources, page = _a.page, numPages = _a.numPages, loadMore = _a.loadMore, openShow = _a.openShow, setOpenShow = _a.setOpenShow;
    var _b = props.actions, actions = _b === void 0 ? [] : _b, _c = props.style, style = _c === void 0 ? 'card' : _c, href = props.href, _d = props.displayFields, displayFields = _d === void 0 ? [] : _d, _e = props.enableGradient, enableGradient = _e === void 0 ? false : _e, _f = props.enableOverlay, enableOverlay = _f === void 0 ? false : _f, _g = props.enableEdit, enableEdit = _g === void 0 ? false : _g, _h = props.enableDelete, enableDelete = _h === void 0 ? false : _h, _j = props.enableFavorites, enableFavorites = _j === void 0 ? false : _j, _k = props.enableLikes, enableLikes = _k === void 0 ? false : _k, _l = props.enableUsers, enableUsers = _l === void 0 ? false : _l, _m = props.enableRatings, enableRatings = _m === void 0 ? false : _m, _o = props.enableComments, enableComments = _o === void 0 ? false : _o, emptyIcon = props.emptyIcon, _p = props.emptyTitle, emptyTitle = _p === void 0 ? 'No results found' : _p, _q = props.emptyDescription, emptyDescription = _q === void 0 ? 'Try changing your search or filters.' : _q, rest = __rest(props, ["actions", "style", "href", "displayFields", "enableGradient", "enableOverlay", "enableEdit", "enableDelete", "enableFavorites", "enableLikes", "enableUsers", "enableRatings", "enableComments", "emptyIcon", "emptyTitle", "emptyDescription"]);
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
    var _r = props.handleClick, handleClick = _r === void 0 ? handleNavigate : _r;
    var _s = (0, hooks_1.useForms)(), handleEdit = _s.handleEdit, handleDeleteClick = _s.handleDeleteClick;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 2 },
            react_1.default.createElement(__2.ListCards, __assign({ actions: actions, style: style, resources: resources, displayFields: displayFields, handleClick: handleClick, enableGradient: enableGradient, enableOverlay: enableOverlay, enableEdit: enableEdit, enableDelete: enableDelete, enableUsers: enableUsers, enableFavorites: enableFavorites, enableLikes: enableLikes, enableRatings: enableRatings, enableComments: enableComments, handleEdit: handleEdit, handleDelete: handleDeleteClick }, rest)),
            react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, loadMore: loadMore })),
        !loading && (resources === null || resources === void 0 ? void 0 : resources.length) == 0 && (react_1.default.createElement(__2.Placeholder, { enableBorder: true, icon: emptyIcon, title: emptyTitle, description: emptyDescription })),
        react_1.default.createElement(__2.ShowModal, { open: openShow, handleClose: function () { return setOpenShow(false); }, actions: actions, displayFields: displayFields, enableOverlay: enableOverlay, enableFavorites: enableFavorites, enableLikes: enableLikes, enableRatings: enableRatings, enableComments: enableComments, enableUsers: enableUsers, enableEdit: enableEdit, handleEdit: function () { return handleEdit(resource); } })));
};
exports.default = ListItems;
