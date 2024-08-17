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
    var resource = props.resource, _a = props.direction, direction = _a === void 0 ? 'row' : _a, enableComments = props.enableComments, enableLikes = props.enableLikes, enableFavorites = props.enableFavorites, enableSharing = props.enableSharing, numLikes = props.numLikes, numFavorites = props.numFavorites, _b = props.justifyContent, justifyContent = _b === void 0 ? 'center' : _b, _c = props.variant, variant = _c === void 0 ? 'button' : _c, color = props.color, _d = props.spacing, spacing = _d === void 0 ? 1 : _d;
    var router = (0, router_1.useRouter)();
    var currentPageUrl = router.asPath;
    if (!enableLikes && !enableFavorites && !enableSharing)
        return null;
    return (react_1.default.createElement(material_1.Stack, { direction: direction, justifyContent: justifyContent, spacing: 1 },
        enableLikes == true && (react_1.default.createElement(components_1.LikeButton, { variant: variant, color: color, handle: resource === null || resource === void 0 ? void 0 : resource.handle, numLikes: numLikes })),
        enableFavorites == true && (react_1.default.createElement(components_1.FavoriteButton, { variant: variant, handle: resource === null || resource === void 0 ? void 0 : resource.handle, numFavorites: numFavorites, color: color })),
        enableComments == true && (react_1.default.createElement(components_1.CommentButton, { resource: resource, color: color })),
        enableSharing == true && (react_1.default.createElement(components_1.ShareButton, { variant: variant, url: currentPageUrl }))));
};
exports.default = SocialButtons;
