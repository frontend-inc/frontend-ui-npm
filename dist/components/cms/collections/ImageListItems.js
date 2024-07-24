"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var __2 = require("../..");
var hooks_1 = require("../../../hooks");
var ImageListItems = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), setResource = _a.setResource, loading = _a.loading, resources = _a.resources, page = _a.page, numPages = _a.numPages, loadMore = _a.loadMore, setOpenShow = _a.setOpenShow;
    var _b = props.enableGradient, enableGradient = _b === void 0 ? false : _b, _c = props.enableOverlay, enableOverlay = _c === void 0 ? false : _c, _d = props.enableEdit, enableEdit = _d === void 0 ? false : _d, _e = props.enableDelete, enableDelete = _e === void 0 ? false : _e, _f = props.enableFavorites, enableFavorites = _f === void 0 ? false : _f, _g = props.enableLikes, enableLikes = _g === void 0 ? false : _g, _h = props.enableUsers, enableUsers = _h === void 0 ? false : _h, _j = props.enableComments, enableComments = _j === void 0 ? false : _j, emptyIcon = props.emptyIcon, _k = props.emptyTitle, emptyTitle = _k === void 0 ? 'No results found' : _k, _l = props.emptyDescription, emptyDescription = _l === void 0 ? 'Try changing your search or filters.' : _l, rest = __rest(props, ["enableGradient", "enableOverlay", "enableEdit", "enableDelete", "enableFavorites", "enableLikes", "enableUsers", "enableComments", "emptyIcon", "emptyTitle", "emptyDescription"]);
    var handleClick = function (resource) {
        setResource(resource);
        setOpenShow(true);
    };
    var handleDeleteClick = (0, hooks_1.useForms)().handleDeleteClick;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 2 },
            react_1.default.createElement(__1.ListLayout, { grid: true }, resources === null || resources === void 0 ? void 0 : resources.map(function (resource) { return (react_1.default.createElement(__2.ImageCard, { key: resource.id, resource: resource, enableEdit: enableEdit, enableDelete: enableDelete, enableOverlay: enableOverlay, enableGradient: enableGradient, enableUsers: enableUsers, enableFavorites: enableFavorites, enableComments: enableComments, handleClick: function () { return handleClick(resource); }, handleDelete: function () { return handleDeleteClick(resource); } })); })),
            react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, loadMore: loadMore })),
        !loading && (resources === null || resources === void 0 ? void 0 : resources.length) == 0 && (react_1.default.createElement(__2.Placeholder, { enableBorder: true, icon: emptyIcon, title: emptyTitle, description: emptyDescription }))));
};
exports.default = ImageListItems;
