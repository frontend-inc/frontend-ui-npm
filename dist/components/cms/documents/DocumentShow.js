'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("../..");
var frontend_js_1 = require("frontend-js");
var DocumentShow = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), openShow = _a.openShow, setOpenShow = _a.setOpenShow, resource = _a.resource, url = _a.url;
    var _b = props || {}, _c = _b.metafields, metafields = _c === void 0 ? [] : _c, _d = _b.disableTitle, disableTitle = _d === void 0 ? false : _d, enableDownload = _b.enableDownload, enableComments = _b.enableComments, enableLikes = _b.enableLikes, enableFavorites = _b.enableFavorites, enableSharing = _b.enableSharing;
    var disableImage = false;
    switch (resource === null || resource === void 0 ? void 0 : resource.content_type) {
        case 'youtube':
        case 'vimeo':
        case 'soundcloud':
        case 'file':
        case 'video':
            disableImage = true;
            break;
        default:
            disableImage = false;
    }
    if (!resource)
        return null;
    return (react_1.default.createElement(__1.Drawer, { title: !disableTitle && (resource === null || resource === void 0 ? void 0 : resource.title), open: openShow, handleClose: function () { return setOpenShow(false); } },
        react_1.default.createElement("div", { className: "flex flex-col space-y-6 p-6 w-full" },
            react_1.default.createElement(__2.BlurFade, { delay: 0.25, inView: true, className: "w-full" },
                react_1.default.createElement("div", { className: "w-full" },
                    react_1.default.createElement(__1.DocumentDetails, { disableImage: disableImage, resource: resource, metafields: metafields, actions: react_1.default.createElement(__1.SocialButtons, { size: "large", justifyContent: 'center', resource: resource, enableDownload: enableDownload, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing }) }),
                    enableComments && (react_1.default.createElement("div", { className: "px-2" },
                        react_1.default.createElement(__1.CommentList, { url: url, handle: resource === null || resource === void 0 ? void 0 : resource.handle }))))))));
};
exports.default = DocumentShow;
