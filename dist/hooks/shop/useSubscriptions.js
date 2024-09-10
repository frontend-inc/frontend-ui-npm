"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var useSubscriptions = function () {
    var api = (0, frontend_js_1.useApi)().api;
    var _a = (0, frontend_js_1.useResource)({
        name: 'subscription',
        url: '/api/v1/shop/subscriptions',
    }), loading = _a.loading, delayedLoading = _a.delayedLoading, errors = _a.errors, subscription = _a.resource, subscriptions = _a.resources, findSubscription = _a.findOne, findSubscriptions = _a.findMany, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, reloadSubscriptions = _a.reloadMany, query = _a.query, setQuery = _a.setQuery, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort, loadMore = _a.loadMore, loadingWrapper = _a.loadingWrapper, paginate = _a.paginate;
    return {
        loading: loading,
        delayedLoading: delayedLoading,
        errors: errors,
        subscription: subscription,
        subscriptions: subscriptions,
        findSubscription: findSubscription,
        findSubscriptions: findSubscriptions,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        reloadSubscriptions: reloadSubscriptions,
        query: query,
        setQuery: setQuery,
        page: page,
        numPages: numPages,
        perPage: perPage,
        totalCount: totalCount,
        sortBy: sortBy,
        sortDirection: sortDirection,
        handleSort: handleSort,
        loadMore: loadMore,
        loadingWrapper: loadingWrapper,
        paginate: paginate,
    };
};
exports.default = useSubscriptions;
