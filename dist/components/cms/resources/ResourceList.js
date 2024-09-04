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
var ResourceShow_1 = __importDefault(require("./ResourceShow"));
var ResourceItem_1 = __importDefault(require("./ResourceItem"));
var ResourceListItems_1 = __importDefault(require("./ResourceListItems"));
var ResourceHeader_1 = __importDefault(require("./ResourceHeader"));
var ResourceToolbar_1 = __importDefault(require("./ResourceToolbar"));
var ResourceList = function (props) {
    var SLOT_PROPS = {
        list: {},
        item: {},
        edit: {},
        create: {},
        show: {},
        header: {},
        toolbar: {},
        pagination: {},
    };
    var _a = props.grid, grid = _a === void 0 ? false : _a, _b = props.sortable, sortable = _b === void 0 ? false : _b, _c = props.selectable, selectable = _c === void 0 ? false : _c, _d = props.header, Header = _d === void 0 ? ResourceHeader_1.default : _d, _e = props.toolbar, Toolbar = _e === void 0 ? ResourceToolbar_1.default : _e, _f = props.list, List = _f === void 0 ? ResourceListItems_1.default : _f, _g = props.component, Component = _g === void 0 ? ResourceItem_1.default : _g, _h = props.edit, EditForm = _h === void 0 ? ResourceForm_1.default : _h, _j = props.create, CreateForm = _j === void 0 ? ResourceForm_1.default : _j, _k = props.show, ShowModal = _k === void 0 ? ResourceShow_1.default : _k, _l = props.disableInfiniteLoad, disableInfiniteLoad = _l === void 0 ? false : _l, url = props.url, name = props.name, _m = props.headers, headers = _m === void 0 ? [] : _m, _o = props.fields, fields = _o === void 0 ? [] : _o, _p = props.filterOptions, filterOptions = _p === void 0 ? [] : _p, _q = props.sortOptions, sortOptions = _q === void 0 ? [] : _q, _r = props.displayFields, displayFields = _r === void 0 ? [] : _r, _s = props.buttons, buttons = _s === void 0 ? [] : _s, _t = props.query, defaultQuery = _t === void 0 ? {} : _t, _u = props.perPage, perPage = _u === void 0 ? 20 : _u, _v = props.enableSearch, enableSearch = _v === void 0 ? false : _v, enableEdit = props.enableEdit, enableDelete = props.enableDelete, enableCreate = props.enableCreate, enableShow = props.enableShow, handleClick = props.handleClick, _w = props.slots, slots = _w === void 0 ? SLOT_PROPS : _w, _x = props.enableBorder, enableBorder = _x === void 0 ? false : _x, _y = props.direction, direction = _y === void 0 ? 'row' : _y, _z = props.emptyIcon, emptyIcon = _z === void 0 ? 'Search' : _z, _0 = props.emptyTitle, emptyTitle = _0 === void 0 ? 'No results found' : _0, _1 = props.emptyDescription, emptyDescription = _1 === void 0 ? 'Try adjusting your search or filters' : _1;
    var _2 = (0, react_1.useState)(false), openShow = _2[0], setOpenShow = _2[1];
    var _3 = (0, react_1.useState)(false), openCreate = _3[0], setOpenCreate = _3[1];
    var _4 = (0, react_1.useState)(false), openEdit = _4[0], setOpenEdit = _4[1];
    var _5 = (0, react_1.useState)(false), openDelete = _5[0], setOpenDelete = _5[1];
    var _6 = (0, frontend_js_1.useResource)({
        name: name,
        url: url,
    }), loading = _6.delayedLoading, errors = _6.errors, resource = _6.resource, resources = _6.resources, setResource = _6.setResource, update = _6.update, create = _6.create, destroy = _6.destroy, updatePositions = _6.updatePositions, handleChange = _6.handleChange, query = _6.query, findMany = _6.findMany, reloadMany = _6.reloadMany, removeAttachment = _6.removeAttachment, page = _6.page, numPages = _6.numPages, totalCount = _6.totalCount, loadMore = _6.loadMore, paginate = _6.paginate, reloadOne = _6.reloadOne, selected = _6.selected, selectedIds = _6.selectedIds, handleSelect = _6.handleSelect, handleClear = _6.handleClear;
    var _7 = (0, react_1.useState)(''), keywords = _7[0], setKeywords = _7[1];
    var handleKeywordChange = function (ev) {
        setKeywords(ev.target.value);
    };
    var handleSearch = function (keywords) {
        findMany(__assign(__assign(__assign({}, query), defaultQuery), { keywords: keywords, page: 1, per_page: perPage }));
    };
    var handlePaginate = function (page) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!disableInfiniteLoad) return [3 /*break*/, 2];
                    return [4 /*yield*/, loadMore()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, paginate(page)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
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
    var _8 = (0, hooks_1.useFilters)({
        query: query,
    }), activeFilters = _8.activeFilters, setActiveFilters = _8.setActiveFilters, handleAddFilter = _8.handleAddFilter, buildQueryFilters = _8.buildQueryFilters;
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
        setOpenShow(false);
        setOpenEdit(false);
        setOpenCreate(true);
    };
    var handleEdit = function (resource) {
        setResource(resource);
        setOpenShow(false);
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
                        setOpenShow(false);
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
    var handleShowClick = function (resource) { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!handleClick) return [3 /*break*/, 1];
                    handleClick(resource);
                    return [3 /*break*/, 3];
                case 1:
                    if (!enableShow) return [3 /*break*/, 3];
                    return [4 /*yield*/, reloadOne(resource === null || resource === void 0 ? void 0 : resource.id)];
                case 2:
                    resp = _a.sent();
                    setResource(resp);
                    setOpenShow(true);
                    setOpenEdit(false);
                    setOpenCreate(false);
                    _a.label = 3;
                case 3: return [2 /*return*/];
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
                    setOpenShow(false);
                    setOpenEdit(false);
                    setOpenDelete(false);
                    setResource({});
                    return [4 /*yield*/, reloadMany()];
                case 2:
                    _a.sent();
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
    var handleSuccess = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, reloadMany()];
                case 1:
                    _a.sent();
                    handleClear();
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
        react_1.default.createElement(Header, __assign({ selected: selected, direction: direction, enableSearch: enableSearch, enableFilters: enableFilters, enableSorting: enableSorting, enableCreate: enableCreate, handleSearch: handleSearch, handleKeywordChange: handleKeywordChange, handleFilter: handleFilter, handleClearFilters: handleClearFilters, handleSort: handleSort, handleSortDirection: handleSortDirection, handleAdd: handleAdd, keywords: keywords, handleReload: reloadMany, activeFilters: activeFilters, filterOptions: filterOptions, sortOptions: sortOptions, query: query }, slots.header)),
        react_1.default.createElement(Toolbar, __assign({ selected: selected, selectedIds: selectedIds, open: (selected === null || selected === void 0 ? void 0 : selected.length) > 0, handleClose: handleClear, buttons: buttons, onSuccess: handleSuccess, handleReload: reloadMany }, slots.toolbar)),
        react_1.default.createElement(material_1.Box, { sx: __assign({}, (loading && sx.loading)) },
            !sortable ? (react_1.default.createElement(List, __assign({ grid: grid, query: query, headers: headers, page: page, numPages: numPages, totalCount: totalCount, handlePaginate: handlePaginate, handleSort: handleSort, resources: resources, renderItem: function (resource, props) { return (react_1.default.createElement(Component, __assign({ key: resource === null || resource === void 0 ? void 0 : resource.id, selectable: selectable, resource: resource, selected: 
                    //@ts-ignore
                    selectedIds === null || selectedIds === void 0 ? void 0 : selectedIds.includes(resource === null || resource === void 0 ? void 0 : resource.id), enableSelect: selectable, enableBorder: enableBorder, enableEdit: enableEdit, enableDelete: enableDelete, handleClick: function () { return handleShowClick(resource); }, handleEdit: function () { return handleEdit(resource); }, handleDelete: function () { return handleDeleteClick(resource); }, handleSelect: function () { return handleSelect(resource); }, handleReload: reloadMany }, slots.item))); } }, slots.list))) : (react_1.default.createElement(__1.SortableListItems, __assign({ droppableId: "sortable", resources: resources, handleDrop: handleDrop, page: page, numPages: numPages, totalCount: totalCount, handlePaginate: handlePaginate, handleReload: reloadMany, renderItem: function (resource, index) { return (react_1.default.createElement(Component, __assign({ key: index, sortable: true, selectable: selectable, selected: 
                    // @ts-ignore
                    selectedIds === null || selectedIds === void 0 ? void 0 : selectedIds.includes(resource === null || resource === void 0 ? void 0 : resource.id), resource: resource, enableBorder: enableBorder, enableEdit: enableEdit, enableDelete: enableDelete, handleClick: handleClick
                        ? function () { return handleClick(resource); }
                        : function () { return handleShowClick(resource); }, handleEdit: function () { return handleEdit(resource); }, handleDelete: function () { return handleDeleteClick(resource); }, handleSelect: function () { return handleSelect(resource); }, handleReload: reloadMany }, slots.item))); } }, slots.list))),
            !loading && (resources === null || resources === void 0 ? void 0 : resources.length) == 0 && (react_1.default.createElement(__1.Placeholder, { icon: emptyIcon, title: emptyTitle, description: emptyDescription }))),
        react_1.default.createElement(CreateForm, __assign({ open: openCreate, handleClose: function () { return setOpenCreate(false); }, loading: loading, errors: errors, resource: resource, setResource: setResource, handleChange: handleChange, handleRemove: handleRemove, handleSubmit: handleSubmit, handleReload: reloadMany, fields: fields }, slots.create)),
        react_1.default.createElement(EditForm, __assign({ open: openEdit, handleClose: function () { return setOpenEdit(false); }, loading: loading, errors: errors, resource: resource, setResource: setResource, handleChange: handleChange, handleRemove: handleRemove, handleSubmit: handleSubmit, handleReload: reloadMany, fields: fields }, slots.edit)),
        react_1.default.createElement(ShowModal, __assign({ loading: loading, open: openShow, handleClose: function () { return setOpenShow(false); }, fields: displayFields, resource: resource, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: function () { return handleEdit(resource); }, handleDelete: function () { return handleDeleteClick(resource); }, handleReload: reloadMany }, slots.show)),
        react_1.default.createElement(__1.AlertModal, { open: openDelete, handleClose: function () { return setOpenDelete(false); }, title: "Are you sure you want to delete this item?", description: "This action cannot be reversed.", handleConfirm: handleDelete })));
};
exports.default = ResourceList;
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
