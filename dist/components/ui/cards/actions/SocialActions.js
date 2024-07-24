"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../../..");
var SocialActions = function (props) {
    var _a = props || {}, resource = _a.resource, enableLikes = _a.enableLikes, enableFavorites = _a.enableFavorites, enableComments = _a.enableComments, color = _a.color;
    return (react_1.default.createElement(material_1.Stack, { direction: "row", alignItems: "flex-end", mr: 1 },
        enableLikes == true && (react_1.default.createElement(__1.LikeButton, { handle: resource === null || resource === void 0 ? void 0 : resource.handle, color: color })),
        enableFavorites == true && (react_1.default.createElement(__1.FavoriteButton, { handle: resource === null || resource === void 0 ? void 0 : resource.handle, color: color })),
        enableComments == true && (react_1.default.createElement(__1.CommentButton, { resource: resource, color: color }))));
};
exports.default = SocialActions;
