'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var __1 = require("..");
var useAdminFields = function (props) {
    var collectionId = (props || {}).collectionId;
    var apiUrl = (0, __1.useAdmin)().apiUrl;
    var _a = (0, frontend_js_1.useResource)({
        url: "".concat(apiUrl, "/collections/").concat(collectionId, "/fields"),
        name: 'field',
    }), loading = _a.loading, errors = _a.errors, empty = _a.empty, editing = _a.editing, isValid = _a.isValid, field = _a.resource, fields = _a.resources, findField = _a.findOne, findFields = _a.findMany, updateField = _a.update, updateFields = _a.updateMany, createField = _a.create, saveField = _a.save, deleteField = _a.destroy, deleteFields = _a.deleteMany, loadMore = _a.loadMore, publish = _a.publish, unpublish = _a.unpublish, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, updatePositions = _a.updatePositions, addAttachment = _a.addAttachment, removeAttachment = _a.removeAttachment, query = _a.query, setQuery = _a.setQuery, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort, reloadField = _a.reloadOne, reloadFields = _a.reloadMany, setField = _a.setResource, setFields = _a.setResources, startIndex = _a.startIndex, endIndex = _a.endIndex, paginate = _a.paginate;
    return {
        paginate: paginate,
        loading: loading,
        errors: errors,
        empty: empty,
        editing: editing,
        isValid: isValid,
        field: field,
        fields: fields,
        findField: findField,
        findFields: findFields,
        saveField: saveField,
        updateField: updateField,
        updateFields: updateFields,
        createField: createField,
        deleteField: deleteField,
        deleteFields: deleteFields,
        loadMore: loadMore,
        publish: publish,
        unpublish: unpublish,
        addAttachment: addAttachment,
        removeAttachment: removeAttachment,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        query: query,
        setQuery: setQuery,
        reloadField: reloadField,
        reloadFields: reloadFields,
        page: page,
        numPages: numPages,
        perPage: perPage,
        totalCount: totalCount,
        updatePositions: updatePositions,
        sortBy: sortBy,
        sortDirection: sortDirection,
        handleSort: handleSort,
        setField: setField,
        setFields: setFields,
        startIndex: startIndex,
        endIndex: endIndex,
    };
};
exports.default = useAdminFields;
