"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var useComments = function (props) {
    var url = props.url, handle = props.handle;
    var _a = (0, frontend_js_1.useResource)({
        url: "".concat(url, "/").concat(handle, "/comments"),
        name: 'comment',
    }), loading = _a.loading, delayedLoading = _a.delayedLoading, loaded = _a.loaded, errors = _a.errors, empty = _a.empty, comment = _a.resource, comments = _a.resources, findComment = _a.findOne, findComments = _a.findMany, updateComment = _a.update, createComment = _a.create, deleteComment = _a.destroy, setComment = _a.setResource, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, reloadComments = _a.reloadMany, query = _a.query, setQuery = _a.setQuery, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort, loadMore = _a.loadMore, loadingWrapper = _a.loadingWrapper, paginate = _a.paginate;
    return {
        loading: loading,
        delayedLoading: delayedLoading,
        errors: errors,
        loaded: loaded,
        empty: empty,
        comment: comment,
        comments: comments,
        findComment: findComment,
        findComments: findComments,
        createComment: createComment,
        updateComment: updateComment,
        deleteComment: deleteComment,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        reloadComments: reloadComments,
        setComment: setComment,
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
exports.default = useComments;
