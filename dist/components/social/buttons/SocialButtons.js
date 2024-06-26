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
    var handle = props.handle, _a = props.direction, direction = _a === void 0 ? 'row' : _a, enableLikes = props.enableLikes, enableFavorites = props.enableFavorites, enableSharing = props.enableSharing, numLikes = props.numLikes, numFavorites = props.numFavorites, _b = props.justifyContent, justifyContent = _b === void 0 ? 'center' : _b;
    var router = (0, router_1.useRouter)();
    var currentPageUrl = router.asPath;
    if (!enableLikes && !enableFavorites && !enableSharing)
        return null;
    return (react_1.default.createElement(material_1.Stack, { direction: direction, justifyContent: justifyContent, spacing: 1 },
        enableLikes == true && (react_1.default.createElement(components_1.LikeButton, { variant: "button", handle: handle, numLikes: numLikes })),
        enableFavorites == true && (react_1.default.createElement(components_1.FavoriteButton, { variant: "button", handle: handle, numFavorites: numFavorites })),
        enableSharing == true && (react_1.default.createElement(components_1.ShareButton, { variant: "button", url: currentPageUrl }))));
};
exports.default = SocialButtons;
