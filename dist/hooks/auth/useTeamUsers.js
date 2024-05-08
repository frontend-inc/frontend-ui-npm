"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var useTeamUsers = function () {
    var _a = (0, frontend_js_1.useResource)({
        name: 'team_user',
        url: '/api/v1/team_users'
    }), loading = _a.loading, delayedLoading = _a.delayedLoading, errors = _a.errors, teamUser = _a.resource, teamUsers = _a.resources, findTeamUser = _a.findOne, findTeamUsers = _a.findMany, updateTeamUser = _a.update, createTeamUser = _a.create, deleteTeamUser = _a.destroy, setTeamUser = _a.setResource, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, reloadTeamUsers = _a.reloadMany, query = _a.query, setQuery = _a.setQuery, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort, loadMore = _a.loadMore, loadingWrapper = _a.loadingWrapper, paginate = _a.paginate;
    return {
        loading: loading,
        delayedLoading: delayedLoading,
        errors: errors,
        teamUser: teamUser,
        teamUsers: teamUsers,
        findTeamUser: findTeamUser,
        findTeamUsers: findTeamUsers,
        updateTeamUser: updateTeamUser,
        createTeamUser: createTeamUser,
        deleteTeamUser: deleteTeamUser,
        setTeamUser: setTeamUser,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        reloadTeamUsers: reloadTeamUsers,
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
exports.default = useTeamUsers;
