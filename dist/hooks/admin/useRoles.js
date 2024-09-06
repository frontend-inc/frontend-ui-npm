"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var hooks_1 = require("../../hooks");
var useRoles = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var _a = (0, frontend_js_1.useResource)({
        url: "".concat(apiUrl, "/roles"),
        name: 'role',
    }), errors = _a.errors, loading = _a.loading, loaded = _a.loaded, empty = _a.empty, editing = _a.editing, isValid = _a.isValid, role = _a.resource, roles = _a.resources, setRole = _a.setResource, findRole = _a.findOne, findRoles = _a.findMany, updateRole = _a.update, createRole = _a.create, saveRole = _a.save, deleteRole = _a.destroy, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, reloadRole = _a.reloadOne, reloadRoles = _a.reloadMany, query = _a.query, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort;
    return {
        errors: errors,
        loading: loading,
        loaded: loaded,
        empty: empty,
        editing: editing,
        isValid: isValid,
        role: role,
        roles: roles,
        setRole: setRole,
        findRole: findRole,
        findRoles: findRoles,
        saveRole: saveRole,
        updateRole: updateRole,
        createRole: createRole,
        deleteRole: deleteRole,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        query: query,
        page: page,
        numPages: numPages,
        perPage: perPage,
        totalCount: totalCount,
        reloadRole: reloadRole,
        reloadRoles: reloadRoles,
        sortBy: sortBy,
        sortDirection: sortDirection,
        handleSort: handleSort,
    };
};
exports.default = useRoles;
