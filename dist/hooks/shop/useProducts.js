'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var __1 = require("..");
var useProducts = function () {
    var apiUrl = (0, __1.useApp)().apiUrl;
    var _a = (0, frontend_js_1.useResource)({
        url: "".concat(apiUrl, "/shop/products"),
        name: 'product',
    }), loading = _a.loading, delayedLoading = _a.delayedLoading, loaded = _a.loaded, errors = _a.errors, empty = _a.empty, editing = _a.editing, isValid = _a.isValid, product = _a.resource, products = _a.resources, findProduct = _a.findOne, findProducts = _a.findMany, loadMore = _a.loadMore, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, query = _a.query, setQuery = _a.setQuery, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort, reloadProduct = _a.reloadOne, reloadProducts = _a.reloadMany, setProduct = _a.setResource, setProducts = _a.setResources, startIndex = _a.startIndex, endIndex = _a.endIndex, paginate = _a.paginate;
    return {
        paginate: paginate,
        loading: loading,
        loaded: loaded,
        delayedLoading: delayedLoading,
        errors: errors,
        empty: empty,
        editing: editing,
        isValid: isValid,
        product: product,
        products: products,
        findProduct: findProduct,
        findProducts: findProducts,
        loadMore: loadMore,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        query: query,
        setQuery: setQuery,
        reloadProduct: reloadProduct,
        reloadProducts: reloadProducts,
        page: page,
        numPages: numPages,
        perPage: perPage,
        totalCount: totalCount,
        sortBy: sortBy,
        sortDirection: sortDirection,
        handleSort: handleSort,
        setProduct: setProduct,
        setProducts: setProducts,
        startIndex: startIndex,
        endIndex: endIndex,
    };
};
exports.default = useProducts;
