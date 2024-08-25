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
var material_1 = require("@mui/material");
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var context_1 = require("../../../context");
var router_1 = require("next/router");
var __2 = require("../..");
var hooks_1 = require("../../../hooks");
var ReferenceCollectionListItems = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = (0, frontend_js_1.useResourceContext)(), loading = _a.loading, setResource = _a.setResource, references = _a.resources, page = _a.page, numPages = _a.numPages, _b = _a.query, query = _b === void 0 ? {} : _b, setQuery = _a.setQuery, setOpenShow = _a.setOpenShow;
    var _c = props.buttons, buttons = _c === void 0 ? [] : _c, _d = props.style, style = _d === void 0 ? 'card' : _d, href = props.href, handleClick = props.handleClick, _e = props.displayFields, displayFields = _e === void 0 ? [] : _e, _f = props.enableGradient, enableGradient = _f === void 0 ? false : _f, _g = props.enableOverlay, enableOverlay = _g === void 0 ? false : _g, _h = props.enableEdit, enableEdit = _h === void 0 ? false : _h, _j = props.enableDelete, enableDelete = _j === void 0 ? false : _j, _k = props.enableFavorites, enableFavorites = _k === void 0 ? false : _k, _l = props.enableLikes, enableLikes = _l === void 0 ? false : _l, _m = props.enableUsers, enableUsers = _m === void 0 ? false : _m, _o = props.enableRatings, enableRatings = _o === void 0 ? false : _o, _p = props.enableComments, enableComments = _p === void 0 ? false : _p, _q = props.slots, slots = _q === void 0 ? {
        list: {},
        item: {}
    } : _q;
    var handleShowClick = function (target) {
        if (handleClick) {
            handleClick(target);
        }
        else if (href) {
            if (clientUrl && href && (target === null || target === void 0 ? void 0 : target.handle)) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
                router.push("".concat(clientUrl).concat(href, "/").concat(target === null || target === void 0 ? void 0 : target.handle));
            }
        }
        else {
            setResource(target);
            setOpenShow(true);
        }
    };
    var _r = (0, hooks_1.useForms)(), handleEdit = _r.handleEdit, handleDeleteClick = _r.handleDeleteClick;
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
    var handlePaginate = function () {
        var perPage = ((query === null || query === void 0 ? void 0 : query.per_page) || 12) + 12;
        setQuery(__assign(__assign({}, query), { per_page: perPage }));
    };
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 2 },
        react_1.default.createElement(__2.DataLayout, __assign({}, slots.list, { grid: grid }), references === null || references === void 0 ? void 0 : references.map(function (reference, index) {
            var target = reference === null || reference === void 0 ? void 0 : reference.target;
            return (react_1.default.createElement(__2.CollectionListItem, __assign({}, slots.item, { key: index, style: style, resource: target, displayFields: displayFields, handleClick: function () { return handleShowClick(target); }, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: function () { return handleEdit(target); }, handleDelete: function () { return handleDeleteClick(target); }, buttons: buttons, enableUsers: enableUsers, enableComments: enableComments, enableFavorites: enableFavorites, enableLikes: enableLikes, enableRatings: enableRatings, enableGradient: enableGradient, enableOverlay: enableOverlay })));
        })),
        react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, handlePaginate: handlePaginate })));
};
exports.default = ReferenceCollectionListItems;
