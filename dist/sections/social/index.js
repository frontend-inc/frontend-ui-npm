"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialLikes = exports.SocialFavorites = exports.SocialReviews = exports.SocialComments = void 0;
var SocialComments_1 = require("./SocialComments");
Object.defineProperty(exports, "SocialComments", { enumerable: true, get: function () { return __importDefault(SocialComments_1).default; } });
var ShopProductReviews_1 = require("../shop/ShopProductReviews");
Object.defineProperty(exports, "SocialReviews", { enumerable: true, get: function () { return __importDefault(ShopProductReviews_1).default; } });
var SocialFavorites_1 = require("./SocialFavorites");
Object.defineProperty(exports, "SocialFavorites", { enumerable: true, get: function () { return __importDefault(SocialFavorites_1).default; } });
var SocialLikes_1 = require("./SocialLikes");
Object.defineProperty(exports, "SocialLikes", { enumerable: true, get: function () { return __importDefault(SocialLikes_1).default; } });
