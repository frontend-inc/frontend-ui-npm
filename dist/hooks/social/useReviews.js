"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var useReviews = function (props) {
    var url = props.url, handle = props.handle;
    var _a = (0, frontend_js_1.useResource)({
        url: "".concat(url, "/").concat(handle, "/reviews"),
        name: 'review',
    }), loading = _a.loading, delayedLoading = _a.delayedLoading, loaded = _a.loaded, errors = _a.errors, empty = _a.empty, meta = _a.meta, review = _a.resource, reviews = _a.resources, findReview = _a.findOne, findReviews = _a.findMany, updateReview = _a.update, createReview = _a.create, deleteReview = _a.destroy, setReview = _a.setResource, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, reloadReviews = _a.reloadMany, query = _a.query, setQuery = _a.setQuery, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort, loadMore = _a.loadMore, loadingWrapper = _a.loadingWrapper, paginate = _a.paginate;
    return {
        loading: loading,
        delayedLoading: delayedLoading,
        errors: errors,
        loaded: loaded,
        empty: empty,
        meta: meta,
        review: review,
        reviews: reviews,
        findReview: findReview,
        findReviews: findReviews,
        createReview: createReview,
        updateReview: updateReview,
        deleteReview: deleteReview,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        reloadReviews: reloadReviews,
        setReview: setReview,
        query: query,
        setQuery: setQuery,
        paginate: paginate,
        page: page,
        numPages: numPages,
        perPage: perPage,
        totalCount: totalCount,
        sortBy: sortBy,
        sortDirection: sortDirection,
        handleSort: handleSort,
        loadMore: loadMore,
        loadingWrapper: loadingWrapper,
    };
};
exports.default = useReviews;
