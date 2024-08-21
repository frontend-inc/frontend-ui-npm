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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var __1 = require("../..");
var ResourceForm_1 = __importDefault(require("./ResourceForm"));
var ResourceList_1 = __importDefault(require("./ResourceList"));
var ResourceListItem_1 = __importDefault(require("./ResourceListItem"));
var ResourceToolbar_1 = __importDefault(require("./ResourceToolbar"));
var Resources = function (props) {
    var _a = props.toolbar, Toolbar = _a === void 0 ? ResourceToolbar_1.default : _a, _b = props.list, List = _b === void 0 ? ResourceList_1.default : _b, _c = props.component, Component = _c === void 0 ? ResourceListItem_1.default : _c, _d = props.edit, EditForm = _d === void 0 ? ResourceForm_1.default : _d, _e = props.create, CreateForm = _e === void 0 ? ResourceForm_1.default : _e, url = props.url, name = props.name, _f = props.headers, headers = _f === void 0 ? [] : _f, _g = props.fields, fields = _g === void 0 ? [] : _g, _h = props.filterOptions, filterOptions = _h === void 0 ? [] : _h, _j = props.sortOptions, sortOptions = _j === void 0 ? [] : _j, _k = props.query, defaultQuery = _k === void 0 ? {} : _k, _l = props.perPage, perPage = _l === void 0 ? 20 : _l, _m = props.enableSearch, enableSearch = _m === void 0 ? false : _m, enableEdit = props.enableEdit, enableDelete = props.enableDelete, enableCreate = props.enableCreate, handleClick = props.handleClick, _o = props.enableBorder, enableBorder = _o === void 0 ? false : _o, _p = props.direction, direction = _p === void 0 ? 'row' : _p, _q = props.emptyIcon, emptyIcon = _q === void 0 ? 'Search' : _q, _r = props.emptyTitle, emptyTitle = _r === void 0 ? 'No results found' : _r, _s = props.emptyDescription, emptyDescription = _s === void 0 ? 'Try adjusting your search or filters' : _s;
    var _t = (0, react_1.useState)(false), openCreate = _t[0], setOpenCreate = _t[1];
    var _u = (0, react_1.useState)(false), openEdit = _u[0], setOpenEdit = _u[1];
    var _v = (0, react_1.useState)(false), openDelete = _v[0], setOpenDelete = _v[1];
    var _w = (0, frontend_js_1.useResource)({
        name: name,
        url: url,
    }), loading = _w.delayedLoading, errors = _w.errors, resource = _w.resource, resources = _w.resources, setResource = _w.setResource, update = _w.update, create = _w.create, destroy = _w.destroy, updatePositions = _w.updatePositions, handleChange = _w.handleChange, query = _w.query, findMany = _w.findMany, reloadMany = _w.reloadMany, removeAttachment = _w.removeAttachment, page = _w.page, numPages = _w.numPages, loadMore = _w.loadMore;
    var _x = (0, react_1.useState)(''), keywords = _x[0], setKeywords = _x[1];
    var handleKeywordChange = function (ev) {
        setKeywords(ev.target.value);
    };
    var handleSearch = function (keywords) {
        findMany(__assign(__assign(__assign({}, query), defaultQuery), { keywords: keywords, page: 1, per_page: perPage }));
    };
    var handleSort = function (field) {
        var sortBy = field === null || field === void 0 ? void 0 : field.name;
        var sortDir = query === null || query === void 0 ? void 0 : query.sort_direction;
        if (sortBy == (query === null || query === void 0 ? void 0 : query.sort_by)) {
            sortDir = (query === null || query === void 0 ? void 0 : query.sort_direction) == 'asc' ? 'desc' : 'asc';
        }
        findMany(__assign(__assign({}, query), { sort_by: sortBy, sort_direction: sortDir }));
    };
    var handleSortDirection = function (sortDirection) {
        findMany(__assign(__assign({}, query), { sort_direction: sortDirection }));
    };
    var _y = (0, hooks_1.useFilters)({
        query: query,
    }), activeFilters = _y.activeFilters, setActiveFilters = _y.setActiveFilters, handleAddFilter = _y.handleAddFilter, buildQueryFilters = _y.buildQueryFilters;
    // Filter methods
    var handleClearFilters = function () {
        setActiveFilters([]);
        findMany({
            filters: __assign({}, defaultQuery === null || defaultQuery === void 0 ? void 0 : defaultQuery.filters),
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
        setResource({});
        setOpenEdit(false);
        setOpenCreate(true);
    };
    var handleEdit = function (resource) {
        setResource(resource);
        setOpenCreate(false);
        setOpenEdit(true);
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    resp = void 0;
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, update(resource)];
                case 1:
                    resp = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, create(resource)];
                case 3:
                    resp = _a.sent();
                    _a.label = 4;
                case 4:
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setResource({});
                        setOpenCreate(false);
                        setOpenEdit(false);
                        reloadMany();
                    }
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.log('Error', err_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteClick = function (resource) {
        setResource(resource);
        setOpenEdit(false);
        setOpenCreate(false);
        setOpenDelete(true);
    };
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, destroy(resource === null || resource === void 0 ? void 0 : resource.id)];
                case 1:
                    _a.sent();
                    setOpenDelete(false);
                    setResource({});
                    reloadMany();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleRemove = function (name) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, removeAttachment(resource === null || resource === void 0 ? void 0 : resource.id, name)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDrop = function (sorted) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updatePositions(sorted)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (activeFilters) {
            findMany(__assign(__assign(__assign({}, query), { filters: buildQueryFilters(activeFilters) }), defaultQuery));
        }
    }, [activeFilters === null || activeFilters === void 0 ? void 0 : activeFilters.length]);
    (0, react_1.useEffect)(function () {
        if (url && name && perPage) {
            findMany(__assign(__assign({}, defaultQuery), { per_page: perPage }));
        }
    }, [url, name, perPage]);
    var enableFilters = (filterOptions === null || filterOptions === void 0 ? void 0 : filterOptions.length) > 0;
    var enableSorting = (sortOptions === null || sortOptions === void 0 ? void 0 : sortOptions.length) > 0;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(Toolbar, { direction: direction, enableSearch: enableSearch, enableFilters: enableFilters, enableSorting: enableSorting, enableCreate: enableCreate, handleSearch: handleSearch, handleKeywordChange: handleKeywordChange, handleFilter: handleFilter, handleClearFilters: handleClearFilters, handleSort: handleSort, handleSortDirection: handleSortDirection, handleAdd: handleAdd, keywords: keywords, activeFilters: activeFilters, filterOptions: filterOptions, sortOptions: sortOptions, query: query }),
        react_1.default.createElement(material_1.Box, { sx: __assign({}, (loading && sx.loading)) },
            react_1.default.createElement(List, { query: query, headers: headers, resources: resources, page: page, numPages: numPages, enableBorder: enableBorder, enableEdit: enableEdit, enableDelete: enableDelete, handleClick: handleClick ? handleClick : undefined, handleEdit: handleEdit, handleDelete: handleDeleteClick, handleDrop: handleDrop, handleSort: handleSort, handleLoadMore: loadMore, component: Component }),
            !loading && (resources === null || resources === void 0 ? void 0 : resources.length) == 0 && (react_1.default.createElement(__1.Placeholder, { icon: emptyIcon, title: emptyTitle, description: emptyDescription }))),
        react_1.default.createElement(CreateForm, { open: openCreate, handleClose: function () { return setOpenCreate(false); }, loading: loading, errors: errors, resource: resource, handleChange: handleChange, handleRemove: handleRemove, handleSubmit: handleSubmit, fields: fields }),
        react_1.default.createElement(EditForm, { open: openEdit, handleClose: function () { return setOpenEdit(false); }, loading: loading, errors: errors, resource: resource, handleChange: handleChange, handleRemove: handleRemove, handleSubmit: handleSubmit, fields: fields }),
        react_1.default.createElement(__1.AlertModal, { open: openDelete, handleClose: function () { return setOpenDelete(false); }, title: "Are you sure you want to delete this item?", description: "This action cannot be reversed.", handleConfirm: handleDelete })));
};
exports.default = Resources;
var sx = {
    root: {
        width: '100%',
    },
    content: {
        width: '100%',
    },
    layout: {
        width: '100%',
    },
    form: {
        width: '100%',
    },
    fullWidth: {
        width: '100%',
    },
    item: {
        p: 2,
    },
    loading: {
        opacity: 0.5,
    },
};
