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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var __1 = require("../..");
var context_1 = require("../../../context");
var router_1 = require("next/router");
var components_1 = require("../../../components");
var frontend_js_2 = require("frontend-js");
var CollectionContainer = function (props) {
    var router = (0, router_1.useRouter)();
    var _a = (0, react_1.useContext)(context_1.AppContext), clientUrl = _a.clientUrl, setAuthOpen = _a.setAuthOpen;
    var currentUser = (0, frontend_js_2.useAuth)().currentUser;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useState)({}), activeResource = _c[0], setActiveResource = _c[1];
    var _d = props.component, RenderList = _d === void 0 ? components_1.CollectionCards : _d, _resource = props.resource, user = props.user, _e = props.actions, actions = _e === void 0 ? [] : _e, _f = props.variant, variant = _f === void 0 ? 'grid' : _f, _g = props.style, style = _g === void 0 ? 'card' : _g, href = props.href, url = props.url, searchUrl = props.searchUrl, _h = props.fields, fields = _h === void 0 ? [] : _h, _j = props.displayFields, displayFields = _j === void 0 ? [] : _j, _k = props.filterAnchor, filterAnchor = _k === void 0 ? 'left' : _k, _l = props.filterOptions, filterOptions = _l === void 0 ? [] : _l, _m = props.sortOptions, sortOptions = _m === void 0 ? [] : _m, _o = props.enableGoogleMaps, enableGoogleMaps = _o === void 0 ? false : _o, _p = props.perPage, perPage = _p === void 0 ? 20 : _p, _q = props.enableSearch, enableSearch = _q === void 0 ? false : _q, _r = props.enableFilters, enableFilters = _r === void 0 ? false : _r, _s = props.enableSorting, enableSorting = _s === void 0 ? false : _s, _t = props.enableInfiniteLoad, enableInfiniteLoad = _t === void 0 ? false : _t, _u = props.enableLoadMore, enableLoadMore = _u === void 0 ? true : _u, buttonText = props.buttonText, _v = props.enableBorder, enableBorder = _v === void 0 ? false : _v, _w = props.enableGradient, enableGradient = _w === void 0 ? false : _w, _x = props.enableOverlay, enableOverlay = _x === void 0 ? false : _x, _y = props.enableEdit, enableEdit = _y === void 0 ? false : _y, _z = props.enableCreate, enableCreate = _z === void 0 ? false : _z, _0 = props.enableDelete, enableDelete = _0 === void 0 ? false : _0, _1 = props.enableFavorites, enableFavorites = _1 === void 0 ? false : _1, _2 = props.enableRatings, enableRatings = _2 === void 0 ? false : _2, _3 = props.enableUsers, enableUsers = _3 === void 0 ? false : _3, _4 = props.filterUser, filterUser = _4 === void 0 ? false : _4, _5 = props.filterTeam, filterTeam = _5 === void 0 ? false : _5, _6 = props.query, defaultQuery = _6 === void 0 ? {} : _6, emptyIcon = props.emptyIcon, _7 = props.emptyTitle, emptyTitle = _7 === void 0 ? 'No results found' : _7, _8 = props.emptyDescription, emptyDescription = _8 === void 0 ? 'Try changing your search or filters.' : _8, rest = __rest(props, ["component", "resource", "user", "actions", "variant", "style", "href", "url", "searchUrl", "fields", "displayFields", "filterAnchor", "filterOptions", "sortOptions", "enableGoogleMaps", "perPage", "enableSearch", "enableFilters", "enableSorting", "enableInfiniteLoad", "enableLoadMore", "buttonText", "enableBorder", "enableGradient", "enableOverlay", "enableEdit", "enableCreate", "enableDelete", "enableFavorites", "enableRatings", "enableUsers", "filterUser", "filterTeam", "query", "emptyIcon", "emptyTitle", "emptyDescription"]);
    var _9 = (0, frontend_js_1.useDocuments)({
        url: url,
    }), loading = _9.loading, errors = _9.errors, resource = _9.resource, setResource = _9.setResource, update = _9.update, create = _9.create, destroy = _9.destroy, addLinks = _9.addLinks, removeAttachment = _9.removeAttachment, handleDataChange = _9.handleDataChange, flattenDocument = _9.flattenDocument;
    var _10 = (0, hooks_1.useSearch)({
        url: searchUrl,
        user: user,
        perPage: perPage,
        filterUser: filterUser,
        filterTeam: filterTeam,
        query: defaultQuery,
    }), searchLoading = _10.delayedLoading, resources = _10.resources, query = _10.query, reloadMany = _10.reloadMany, page = _10.page, numPages = _10.numPages, loadMore = _10.loadMore, keywords = _10.keywords, handleKeywordChange = _10.handleKeywordChange, handleSearch = _10.handleSearch, handleSortBy = _10.handleSortBy, handleSortDirection = _10.handleSortDirection, activeFilters = _10.activeFilters, handleFilter = _10.handleFilter, handleClearFilters = _10.handleClearFilters;
    var handleNavigate = function (resource) {
        if (href) {
            if (clientUrl && href && (resource === null || resource === void 0 ? void 0 : resource.handle)) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
                router.push("".concat(clientUrl).concat(href, "/").concat(resource === null || resource === void 0 ? void 0 : resource.handle));
            }
        }
        else {
            setActiveResource(resource);
            setOpen(true);
        }
    };
    var _11 = props.handleClick, handleClick = _11 === void 0 ? handleNavigate : _11;
    var _12 = (0, react_1.useState)(false), openModal = _12[0], setOpenModal = _12[1];
    var _13 = (0, react_1.useState)(false), openDeleteModal = _13[0], setOpenDeleteModal = _13[1];
    var handleAdd = function () {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        setResource({
            id: null,
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
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id))
                        return [2 /*return*/];
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
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id))
                        return [2 /*return*/];
                    return [4 /*yield*/, removeAttachment(resource === null || resource === void 0 ? void 0 : resource.id, name)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.CollectionLayout, { loading: loading || searchLoading, header: react_1.default.createElement(components_1.CollectionToolbar, { query: query, activeFilters: activeFilters, enableFilters: enableFilters && filterAnchor == 'top', enableSorting: enableSorting, enableCreate: enableCreate, enableSearch: enableSearch, filterOptions: filterOptions, sortOptions: sortOptions, handleFilter: handleFilter, handleClearFilters: handleClearFilters, handleSortBy: handleSortBy, handleSortDirection: handleSortDirection, handleAdd: handleAdd, keywords: keywords, handleKeywordChange: handleKeywordChange, handleSearch: handleSearch }), expandLeft: enableFilters && filterAnchor == 'left', expandRight: enableGoogleMaps, leftPanel: react_1.default.createElement(components_1.SearchFilters, { filters: activeFilters, filterOptions: filterOptions, handleFilter: handleFilter }), rightPanel: react_1.default.createElement(__1.GoogleMap, { zoom: 15, height: 380, resources: resources, enableBorder: enableBorder, displayFields: displayFields }) },
            react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 2 },
                react_1.default.createElement(RenderList, __assign({ actions: actions, variant: variant, style: style, resources: resources, displayFields: displayFields, handleClick: handleClick, buttonText: buttonText, enableBorder: enableBorder, enableGradient: enableGradient, enableOverlay: enableOverlay, enableEdit: enableEdit, enableDelete: enableDelete, enableUsers: enableUsers, enableFavorites: enableFavorites, enableRatings: enableRatings, handleEdit: handleEdit, handleDelete: handleDeleteClick }, rest)),
                enableLoadMore && (react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, loadMore: loadMore, enableInfiniteLoad: enableInfiniteLoad })))),
        !loading && resources.length == 0 && (react_1.default.createElement(components_1.Placeholder, { enableBorder: true, icon: emptyIcon, title: emptyTitle, description: emptyDescription })),
        react_1.default.createElement(__1.Drawer, { open: openModal, handleClose: function () { return setOpenModal(false); }, title: (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', actions: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(__1.IconLoading, { loading: loading }) }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save') },
            react_1.default.createElement(__1.Form, { loading: loading, errors: errors, fields: fields, resource: flattenDocument(resource), handleChange: handleDataChange, handleRemove: handleRemove })),
        react_1.default.createElement(__1.AlertModal, { open: openDeleteModal, handleClose: function () { return setOpenDeleteModal(false); }, title: "Are you sure you want to delete this item?", description: "This action cannot be reversed.", handleConfirm: handleDelete }),
        react_1.default.createElement(components_1.HeroModal, { open: open, handleClose: function () { return setOpen(false); }, actions: actions, resource: activeResource, url: url, displayFields: displayFields, enableOverlay: enableOverlay, enableEdit: enableEdit, enableFavorites: enableFavorites, enableRatings: enableRatings, enableUsers: enableUsers, handleEdit: function () { return handleEdit(activeResource); } })));
};
exports.default = CollectionContainer;
