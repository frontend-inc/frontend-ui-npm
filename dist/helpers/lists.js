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
exports.buildSearchQuery = void 0;
var buildSearchQuery = function (params) {
    var _a = (params || {}).query, query = _a === void 0 ? {} : _a;
    var _b = params || {}, resource = _b.resource, perPage = _b.perPage, filterReferences = _b.filterReferences, filterGeo = _b.filterGeo, filterSimilar = _b.filterSimilar;
    if (perPage) {
        query = __assign(__assign({}, query), { per_page: perPage });
    }
    if (filterReferences == true && (resource === null || resource === void 0 ? void 0 : resource.id)) {
        query = __assign(__assign({}, query), { method: 'references', resource_id: resource.id });
    }
    else {
        query = __assign(__assign({}, query), { resource_id: null });
    }
    if (filterGeo == true && (resource === null || resource === void 0 ? void 0 : resource.location)) {
        query = __assign(__assign({}, query), { method: 'location', location: resource === null || resource === void 0 ? void 0 : resource.location });
    }
    if (filterSimilar == true && (resource === null || resource === void 0 ? void 0 : resource.id)) {
        query = __assign(__assign({}, query), { method: 'similar', resource_id: resource === null || resource === void 0 ? void 0 : resource.id });
    }
    return query;
};
exports.buildSearchQuery = buildSearchQuery;
