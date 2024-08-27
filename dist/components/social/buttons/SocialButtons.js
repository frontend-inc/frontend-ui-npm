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
    var resource = props.resource, _a = props.direction, direction = _a === void 0 ? 'row' : _a, enableComments = props.enableComments, enableLikes = props.enableLikes, enableFavorites = props.enableFavorites, enableSharing = props.enableSharing, enableAddToList = props.enableAddToList, numLikes = props.numLikes, numFavorites = props.numFavorites, _b = props.variant, variant = _b === void 0 ? 'button' : _b, _c = props.justifyContent, justifyContent = _c === void 0 ? 'flex-start' : _c, _d = props.spacing, spacing = _d === void 0 ? 1 : _d, color = props.color;
    var router = (0, router_1.useRouter)();
    var currentPageUrl = router.asPath;
    if (!enableLikes && !enableFavorites && !enableSharing && !enableAddToList)
        return null;
    return (react_1.default.createElement(material_1.Stack, { direction: direction, justifyContent: justifyContent, spacing: spacing },
        enableLikes == true && (react_1.default.createElement(components_1.LikeButton, { variant: variant, color: color, handle: resource === null || resource === void 0 ? void 0 : resource.handle, numLikes: numLikes })),
        enableFavorites == true && (react_1.default.createElement(components_1.FavoriteButton, { variant: variant, handle: resource === null || resource === void 0 ? void 0 : resource.handle, numFavorites: numFavorites, color: color })),
        enableAddToList == true && (react_1.default.createElement(components_1.AddToListButton, { variant: variant, resource: resource, color: color })),
        enableComments == true && (react_1.default.createElement(components_1.CommentButton, { resource: resource, color: color })),
        enableSharing == true && (react_1.default.createElement(components_1.ShareButton, { variant: variant, url: currentPageUrl }))));
};
exports.default = SocialButtons;
