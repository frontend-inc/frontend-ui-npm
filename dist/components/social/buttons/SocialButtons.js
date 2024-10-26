'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var navigation_1 = require("next/navigation");
var SocialButtons = function (props) {
    var resource = props.resource, product = props.product, _a = props.direction, direction = _a === void 0 ? 'row' : _a, enableComments = props.enableComments, enableLikes = props.enableLikes, enableFavorites = props.enableFavorites, enableSharing = props.enableSharing, enableProductLikes = props.enableProductLikes, enableProductFavorites = props.enableProductFavorites, _b = props.size, size = _b === void 0 ? 'small' : _b, _c = props.justifyContent, justifyContent = _c === void 0 ? 'flex-start' : _c, color = props.color;
    var currentPageUrl = (0, navigation_1.usePathname)();
    if (!enableLikes &&
        !enableFavorites &&
        !enableSharing &&
        !enableProductFavorites &&
        !enableProductLikes)
        return null;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex', size == 'small' ? 'space-x-1' : 'space-x-2', direction == 'row' && 'flex-row', justifyContent == 'flex-start' && 'justify-start', justifyContent == 'center' && 'justify-center') },
        enableLikes == true && react_1.default.createElement(components_1.LikeButton, { size: size, resource: resource }),
        enableFavorites == true && (react_1.default.createElement(components_1.FavoriteButton, { size: size, resource: resource })),
        enableProductLikes == true && (react_1.default.createElement(components_1.ProductLikeButton, { size: size, product: product, color: color })),
        enableProductFavorites == true && (react_1.default.createElement(components_1.ProductFavoriteButton, { size: size, product: product, color: color })),
        enableComments == true && react_1.default.createElement(components_1.CommentButton, { resource: resource }),
        enableSharing == true && (react_1.default.createElement(components_1.ShareButton, { size: size, url: currentPageUrl }))));
};
exports.default = SocialButtons;
