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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var context_1 = require("../../../context");
var router_1 = require("next/router");
var SearchFilters_1 = __importDefault(require("../filters/SearchFilters"));
var helpers_1 = require("../../../helpers");
var components_2 = require("../../../components");
var frontend_js_2 = require("frontend-js");
var CollectionTable = function (props) {
    var router = (0, router_1.useRouter)();
    var _a = (0, react_1.useContext)(context_1.AppContext), clientUrl = _a.clientUrl, setAuthOpen = _a.setAuthOpen;
    var currentUser = (0, frontend_js_2.useAuth)().currentUser;
    var url = props.url, fields = props.fields, headers = props.headers, _b = props.filterAnchor, filterAnchor = _b === void 0 ? 'left' : _b, _c = props.filterOptions, filterOptions = _c === void 0 ? [] : _c, _d = props.query, defaultQuery = _d === void 0 ? {} : _d, _e = props.perPage, perPage = _e === void 0 ? 20 : _e, _f = props.enableSearch, enableSearch = _f === void 0 ? false : _f, _g = props.enableFilters, enableFilters = _g === void 0 ? false : _g, href = props.href, _h = props.enableBorder, enableBorder = _h === void 0 ? false : _h, _j = props.enableEdit, enableEdit = _j === void 0 ? false : _j, _k = props.enableCreate, enableCreate = _k === void 0 ? false : _k, _l = props.enableDelete, enableDelete = _l === void 0 ? false : _l, _m = props.filterUser, filterUser = _m === void 0 ? false : _m, _o = props.filterTeam, filterTeam = _o === void 0 ? false : _o;
    var _p = (0, react_1.useState)(false), openModal = _p[0], setOpenModal = _p[1];
    var _q = (0, react_1.useState)(false), openDeleteModal = _q[0], setOpenDeleteModal = _q[1];
    var _r = (0, frontend_js_1.useDocuments)({
        url: url
    }), loading = _r.loading, delayedLoading = _r.delayedLoading, errors = _r.errors, resource = _r.resource, resources = _r.resources, setResource = _r.setResource, update = _r.update, create = _r.create, destroy = _r.destroy, handleDataChange = _r.handleDataChange, query = _r.query, findMany = _r.findMany, reloadMany = _r.reloadMany, removeAttachment = _r.removeAttachment, page = _r.page, numPages = _r.numPages, numResults = _r.numResults, totalCount = _r.totalCount, paginate = _r.paginate;
    var _s = (0, react_1.useState)(''), keywords = _s[0], setKeywords = _s[1];
    var handleKeywordChange = function (ev) {
        setKeywords(ev.target.value);
    };
    var handleSearch = function (keywords) {
        findMany(__assign(__assign(__assign({}, query), defaultQuery), { keywords: keywords, page: 1, per_page: perPage }));
    };
    var handlePaginate = function (ev, page) {
        paginate(page);
    };
    var handleSort = function (field) {
        var sortBy = field === null || field === void 0 ? void 0 : field.name;
        var sortDir = query === null || query === void 0 ? void 0 : query.sort_direction;
        if (sortBy == (query === null || query === void 0 ? void 0 : query.sort_by)) {
            sortDir = (query === null || query === void 0 ? void 0 : query.sort_direction) == 'asc' ? 'desc' : 'asc';
        }
        findMany(__assign(__assign({}, query), { sort_by: sortBy, sort_direction: sortDir }));
    };
    var _t = (0, hooks_1.useFilters)({
        query: query,
    }), queryFilters = _t.queryFilters, activeFilters = _t.activeFilters, setActiveFilters = _t.setActiveFilters, handleAddFilter = _t.handleAddFilter, mergeAllFilters = _t.mergeAllFilters, buildUserFilters = _t.buildUserFilters;
    // Filter methods
    var handleClearFilters = function () {
        setActiveFilters([]);
        findMany({
            filters: mergeAllFilters(__spreadArray(__spreadArray([], defaultQuery.filters, true), [
                currentUserFilter,
            ], false)),
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
    var handleClick = function (item) {
        if (clientUrl && href && (item === null || item === void 0 ? void 0 : item.handle)) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            router.push("".concat(clientUrl).concat(href, "/").concat(item === null || item === void 0 ? void 0 : item.handle));
        }
    };
    var handleAdd = function () {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        setResource({});
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
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, destroy(resource.id)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
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
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, removeAttachment(resource.id, name)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
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
        defaultQuery, ,
    ]);
    var _u = (0, react_1.useState)([]), rows = _u[0], setRows = _u[1];
    (0, react_1.useEffect)(function () {
        if ((resources === null || resources === void 0 ? void 0 : resources.length) >= 0) {
            var flatten = (0, helpers_1.flattenDocuments)(resources);
            setRows(flatten);
        }
    }, [resources]);
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 0 },
            enableFilters && filterAnchor == 'left' && (react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: 4, lg: 3 },
                react_1.default.createElement(material_1.Box, { sx: sx.filtersContainer },
                    react_1.default.createElement(SearchFilters_1.default, { filters: activeFilters, filterOptions: filterOptions, handleFilter: handleFilter })))),
            react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: enableFilters && filterAnchor == 'left' ? 8 : 12, lg: enableFilters && filterAnchor == 'left' ? 9 : 12 },
                react_1.default.createElement(material_1.Box, { sx: __assign({}, (delayedLoading && sx.loading)) },
                    react_1.default.createElement(components_2.TableList, { toolbar: react_1.default.createElement(material_1.Stack, { direction: { xs: 'column', sm: 'row' }, sx: sx.toolbar, spacing: 1 },
                            enableSearch && (react_1.default.createElement(components_1.SearchInput, { value: keywords, handleChange: handleKeywordChange, handleSearch: handleSearch })),
                            enableFilters && filterAnchor == 'top' && (react_1.default.createElement(material_1.Box, { sx: sx.fullWidth },
                                react_1.default.createElement(components_1.FilterButton, { filters: activeFilters, handleFilter: handleFilter, handleClear: handleClearFilters, filterOptions: filterOptions }))),
                            enableCreate && (react_1.default.createElement(material_1.Box, { sx: sx.fullWidth },
                                react_1.default.createElement(material_1.Button, { sx: sx.button, color: "secondary", variant: "contained", onClick: handleAdd, startIcon: react_1.default.createElement(components_1.Icon, { name: "Plus", color: "secondary.contrastText", size: 20 }) }, "Add")))), enableBorder: enableBorder, enableEdit: enableEdit, handleEdit: handleEdit, enableDelete: enableDelete, handleDelete: handleDeleteClick, loading: resources && loading, fields: headers, rows: rows, handleClick: handleClick, query: query, handleSort: handleSort, page: page, perPage: perPage, numPages: numPages, numResults: numResults, totalCount: totalCount, handlePaginate: handlePaginate })))),
        react_1.default.createElement(components_1.Drawer, { open: openModal, handleClose: function () { return setOpenModal(false); }, title: (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', actions: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save') },
            react_1.default.createElement(components_1.Form, { loading: loading, errors: errors, fields: fields, resource: (0, helpers_1.flattenDocument)(resource), handleChange: handleDataChange, handleRemove: handleRemove })),
        react_1.default.createElement(components_1.AlertModal, { open: openDeleteModal, handleClose: function () { return setOpenDeleteModal(false); }, title: "Are you sure you want to delete this item?", description: "This action cannot be reversed.", handleConfirm: handleDelete })));
};
exports.default = CollectionTable;
var sx = {
    root: {
        width: '100%',
    },
    content: {
        width: '100%',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            md: '1fr 1fr 1fr',
            xs: '1fr',
        },
        gap: '16px',
    },
    item: {
        p: 2,
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
    toolbar: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    loading: {
        opacity: 0.7,
    },
    circularProgress: {
        color: 'primary.main',
    },
    fullWidth: {
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
};
