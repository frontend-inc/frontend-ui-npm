'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var hooks_1 = require("../../hooks");
var useAccounts = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var _a = (0, frontend_js_1.useResource)({
        url: "".concat(apiUrl, "/accounts"),
        name: 'account',
    }), accountId = _a.resourceId, loading = _a.loading, loaded = _a.loaded, empty = _a.empty, editing = _a.editing, isValid = _a.isValid, account = _a.resource, accounts = _a.resources, setAccount = _a.setResource, findAccount = _a.findOne, findAccounts = _a.findMany, updateAccount = _a.update, createAccount = _a.create, saveAccount = _a.save, deleteAccount = _a.destroy, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, query = _a.query, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort;
    return {
        accountId: accountId,
        loading: loading,
        loaded: loaded,
        empty: empty,
        editing: editing,
        isValid: isValid,
        account: account,
        accounts: accounts,
        setAccount: setAccount,
        findAccount: findAccount,
        findAccounts: findAccounts,
        saveAccount: saveAccount,
        updateAccount: updateAccount,
        createAccount: createAccount,
        deleteAccount: deleteAccount,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        query: query,
        page: page,
        numPages: numPages,
        perPage: perPage,
        totalCount: totalCount,
        sortBy: sortBy,
        sortDirection: sortDirection,
        handleSort: handleSort,
    };
};
exports.default = useAccounts;
