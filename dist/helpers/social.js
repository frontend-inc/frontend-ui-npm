"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isShopifyFavorite = exports.isFavorited = exports.isProductLiked = exports.isProductFavorited = exports.isLiked = void 0;
var isLiked = function (user, documentId) {
    var _a;
    return ((_a = user === null || user === void 0 ? void 0 : user.likes) === null || _a === void 0 ? void 0 : _a.find(function (d) { return d.id == documentId || d.handle == documentId; }))
        ? true
        : false;
};
exports.isLiked = isLiked;
var isProductFavorited = function (user, productId) {
    var _a;
    return ((_a = user === null || user === void 0 ? void 0 : user.favorite_products) === null || _a === void 0 ? void 0 : _a.find(function (p) { return p.id == productId || p.handle == productId; }))
        ? true
        : false;
};
exports.isProductFavorited = isProductFavorited;
var isProductLiked = function (user, productId) {
    var _a;
    return ((_a = user === null || user === void 0 ? void 0 : user.liked_products) === null || _a === void 0 ? void 0 : _a.find(function (p) { return p.id == productId || p.handle == productId; }))
        ? true
        : false;
};
exports.isProductLiked = isProductLiked;
var isFavorited = function (user, documentId) {
    var _a;
    return ((_a = user === null || user === void 0 ? void 0 : user.favorites) === null || _a === void 0 ? void 0 : _a.find(function (d) { return d.id == documentId || d.handle == documentId; }))
        ? true
        : false;
};
exports.isFavorited = isFavorited;
var isShopifyFavorite = function (user, handle) {
    var _a;
    return ((_a = user === null || user === void 0 ? void 0 : user.shopify_favorites) === null || _a === void 0 ? void 0 : _a.includes(handle)) ? true : false;
};
exports.isShopifyFavorite = isShopifyFavorite;
