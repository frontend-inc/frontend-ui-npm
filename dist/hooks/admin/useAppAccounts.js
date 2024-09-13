"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var hooks_1 = require("../../hooks");
var useAppAccounts = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var _a = (0, frontend_js_1.useResource)({
        url: "".concat(apiUrl, "/app_accounts"),
        name: 'app_account',
    }), appAccountId = _a.resourceId, loading = _a.loading, loaded = _a.loaded, empty = _a.empty, editing = _a.editing, isValid = _a.isValid, appAccount = _a.resource, appAccounts = _a.resources, setAppAccount = _a.setResource, findAppAccount = _a.findOne, findAppAccounts = _a.findMany, updateAppAccount = _a.update, createAppAccount = _a.create, saveAppAccount = _a.save, deleteAppAccount = _a.destroy, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, reloadAppAccount = _a.reloadOne, reloadAppAccounts = _a.reloadMany, query = _a.query, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort;
    return {
        appAccountId: appAccountId,
        loading: loading,
        loaded: loaded,
        empty: empty,
        editing: editing,
        isValid: isValid,
        appAccount: appAccount,
        appAccounts: appAccounts,
        setAppAccount: setAppAccount,
        findAppAccount: findAppAccount,
        findAppAccounts: findAppAccounts,
        saveAppAccount: saveAppAccount,
        updateAppAccount: updateAppAccount,
        createAppAccount: createAppAccount,
        deleteAppAccount: deleteAppAccount,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        query: query,
        page: page,
        numPages: numPages,
        perPage: perPage,
        totalCount: totalCount,
        reloadAppAccount: reloadAppAccount,
        reloadAppAccounts: reloadAppAccounts,
        sortBy: sortBy,
        sortDirection: sortDirection,
        handleSort: handleSort,
    };
};
exports.default = useAppAccounts;
