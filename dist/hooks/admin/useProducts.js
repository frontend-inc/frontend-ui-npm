"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var __1 = require("..");
var useProducts = function () {
    var apiUrl = (0, __1.useAdmin)().apiUrl;
    var _a = (0, frontend_js_1.useResource)({
        url: "".concat(apiUrl, "/shop/products"),
        name: 'product',
    }), loading = _a.loading, delayedLoading = _a.delayedLoading, loaded = _a.loaded, errors = _a.errors, empty = _a.empty, editing = _a.editing, isValid = _a.isValid, document = _a.resource, documents = _a.resources, findProduct = _a.findOne, findProducts = _a.findMany, updateProduct = _a.update, updateProducts = _a.updateMany, createProduct = _a.create, saveProduct = _a.save, deleteProduct = _a.destroy, deleteProducts = _a.deleteMany, loadMore = _a.loadMore, publish = _a.publish, unpublish = _a.unpublish, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, updatePositions = _a.updatePositions, addAttachment = _a.addAttachment, removeAttachment = _a.removeAttachment, query = _a.query, setQuery = _a.setQuery, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort, reloadProduct = _a.reloadOne, reloadProducts = _a.reloadMany, setProduct = _a.setResource, setProducts = _a.setResources, startIndex = _a.startIndex, endIndex = _a.endIndex, paginate = _a.paginate;
    return {
        paginate: paginate,
        loading: loading,
        loaded: loaded,
        delayedLoading: delayedLoading,
        errors: errors,
        empty: empty,
        editing: editing,
        isValid: isValid,
        document: document,
        documents: documents,
        findProduct: findProduct,
        findProducts: findProducts,
        saveProduct: saveProduct,
        updateProduct: updateProduct,
        updateProducts: updateProducts,
        createProduct: createProduct,
        deleteProduct: deleteProduct,
        deleteProducts: deleteProducts,
        loadMore: loadMore,
        publish: publish,
        unpublish: unpublish,
        addAttachment: addAttachment,
        removeAttachment: removeAttachment,
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
        updatePositions: updatePositions,
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
