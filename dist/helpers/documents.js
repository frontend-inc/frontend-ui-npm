"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterReferenceTargets = exports.filterReferences = void 0;
var filterReferences = function (document, contentType) {
    var _a, _b, _c;
    if (!(document === null || document === void 0 ? void 0 : document.references) ||
        ((_a = document === null || document === void 0 ? void 0 : document.references) === null || _a === void 0 ? void 0 : _a.length) == 0 ||
        !contentType)
        return null;
    var documents = (_c = (_b = document === null || document === void 0 ? void 0 : document.references) === null || _b === void 0 ? void 0 : _b.filter(function (reference) { var _a; return ((_a = reference === null || reference === void 0 ? void 0 : reference.target) === null || _a === void 0 ? void 0 : _a.content_type) == contentType; })) === null || _c === void 0 ? void 0 : _c.sort(function (a, b) { return a.position - b.position; });
    return documents;
};
exports.filterReferences = filterReferences;
var filterReferenceTargets = function (document, contentType) {
    var _a, _b, _c, _d;
    if (!(document === null || document === void 0 ? void 0 : document.references) ||
        ((_a = document === null || document === void 0 ? void 0 : document.references) === null || _a === void 0 ? void 0 : _a.length) == 0 ||
        !contentType)
        return null;
    var documents = (_d = (_c = (_b = document === null || document === void 0 ? void 0 : document.references) === null || _b === void 0 ? void 0 : _b.filter(function (reference) { var _a; return ((_a = reference === null || reference === void 0 ? void 0 : reference.target) === null || _a === void 0 ? void 0 : _a.content_type) == contentType; })) === null || _c === void 0 ? void 0 : _c.map(function (reference) { return reference === null || reference === void 0 ? void 0 : reference.target; })) === null || _d === void 0 ? void 0 : _d.sort(function (a, b) { return a.position - b.position; });
    return documents;
};
exports.filterReferenceTargets = filterReferenceTargets;
