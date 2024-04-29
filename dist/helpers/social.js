"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFollowing = exports.isFavorited = exports.isLiked = void 0;
var isLiked = function (user, documentId) {
    var _a;
    return ((_a = user === null || user === void 0 ? void 0 : user.likes) === null || _a === void 0 ? void 0 : _a.find(function (d) { return d.id == documentId || d.handle == documentId; }))
        ? true
        : false;
};
exports.isLiked = isLiked;
var isFavorited = function (user, documentId) {
    var _a;
    return ((_a = user === null || user === void 0 ? void 0 : user.favorites) === null || _a === void 0 ? void 0 : _a.find(function (d) { return d.id == documentId || d.handle == documentId; }))
        ? true
        : false;
};
exports.isFavorited = isFavorited;
var isFollowing = function (user, appId) {
    var _a;
    return ((_a = user === null || user === void 0 ? void 0 : user.following) === null || _a === void 0 ? void 0 : _a.find(function (d) { return d.id === appId; })) ? true : false;
};
exports.isFollowing = isFollowing;
