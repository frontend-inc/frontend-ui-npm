'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var ShowModal = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), openShow = _a.openShow, setOpenShow = _a.setOpenShow, resource = _a.resource, url = _a.url;
    var _b = props || {}, _c = _b.buttons, buttons = _c === void 0 ? [] : _c, _d = _b.displayFields, displayFields = _d === void 0 ? [] : _d, enableComments = _b.enableComments, enableLikes = _b.enableLikes, enableFavorites = _b.enableFavorites, enableSharing = _b.enableSharing;
    if (!resource)
        return null;
    return (react_1.default.createElement(__1.Drawer, { disablePadding: true, open: openShow, handleClose: function () { return setOpenShow(false); }, title: resource === null || resource === void 0 ? void 0 : resource.title },
        react_1.default.createElement(__1.ShowItem, { style: "snippet", resource: resource, buttons: buttons, displayFields: displayFields, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing }),
        enableComments && (react_1.default.createElement("div", { className: "px-2" },
            react_1.default.createElement(__1.CommentList, { url: url, handle: resource === null || resource === void 0 ? void 0 : resource.handle })))));
};
exports.default = ShowModal;
