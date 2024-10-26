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
    var _b = props || {}, _c = _b.buttons, buttons = _c === void 0 ? [] : _c, _d = _b.displayFields, displayFields = _d === void 0 ? [] : _d, enableRatings = _b.enableRatings, enableLikes = _b.enableLikes, enableFavorites = _b.enableFavorites, enableSharing = _b.enableSharing, enableGradient = _b.enableGradient, enableOverlay = _b.enableOverlay;
    if (!resource)
        return null;
    return (react_1.default.createElement(__1.Modal, { open: openShow, handleClose: function () { return setOpenShow(false); }, maxWidth: "md" },
        react_1.default.createElement(__1.ProductListItem, { disableBorder: true, buttons: buttons, resource: resource, handleClick: function () { return setOpenShow(false); }, displayFields: displayFields, enableGradient: enableGradient, enableOverlay: enableOverlay, enableFavorites: enableFavorites, enableLikes: enableLikes, enableRatings: enableRatings })));
};
exports.default = ShowModal;
