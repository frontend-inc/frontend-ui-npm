"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var hooks_1 = require("../../hooks");
var useViews = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var _a = (0, frontend_js_1.useResource)({
        url: "".concat(apiUrl, "/views"),
        name: 'view',
    }), loading = _a.loading, loaded = _a.loaded, errors = _a.errors, empty = _a.empty, editing = _a.editing, isValid = _a.isValid, view = _a.resource, views = _a.resources, findView = _a.findOne, findViews = _a.findMany, updateView = _a.update, createView = _a.create, saveView = _a.save, deleteView = _a.destroy, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, reloadView = _a.reloadOne, reloadViews = _a.reloadMany, query = _a.query, meta = _a.meta, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort, updateViewPositions = _a.updatePositions, setView = _a.setResource, setViews = _a.setResources;
    return {
        loading: loading,
        loaded: loaded,
        errors: errors,
        empty: empty,
        editing: editing,
        isValid: isValid,
        view: view,
        views: views,
        findView: findView,
        findViews: findViews,
        saveView: saveView,
        updateView: updateView,
        createView: createView,
        deleteView: deleteView,
        updateViewPositions: updateViewPositions,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        meta: meta,
        query: query,
        page: page,
        numPages: numPages,
        perPage: perPage,
        totalCount: totalCount,
        reloadView: reloadView,
        reloadViews: reloadViews,
        sortBy: sortBy,
        sortDirection: sortDirection,
        handleSort: handleSort,
        setView: setView,
        setViews: setViews,
    };
};
exports.default = useViews;
