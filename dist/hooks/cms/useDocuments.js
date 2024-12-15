'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var hooks_1 = require("../../hooks");
var useDocuments = function () {
    var apiUrl = (0, hooks_1.useApp)().apiUrl;
    var api = (0, frontend_js_1.useApi)().api;
    var apiParams = {
        url: "".concat(apiUrl, "/cms/documents"),
        name: 'document',
    };
    var _a = (0, frontend_js_1.useResource)(apiParams), loading = _a.loading, delayedLoading = _a.delayedLoading, loaded = _a.loaded, errors = _a.errors, empty = _a.empty, editing = _a.editing, isValid = _a.isValid, document = _a.resource, documents = _a.resources, findDocument = _a.findOne, findDocuments = _a.findMany, updateDocument = _a.update, updateDocuments = _a.updateMany, createDocument = _a.create, createDocuments = _a.createMany, saveDocument = _a.save, deleteDocument = _a.destroy, deleteDocuments = _a.deleteMany, loadMore = _a.loadMore, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, updatePositions = _a.updatePositions, addAttachment = _a.addAttachment, removeAttachment = _a.removeAttachment, query = _a.query, setQuery = _a.setQuery, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort, reloadDocument = _a.reloadOne, reloadDocuments = _a.reloadMany, setDocument = _a.setResource, setDocuments = _a.setResources, startIndex = _a.startIndex, endIndex = _a.endIndex, paginate = _a.paginate, loadingWrapper = _a.loadingWrapper;
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
        findDocument: findDocument,
        findDocuments: findDocuments,
        saveDocument: saveDocument,
        updateDocument: updateDocument,
        updateDocuments: updateDocuments,
        createDocument: createDocument,
        createDocuments: createDocuments,
        deleteDocument: deleteDocument,
        deleteDocuments: deleteDocuments,
        loadMore: loadMore,
        addAttachment: addAttachment,
        removeAttachment: removeAttachment,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        query: query,
        setQuery: setQuery,
        reloadDocument: reloadDocument,
        reloadDocuments: reloadDocuments,
        page: page,
        numPages: numPages,
        perPage: perPage,
        totalCount: totalCount,
        updatePositions: updatePositions,
        sortBy: sortBy,
        sortDirection: sortDirection,
        handleSort: handleSort,
        setDocument: setDocument,
        setDocuments: setDocuments,
        startIndex: startIndex,
        endIndex: endIndex,
    };
};
exports.default = useDocuments;
