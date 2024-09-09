"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var router_1 = require("next/router");
var SocialButtons = function (props) {
    var resource = props.resource, product = props.product, _a = props.direction, direction = _a === void 0 ? 'row' : _a, enableComments = props.enableComments, enableLikes = props.enableLikes, enableFavorites = props.enableFavorites, enableSharing = props.enableSharing, enableAddToList = props.enableAddToList, enableProductLikes = props.enableProductLikes, enableProductFavorites = props.enableProductFavorites, numLikes = props.numLikes, numFavorites = props.numFavorites, _b = props.size, size = _b === void 0 ? 'small' : _b, _c = props.justifyContent, justifyContent = _c === void 0 ? 'flex-start' : _c, color = props.color;
    var router = (0, router_1.useRouter)();
    var currentPageUrl = router.asPath;
    if (!enableLikes && !enableFavorites &&
        !enableSharing && !enableAddToList &&
        !enableProductFavorites && !enableProductLikes)
        return null;
    return (react_1.default.createElement(material_1.Stack, { direction: direction, justifyContent: justifyContent, spacing: size == 'small' ? 0 : 1 },
        enableAddToList == true && (react_1.default.createElement(components_1.AddToListButton, { size: size, resource: resource, color: color })),
        enableLikes == true && (react_1.default.createElement(components_1.LikeButton, { size: size, color: color, resource: resource, numLikes: numLikes })),
        enableFavorites == true && (react_1.default.createElement(components_1.FavoriteButton, { size: size, color: color, resource: resource, numFavorites: numFavorites })),
        enableProductLikes == true && (react_1.default.createElement(components_1.ProductLikeButton, { size: size, product: product, color: color, numLikes: numLikes })),
        enableProductFavorites == true && (react_1.default.createElement(components_1.ProductFavoriteButton, { size: size, product: product, color: color, numFavorites: numFavorites })),
        enableComments == true && (react_1.default.createElement(components_1.CommentButton, { resource: resource, color: color })),
        enableSharing == true && (react_1.default.createElement(components_1.ShareButton, { size: size, url: currentPageUrl }))));
};
exports.default = SocialButtons;
