'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var components_1 = require("../../../components");
var navigation_1 = require("next/navigation");
var SocialButtons = function (props) {
    var resource = props.resource, product = props.product, _a = props.direction, direction = _a === void 0 ? 'row' : _a, enableDownload = props.enableDownload, enableComments = props.enableComments, enableLikes = props.enableLikes, enableFavorites = props.enableFavorites, enableSharing = props.enableSharing, enableProductLikes = props.enableProductLikes, enableProductFavorites = props.enableProductFavorites, _b = props.size, size = _b === void 0 ? 'small' : _b, _c = props.justifyContent, justifyContent = _c === void 0 ? 'flex-start' : _c;
    var currentPageUrl = (0, navigation_1.usePathname)();
    if (!enableDownload &&
        !enableLikes &&
        !enableFavorites &&
        !enableSharing &&
        !enableProductFavorites &&
        !enableProductLikes)
        return null;
    return (react_1.default.createElement("div", { className: (0, react_2.cn)('flex', size == 'small' ? 'space-x-1' : 'space-x-2', direction == 'row' && 'flex-row', justifyContent == 'flex-start' && 'justify-start', justifyContent == 'center' && 'justify-center') },
        enableDownload == true && (react_1.default.createElement(components_1.DownloadButton, { size: size, resource: resource })),
        enableLikes == true && react_1.default.createElement(components_1.LikeButton, { size: size, resource: resource }),
        enableFavorites == true && (react_1.default.createElement(components_1.FavoriteButton, { size: size, resource: resource })),
        enableProductLikes == true && (react_1.default.createElement(components_1.ProductLikeButton, { size: size, product: product })),
        enableProductFavorites == true && (react_1.default.createElement(components_1.ProductFavoriteButton, { size: size, product: product })),
        enableComments == true && react_1.default.createElement(components_1.CommentButton, { resource: resource }),
        enableSharing == true && (react_1.default.createElement(components_1.ShareButton, { size: size, url: currentPageUrl }))));
};
exports.default = SocialButtons;
