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
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterReferences = exports.handleDocumentChange = void 0;
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
var filterReferences = function (document, contentType) {
    var _a, _b, _c;
    if (!(document === null || document === void 0 ? void 0 : document.references) ||
        ((_a = document === null || document === void 0 ? void 0 : document.references) === null || _a === void 0 ? void 0 : _a.length) == 0 ||
        !contentType)
        return null;
    var documents = (_c = (_b = document === null || document === void 0 ? void 0 : document.references) === null || _b === void 0 ? void 0 : _b.filter(function (reference) { var _a; return ((_a = reference === null || reference === void 0 ? void 0 : reference.target) === null || _a === void 0 ? void 0 : _a.content_type) == contentType; })) === null || _c === void 0 ? void 0 : _c.map(function (reference) { return reference === null || reference === void 0 ? void 0 : reference.target; });
    return documents;
};
exports.filterReferences = filterReferences;
