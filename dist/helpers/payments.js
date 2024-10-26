"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPurchased = void 0;
var isPurchased = function (user, documentId) {
    var _a;
    return ((_a = user === null || user === void 0 ? void 0 : user.purchases) === null || _a === void 0 ? void 0 : _a.find(function (d) { return d.id == documentId || d.handle == documentId; }))
        ? true
        : false;
};
exports.isPurchased = isPurchased;
