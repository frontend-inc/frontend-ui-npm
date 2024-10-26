'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var hooks_1 = require("../../hooks");
var useOrders = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var _a = (0, frontend_js_1.useResource)({
        url: "".concat(apiUrl, "/orders"),
        name: 'order',
    }), loading = _a.loading, delayedLoading = _a.delayedLoading, loaded = _a.loaded, errors = _a.errors, empty = _a.empty, editing = _a.editing, isValid = _a.isValid, order = _a.resource, orders = _a.resources, findOrder = _a.findOne, findOrders = _a.findMany, updateOrder = _a.update, updateOrders = _a.updateMany, createOrder = _a.create, saveOrder = _a.save, deleteOrder = _a.destroy, deleteOrders = _a.deleteMany, loadMore = _a.loadMore, publish = _a.publish, unpublish = _a.unpublish, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, updatePositions = _a.updatePositions, addAttachment = _a.addAttachment, removeAttachment = _a.removeAttachment, query = _a.query, setQuery = _a.setQuery, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort, reloadOrder = _a.reloadOne, reloadOrders = _a.reloadMany, setOrder = _a.setResource, setOrders = _a.setResources, startIndex = _a.startIndex, endIndex = _a.endIndex, paginate = _a.paginate;
    return {
        paginate: paginate,
        loading: loading,
        loaded: loaded,
        delayedLoading: delayedLoading,
        errors: errors,
        empty: empty,
        editing: editing,
        isValid: isValid,
        order: order,
        orders: orders,
        findOrder: findOrder,
        findOrders: findOrders,
        saveOrder: saveOrder,
        updateOrder: updateOrder,
        updateOrders: updateOrders,
        createOrder: createOrder,
        deleteOrder: deleteOrder,
        deleteOrders: deleteOrders,
        loadMore: loadMore,
        publish: publish,
        unpublish: unpublish,
        addAttachment: addAttachment,
        removeAttachment: removeAttachment,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        query: query,
        setQuery: setQuery,
        reloadOrder: reloadOrder,
        reloadOrders: reloadOrders,
        page: page,
        numPages: numPages,
        perPage: perPage,
        totalCount: totalCount,
        updatePositions: updatePositions,
        sortBy: sortBy,
        sortDirection: sortDirection,
        handleSort: handleSort,
        setOrder: setOrder,
        setOrders: setOrders,
        startIndex: startIndex,
        endIndex: endIndex,
    };
};
exports.default = useOrders;
