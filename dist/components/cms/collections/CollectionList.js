"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var __1 = require("../..");
var context_1 = require("../../../context");
var router_1 = require("next/router");
var __2 = require("../..");
var frontend_js_2 = require("frontend-js");
var CollectionList = function (props) {
    var router = (0, router_1.useRouter)();
    var _a = (0, react_1.useContext)(context_1.AppContext), clientUrl = _a.clientUrl, setAuthOpen = _a.setAuthOpen;
    var currentUser = (0, frontend_js_2.useAuth)().currentUser;
    var actions = props.actions, _b = props.variant, variant = _b === void 0 ? 'grid' : _b, _c = props.style, style = _c === void 0 ? 'card' : _c, href = props.href, url = props.url, fields = props.fields, _d = props.filterAnchor, filterAnchor = _d === void 0 ? 'left' : _d, _e = props.filterOptions, filterOptions = _e === void 0 ? [] : _e, _f = props.sortOptions, sortOptions = _f === void 0 ? [] : _f, _g = props.perPage, perPage = _g === void 0 ? 20 : _g, _h = props.enableSearch, enableSearch = _h === void 0 ? false : _h, _j = props.enableFilters, enableFilters = _j === void 0 ? false : _j, _k = props.enableSorting, enableSorting = _k === void 0 ? false : _k, _l = props.enableInfiniteLoad, enableInfiniteLoad = _l === void 0 ? false : _l, _m = props.enableLoadMore, enableLoadMore = _m === void 0 ? true : _m, buttonText = props.buttonText, _o = props.enableBorder, enableBorder = _o === void 0 ? false : _o, _p = props.enableGradient, enableGradient = _p === void 0 ? false : _p, _q = props.enableOverlay, enableOverlay = _q === void 0 ? false : _q, _r = props.enableEdit, enableEdit = _r === void 0 ? false : _r, _s = props.enableCreate, enableCreate = _s === void 0 ? false : _s, _t = props.enableDelete, enableDelete = _t === void 0 ? false : _t, _u = props.enableFavorites, enableFavorites = _u === void 0 ? false : _u, _v = props.filterUser, filterUser = _v === void 0 ? false : _v, _w = props.filterTeam, filterTeam = _w === void 0 ? false : _w, _x = props.query, defaultQuery = _x === void 0 ? {} : _x;
    var handleNavigate = function (resource) {
        if (clientUrl && href && (resource === null || resource === void 0 ? void 0 : resource.handle)) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            router.push("".concat(clientUrl).concat(href, "/").concat(resource === null || resource === void 0 ? void 0 : resource.handle));
        }
    };
    var _y = props.handleClick, handleClick = _y === void 0 ? handleNavigate : _y;
    var _z = (0, react_1.useState)(false), openModal = _z[0], setOpenModal = _z[1];
    var _0 = (0, react_1.useState)(false), openDeleteModal = _0[0], setOpenDeleteModal = _0[1];
    var _1 = (0, frontend_js_1.useDocuments)({
        url: url,
    }), loading = _1.loading, delayedLoading = _1.delayedLoading, errors = _1.errors, resource = _1.resource, resources = _1.resources, setResource = _1.setResource, update = _1.update, create = _1.create, destroy = _1.destroy, query = _1.query, findMany = _1.findMany, reloadMany = _1.reloadMany, removeAttachment = _1.removeAttachment, page = _1.page, numPages = _1.numPages, loadMore = _1.loadMore, handleDataChange = _1.handleDataChange, flattenDocument = _1.flattenDocument;
    var _2 = (0, react_1.useState)(''), keywords = _2[0], setKeywords = _2[1];
    var handleKeywordChange = function (ev) {
        setKeywords(ev.target.value);
    };
    var handleSearch = function (keywords) {
        findMany(__assign(__assign(__assign({}, query), defaultQuery), { keywords: keywords, page: 1, per_page: perPage }));
    };
    var handleSortBy = function (field) {
        findMany(__assign(__assign({}, query), { sort_by: field === null || field === void 0 ? void 0 : field.field }));
    };
    var handleSortDirection = function (sortDirection) {
        findMany(__assign(__assign({}, query), { sort_direction: sortDirection }));
    };
    var _3 = (0, hooks_1.useFilters)({
        query: query,
    }), queryFilters = _3.queryFilters, activeFilters = _3.activeFilters, setActiveFilters = _3.setActiveFilters, handleAddFilter = _3.handleAddFilter, mergeAllFilters = _3.mergeAllFilters, buildUserFilters = _3.buildUserFilters;
    // Filter methods
    var handleClearFilters = function () {
        setActiveFilters([]);
        findMany({
            filters: mergeAllFilters([
                defaultQuery === null || defaultQuery === void 0 ? void 0 : defaultQuery.filters,
                currentUserFilter,
            ]),
            sort_by: 'id',
            sort_direction: 'desc',
            keywords: '',
            page: 1,
            per_page: perPage,
        });
    };
    var handleFilter = function (filter) {
        handleAddFilter(filter);
    };
    var handleAdd = function () {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        setResource({
            id: null
        });
        setOpenModal(true);
    };
    var handleEdit = function (item) {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        setResource(item);
        setOpenModal(true);
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
                        return [2 /*return*/, setAuthOpen(true)];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    resp = void 0;
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id)) return [3 /*break*/, 3];
                    return [4 /*yield*/, update(resource)];
                case 2:
                    resp = _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, create(resource)];
                case 4:
                    resp = _a.sent();
                    _a.label = 5;
                case 5:
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setResource({});
                        setOpenModal(false);
                        reloadMany();
                    }
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    console.log('Error', err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteClick = function (item) {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        setResource(item);
        setOpenDeleteModal(true);
    };
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
                        return [2 /*return*/, setAuthOpen(true)];
                    return [4 /*yield*/, destroy(resource === null || resource === void 0 ? void 0 : resource.id)];
                case 1:
                    _a.sent();
                    setOpenDeleteModal(false);
                    setOpenModal(false);
                    setResource({});
                    reloadMany();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleRemove = function (name) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
                        return [2 /*return*/, setAuthOpen(true)];
                    return [4 /*yield*/, removeAttachment(resource === null || resource === void 0 ? void 0 : resource.id, name)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var currentUserFilter = buildUserFilters(currentUser, filterUser, filterTeam);
    (0, react_1.useEffect)(function () {
        if (url && currentUser) {
            findMany(__assign(__assign({}, defaultQuery), { filters: mergeAllFilters([
                    defaultQuery === null || defaultQuery === void 0 ? void 0 : defaultQuery.filters,
                    currentUserFilter,
                    queryFilters
                ]), per_page: perPage }));
        }
    }, [
        url,
        perPage,
        filterUser,
        filterTeam,
        currentUser,
        queryFilters,
        defaultQuery,
    ]);
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(__2.CollectionToolbar, { query: query, activeFilters: activeFilters, enableFilters: enableFilters && filterAnchor == 'top', enableSorting: enableSorting, enableCreate: enableCreate, enableSearch: enableSearch, filterOptions: filterOptions, sortOptions: sortOptions, handleFilter: handleFilter, handleClearFilters: handleClearFilters, handleSortBy: handleSortBy, handleSortDirection: handleSortDirection, handleAdd: handleAdd, keywords: keywords, handleKeywordChange: handleKeywordChange, handleSearch: handleSearch }),
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 0 },
            enableFilters && filterAnchor == 'left' && (react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: 4, lg: 3 },
                react_1.default.createElement(material_1.Box, { sx: sx.filtersContainer },
                    react_1.default.createElement(__2.SearchFilters, { filters: activeFilters, filterOptions: filterOptions, handleFilter: handleFilter })))),
            react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: enableFilters && filterAnchor == 'left' ? 8 : 12, lg: enableFilters && filterAnchor == 'left' ? 9 : 12 },
                react_1.default.createElement(material_1.Box, { sx: __assign({}, (delayedLoading && sx.loading)) },
                    react_1.default.createElement(__2.CardList, { actions: actions, variant: variant, style: style, resources: resources, handleClick: handleClick, buttonText: buttonText, enableBorder: enableBorder, enableGradient: enableGradient, enableOverlay: enableOverlay, enableEdit: enableEdit, enableDelete: enableDelete, enableFavorites: enableFavorites, handleEdit: handleEdit, handleDelete: handleDeleteClick })),
                !loading && resources.length == 0 && (react_1.default.createElement(__2.Placeholder, { icon: "Search", title: "No results found", description: "Try adjusting your search or filters" })))),
        enableLoadMore && (react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, loadMore: loadMore, enableInfiniteLoad: enableInfiniteLoad })),
        react_1.default.createElement(__1.Drawer, { open: openModal, handleClose: function () { return setOpenModal(false); }, title: (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', actions: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(__1.IconLoading, { loading: loading }) }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save') },
            react_1.default.createElement(__1.Form, { loading: loading, errors: errors, fields: fields, resource: flattenDocument(resource), handleChange: handleDataChange, handleRemove: handleRemove })),
        react_1.default.createElement(__1.AlertModal, { open: openDeleteModal, handleClose: function () { return setOpenDeleteModal(false); }, title: "Are you sure you want to delete this item?", description: "This action cannot be reversed.", handleConfirm: handleDelete })));
};
exports.default = CollectionList;
var sx = {
    root: {
        width: '100%',
    },
    content: {
        width: '100%',
    },
    button: {
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
    filtersContainer: {
        mr: {
            sm: 2,
            xs: 0,
        },
        mb: {
            sm: 0,
            xs: 2,
        },
    },
    sortFilterActions: {
        justifyContent: 'flex-end',
    },
    loading: {
        opacity: 0.7,
    },
    circularProgress: {
        color: 'primary.main',
    },
};
