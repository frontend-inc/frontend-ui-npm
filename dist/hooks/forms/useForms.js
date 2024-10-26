'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var __1 = require("..");
var useForms = function () {
    var apiUrl = (0, __1.useApp)().apiUrl;
    var url = "".concat(apiUrl, "/cms/forms");
    var apiParams = {
        url: url,
        name: 'form',
    };
    var _a = (0, frontend_js_1.useResource)(apiParams), loading = _a.loading, delayedLoading = _a.delayedLoading, loaded = _a.loaded, errors = _a.errors, empty = _a.empty, editing = _a.editing, isValid = _a.isValid, form = _a.resource, forms = _a.resources, findForm = _a.findOne, findForms = _a.findMany, updateForm = _a.update, updateForms = _a.updateMany, createForm = _a.create, saveForm = _a.save, deleteForm = _a.destroy, deleteForms = _a.deleteMany, loadMore = _a.loadMore, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, updatePositions = _a.updatePositions, addAttachment = _a.addAttachment, removeAttachment = _a.removeAttachment, query = _a.query, setQuery = _a.setQuery, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort, reloadForm = _a.reloadOne, reloadForms = _a.reloadMany, setForm = _a.setResource, setForms = _a.setResources, startIndex = _a.startIndex, endIndex = _a.endIndex, paginate = _a.paginate, loadingWrapper = _a.loadingWrapper;
    return {
        paginate: paginate,
        loading: loading,
        loaded: loaded,
        delayedLoading: delayedLoading,
        errors: errors,
        empty: empty,
        editing: editing,
        isValid: isValid,
        form: form,
        forms: forms,
        findForm: findForm,
        findForms: findForms,
        saveForm: saveForm,
        updateForm: updateForm,
        updateForms: updateForms,
        createForm: createForm,
        deleteForm: deleteForm,
        deleteForms: deleteForms,
        loadMore: loadMore,
        addAttachment: addAttachment,
        removeAttachment: removeAttachment,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        query: query,
        setQuery: setQuery,
        reloadForm: reloadForm,
        reloadForms: reloadForms,
        page: page,
        numPages: numPages,
        perPage: perPage,
        totalCount: totalCount,
        updatePositions: updatePositions,
        sortBy: sortBy,
        sortDirection: sortDirection,
        handleSort: handleSort,
        setForm: setForm,
        setForms: setForms,
        startIndex: startIndex,
        endIndex: endIndex,
    };
};
exports.default = useForms;
