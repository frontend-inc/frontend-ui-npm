'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var __1 = require("..");
var useProductCollections = function () {
    var apiUrl = (0, __1.useApp)().apiUrl;
    var _a = (0, frontend_js_1.useResource)({
        url: "".concat(apiUrl, "/shop/product_collections"),
        name: 'product_collections',
    }), loading = _a.loading, delayedLoading = _a.delayedLoading, loaded = _a.loaded, errors = _a.errors, empty = _a.empty, editing = _a.editing, isValid = _a.isValid, productCollection = _a.resource, productCollections = _a.resources, findProductCollection = _a.findOne, findProductCollections = _a.findMany, loadMore = _a.loadMore, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, query = _a.query, setQuery = _a.setQuery, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort, reloadProductCollection = _a.reloadOne, reloadProductCollections = _a.reloadMany, setProductCollection = _a.setResource, setProductCollections = _a.setResources, startIndex = _a.startIndex, endIndex = _a.endIndex, paginate = _a.paginate;
    return {
        paginate: paginate,
        loading: loading,
        loaded: loaded,
        delayedLoading: delayedLoading,
        errors: errors,
        empty: empty,
        editing: editing,
        isValid: isValid,
        productCollection: productCollection,
        productCollections: productCollections,
        findProductCollection: findProductCollection,
        findProductCollections: findProductCollections,
        loadMore: loadMore,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        query: query,
        setQuery: setQuery,
        reloadProductCollection: reloadProductCollection,
        reloadProductCollections: reloadProductCollections,
        page: page,
        numPages: numPages,
        perPage: perPage,
        totalCount: totalCount,
        sortBy: sortBy,
        sortDirection: sortDirection,
        handleSort: handleSort,
        setProductCollection: setProductCollection,
        setProductCollections: setProductCollections,
        startIndex: startIndex,
        endIndex: endIndex,
    };
};
exports.default = useProductCollections;
