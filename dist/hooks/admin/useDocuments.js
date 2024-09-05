"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var hooks_1 = require("../../hooks");
var useDocuments = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var contentType = props.contentType;
    var _a = (0, frontend_js_1.useResource)({
        url: "".concat(apiUrl, "/cms/").concat(contentType),
        name: 'document',
    }), loading = _a.loading, delayedLoading = _a.delayedLoading, loaded = _a.loaded, errors = _a.errors, empty = _a.empty, editing = _a.editing, isValid = _a.isValid, document = _a.resource, documents = _a.resources, findDocument = _a.findOne, findDocuments = _a.findMany, updateDocument = _a.update, updateDocuments = _a.updateMany, createDocument = _a.create, saveDocument = _a.save, deleteDocument = _a.destroy, deleteDocuments = _a.deleteMany, loadMore = _a.loadMore, publish = _a.publish, unpublish = _a.unpublish, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, updatePositions = _a.updatePositions, addReferences = _a.addReferences, removeReferences = _a.removeReferences, addAttachment = _a.addAttachment, removeAttachment = _a.removeAttachment, query = _a.query, setQuery = _a.setQuery, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort, updateReferencePositions = _a.updateReferencePositions, reloadDocument = _a.reloadOne, reloadDocuments = _a.reloadMany, setDocument = _a.setResource, setDocuments = _a.setResources, startIndex = _a.startIndex, endIndex = _a.endIndex, paginate = _a.paginate;
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
        deleteDocument: deleteDocument,
        deleteDocuments: deleteDocuments,
        loadMore: loadMore,
        publish: publish,
        unpublish: unpublish,
        addReferences: addReferences,
        removeReferences: removeReferences,
        updateReferencePositions: updateReferencePositions,
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
