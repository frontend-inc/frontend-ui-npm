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
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var __1 = require("../..");
var frontend_js_2 = require("frontend-js");
var context_1 = require("../../../context");
var router_1 = require("next/router");
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var CollectionList = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, frontend_js_1.useResourceContext)(), resource = _b.resource, setResource = _b.setResource;
    var _c = props.actions, actions = _c === void 0 ? [] : _c, _d = props.style, style = _d === void 0 ? 'card' : _d, href = props.href, _e = props.displayFields, displayFields = _e === void 0 ? [] : _e, buttonText = props.buttonText, _f = props.enableGradient, enableGradient = _f === void 0 ? false : _f, _g = props.enableOverlay, enableOverlay = _g === void 0 ? false : _g, _h = props.enableEdit, enableEdit = _h === void 0 ? false : _h, _j = props.enableDelete, enableDelete = _j === void 0 ? false : _j, _k = props.enableFavorites, enableFavorites = _k === void 0 ? false : _k, _l = props.enableLikes, enableLikes = _l === void 0 ? false : _l, _m = props.enableUsers, enableUsers = _m === void 0 ? false : _m, _o = props.enableRatings, enableRatings = _o === void 0 ? false : _o, _p = props.enableComments, enableComments = _p === void 0 ? false : _p, emptyIcon = props.emptyIcon, _q = props.emptyTitle, emptyTitle = _q === void 0 ? 'No results found' : _q, _r = props.emptyDescription, emptyDescription = _r === void 0 ? 'Try changing your search or filters.' : _r, rest = __rest(props, ["actions", "style", "href", "displayFields", "buttonText", "enableGradient", "enableOverlay", "enableEdit", "enableDelete", "enableFavorites", "enableLikes", "enableUsers", "enableRatings", "enableComments", "emptyIcon", "emptyTitle", "emptyDescription"]);
    var _s = (0, frontend_js_2.useQuery)(), loading = _s.loading, resources = _s.resources, page = _s.page, numPages = _s.numPages, loadMore = _s.loadMore;
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
            setOpen(true);
        }
    };
    var _t = props.handleClick, handleClick = _t === void 0 ? handleNavigate : _t;
    var _u = (0, hooks_1.useForms)(), handleEdit = _u.handleEdit, handleDeleteClick = _u.handleDeleteClick;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 2 },
            react_1.default.createElement(components_1.CollectionCards, __assign({ actions: actions, style: style, resources: resources, displayFields: displayFields, handleClick: handleClick, buttonText: buttonText, enableGradient: enableGradient, enableOverlay: enableOverlay, enableEdit: enableEdit, enableDelete: enableDelete, enableUsers: enableUsers, enableFavorites: enableFavorites, enableRatings: enableRatings, handleEdit: handleEdit, handleDelete: handleDeleteClick }, rest)),
            react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, loadMore: loadMore })),
        !loading && (resources === null || resources === void 0 ? void 0 : resources.length) == 0 && (react_1.default.createElement(components_1.Placeholder, { enableBorder: true, icon: emptyIcon, title: emptyTitle, description: emptyDescription })),
        react_1.default.createElement(components_1.ResourceModal, { open: open, handleClose: function () { return setOpen(false); }, actions: actions, displayFields: displayFields, enableOverlay: enableOverlay, enableEdit: enableEdit, enableFavorites: enableFavorites, enableLikes: enableLikes, enableRatings: enableRatings, enableComments: enableComments, enableUsers: enableUsers, handleEdit: function () { return handleEdit(resource); } })));
};
exports.default = CollectionList;
