"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterDocumentLinks = exports.flattenDocument = exports.flattenDocuments = exports.handleDocumentChange = void 0;
var index_1 = require("../constants/index");
var handleDocumentChange = function (ev, resource) {
    var _a;
    var name = ev.target.name;
    var value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
    var newResource = __assign({}, resource);
    if (index_1.SYSTEM_FIELDS.includes(name)) {
        newResource[name] = value;
    }
    else {
        newResource = __assign(__assign({}, newResource), { data: __assign(__assign({}, newResource.data), (_a = {}, _a[name] = value, _a)) });
    }
    return newResource;
};
exports.handleDocumentChange = handleDocumentChange;
var flattenDocuments = function (resources) {
    return resources.map(function (resource) { return (0, exports.flattenDocument)(resource); });
};
exports.flattenDocuments = flattenDocuments;
var flattenDocument = function (resource) {
    var _a = resource || {}, data = _a.data, rest = __rest(_a, ["data"]);
    return __assign(__assign({}, data), rest);
};
exports.flattenDocument = flattenDocument;
var filterDocumentLinks = function (document, contentType) {
    var _a, _b, _c;
    if (!(document === null || document === void 0 ? void 0 : document.document_links) ||
        ((_a = document === null || document === void 0 ? void 0 : document.document_links) === null || _a === void 0 ? void 0 : _a.length) == 0 ||
        !contentType)
        return null;
    var documents = (_c = (_b = document === null || document === void 0 ? void 0 : document.document_links) === null || _b === void 0 ? void 0 : _b.filter(function (docuLink) { var _a; return ((_a = docuLink === null || docuLink === void 0 ? void 0 : docuLink.target) === null || _a === void 0 ? void 0 : _a.content_type) == contentType; })) === null || _c === void 0 ? void 0 : _c.map(function (docuLink) { return docuLink === null || docuLink === void 0 ? void 0 : docuLink.target; });
    return documents;
};
exports.filterDocumentLinks = filterDocumentLinks;
