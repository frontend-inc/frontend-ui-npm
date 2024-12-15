'use client';
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
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var __2 = require("../..");
var VideoListItems = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), setResource = _a.setResource, resources = _a.resources, page = _a.page, numPages = _a.numPages, loadMore = _a.loadMore, setOpenShow = _a.setOpenShow;
    var _b = props.enableEdit, enableEdit = _b === void 0 ? false : _b, _c = props.enableDelete, enableDelete = _c === void 0 ? false : _c, _d = props.enableFavorites, enableFavorites = _d === void 0 ? false : _d, _e = props.enableLikes, enableLikes = _e === void 0 ? false : _e, _f = props.enableComments, enableComments = _f === void 0 ? false : _f, _g = props.enableGradient, enableGradient = _g === void 0 ? false : _g, _h = props.enableOverlay, enableOverlay = _h === void 0 ? false : _h, rest = __rest(props, ["enableEdit", "enableDelete", "enableFavorites", "enableLikes", "enableComments", "enableGradient", "enableOverlay"]);
    var handleClick = function (resource) {
        setResource(resource);
        setOpenShow(true);
    };
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2 w-full" },
        react_1.default.createElement(__1.DataLayout, { layout: "grid" }, resources === null || resources === void 0 ? void 0 : resources.map(function (resource) {
            var _a;
            return (react_1.default.createElement(__2.VideoCard, { key: resource.id, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, primary: resource === null || resource === void 0 ? void 0 : resource.title, slots: {
                    image: {
                        enableGradient: enableGradient,
                        enableOverlay: enableOverlay,
                    },
                }, handleClick: function () { return handleClick(resource); } }));
        })),
        react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, handlePaginate: loadMore })));
};
exports.default = VideoListItems;
