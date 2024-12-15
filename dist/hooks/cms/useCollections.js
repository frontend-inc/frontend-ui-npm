'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var __1 = require("..");
var useCollections = function () {
    var apiUrl = (0, __1.useApp)().apiUrl;
    var _a = (0, frontend_js_1.useResource)({
        url: "".concat(apiUrl, "/cms/collections"),
        name: 'collections',
    }), loading = _a.loading, delayedLoading = _a.delayedLoading, loaded = _a.loaded, errors = _a.errors, empty = _a.empty, editing = _a.editing, isValid = _a.isValid, collection = _a.resource, collections = _a.resources, findCollection = _a.findOne, findCollections = _a.findMany, loadMore = _a.loadMore, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, query = _a.query, setQuery = _a.setQuery, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort, reloadCollection = _a.reloadOne, reloadCollections = _a.reloadMany, setCollection = _a.setResource, setCollections = _a.setResources, startIndex = _a.startIndex, endIndex = _a.endIndex, paginate = _a.paginate;
    return {
        paginate: paginate,
        loading: loading,
        loaded: loaded,
        delayedLoading: delayedLoading,
        errors: errors,
        empty: empty,
        editing: editing,
        isValid: isValid,
        collection: collection,
        collections: collections,
        findCollection: findCollection,
        findCollections: findCollections,
        loadMore: loadMore,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        query: query,
        setQuery: setQuery,
        reloadCollection: reloadCollection,
        reloadCollections: reloadCollections,
        page: page,
        numPages: numPages,
        perPage: perPage,
        totalCount: totalCount,
        sortBy: sortBy,
        sortDirection: sortDirection,
        handleSort: handleSort,
        setCollection: setCollection,
        setCollections: setCollections,
        startIndex: startIndex,
        endIndex: endIndex,
    };
};
exports.default = useCollections;
