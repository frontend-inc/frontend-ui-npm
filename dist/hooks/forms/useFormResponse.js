"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var __1 = require("..");
var useFormResponse = function (params) {
    var formId = (params || {}).formId;
    var apiUrl = (0, __1.useApp)().apiUrl;
    var url = "".concat(apiUrl, "/cms/forms/").concat(formId, "/form_responses");
    var apiParams = {
        url: url,
        name: 'form_response',
    };
    var _a = (0, frontend_js_1.useResource)(apiParams), loading = _a.loading, delayedLoading = _a.delayedLoading, loaded = _a.loaded, errors = _a.errors, empty = _a.empty, editing = _a.editing, isValid = _a.isValid, handleChange = _a.handleChange, formResponse = _a.resource, formResponses = _a.resources, findFormResponse = _a.findOne, findFormResponses = _a.findMany, updateFormResponse = _a.update, updateFormResponses = _a.updateMany, createFormResponse = _a.create, saveFormResponse = _a.save, deleteFormResponse = _a.destroy, deleteFormResponses = _a.deleteMany, loadMore = _a.loadMore, handleChangePage = _a.handleChangePage, updatePositions = _a.updatePositions, addAttachment = _a.addAttachment, removeAttachment = _a.removeAttachment, query = _a.query, setQuery = _a.setQuery, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort, reloadFormResponse = _a.reloadOne, reloadFormResponses = _a.reloadMany, setFormResponse = _a.setResource, setFormResponses = _a.setResources, startIndex = _a.startIndex, endIndex = _a.endIndex, paginate = _a.paginate, loadingWrapper = _a.loadingWrapper;
    return {
        paginate: paginate,
        loading: loading,
        loaded: loaded,
        delayedLoading: delayedLoading,
        errors: errors,
        empty: empty,
        editing: editing,
        isValid: isValid,
        formResponse: formResponse,
        formResponses: formResponses,
        findFormResponse: findFormResponse,
        findFormResponses: findFormResponses,
        saveFormResponse: saveFormResponse,
        updateFormResponse: updateFormResponse,
        updateFormResponses: updateFormResponses,
        createFormResponse: createFormResponse,
        deleteFormResponse: deleteFormResponse,
        deleteFormResponses: deleteFormResponses,
        loadMore: loadMore,
        addAttachment: addAttachment,
        removeAttachment: removeAttachment,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        query: query,
        setQuery: setQuery,
        reloadFormResponse: reloadFormResponse,
        reloadFormResponses: reloadFormResponses,
        page: page,
        numPages: numPages,
        perPage: perPage,
        totalCount: totalCount,
        updatePositions: updatePositions,
        sortBy: sortBy,
        sortDirection: sortDirection,
        handleSort: handleSort,
        setFormResponse: setFormResponse,
        setFormResponses: setFormResponses,
        startIndex: startIndex,
        endIndex: endIndex,
        loadingWrapper: loadingWrapper
    };
};
exports.default = useFormResponse;
