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
        edit: {},
        create: {},
        show: {},
        header: {},
        toolbar: {},
        pagination: {},
    };
    var _a = props.sortable, sortable = _a === void 0 ? false : _a, _b = props.selectable, selectable = _b === void 0 ? false : _b, _c = props.header, Header = _c === void 0 ? ResourceHeader_1.default : _c, _d = props.toolbar, Toolbar = _d === void 0 ? ResourceToolbar_1.default : _d, _e = props.list, List = _e === void 0 ? ResourceListItems_1.default : _e, _f = props.component, Component = _f === void 0 ? ResourceItem_1.default : _f, _g = props.edit, EditForm = _g === void 0 ? ResourceForm_1.default : _g, _h = props.create, CreateForm = _h === void 0 ? ResourceForm_1.default : _h, _j = props.show, ShowModal = _j === void 0 ? ResourceShow_1.default : _j, _k = props.disableInfiniteLoad, disableInfiniteLoad = _k === void 0 ? false : _k, url = props.url, name = props.name, _l = props.headers, headers = _l === void 0 ? [] : _l, _m = props.fields, fields = _m === void 0 ? [] : _m, _o = props.filterOptions, filterOptions = _o === void 0 ? [] : _o, _p = props.sortOptions, sortOptions = _p === void 0 ? [] : _p, _q = props.displayFields, displayFields = _q === void 0 ? [] : _q, _r = props.buttons, buttons = _r === void 0 ? [] : _r, _s = props.query, defaultQuery = _s === void 0 ? {} : _s, _t = props.perPage, perPage = _t === void 0 ? 20 : _t, _u = props.enableSearch, enableSearch = _u === void 0 ? false : _u, enableEdit = props.enableEdit, enableDelete = props.enableDelete, enableCreate = props.enableCreate, enableShow = props.enableShow, handleClick = props.handleClick, _v = props.slots, slots = _v === void 0 ? SLOT_PROPS : _v, _w = props.enableBorder, enableBorder = _w === void 0 ? false : _w, _x = props.direction, direction = _x === void 0 ? 'row' : _x, _y = props.emptyIcon, emptyIcon = _y === void 0 ? 'Search' : _y, _z = props.emptyTitle, emptyTitle = _z === void 0 ? 'No results found' : _z, _0 = props.emptyDescription, emptyDescription = _0 === void 0 ? 'Try adjusting your search or filters' : _0;
    var _1 = (0, react_1.useState)(false), openShow = _1[0], setOpenShow = _1[1];
    var _2 = (0, react_1.useState)(false), openCreate = _2[0], setOpenCreate = _2[1];
    var _3 = (0, react_1.useState)(false), openEdit = _3[0], setOpenEdit = _3[1];
    var _4 = (0, react_1.useState)(false), openDelete = _4[0], setOpenDelete = _4[1];
    var _5 = (0, frontend_js_1.useResource)({
        name: name,
        url: url,
    }), loading = _5.delayedLoading, errors = _5.errors, resource = _5.resource, resources = _5.resources, setResource = _5.setResource, update = _5.update, create = _5.create, destroy = _5.destroy, updatePositions = _5.updatePositions, handleChange = _5.handleChange, query = _5.query, findOne = _5.findOne, findMany = _5.findMany, reloadMany = _5.reloadMany, removeAttachment = _5.removeAttachment, page = _5.page, numPages = _5.numPages, totalCount = _5.totalCount, loadMore = _5.loadMore, paginate = _5.paginate, selected = _5.selected, selectedIds = _5.selectedIds, handleSelect = _5.handleSelect, handleClear = _5.handleClear;
    var _6 = (0, react_1.useState)(''), keywords = _6[0], setKeywords = _6[1];
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
    var _7 = (0, hooks_1.useFilters)({
        query: query,
    }), activeFilters = _7.activeFilters, setActiveFilters = _7.setActiveFilters, handleAddFilter = _7.handleAddFilter, buildQueryFilters = _7.buildQueryFilters;
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
                    if (!enableShow) return [3 /*break*/, 2];
                    return [4 /*yield*/, findOne(resource === null || resource === void 0 ? void 0 : resource.id)];
                case 1:
                    resp = _a.sent();
                    setResource(resp);
                    setOpenShow(true);
                    setOpenEdit(false);
                    setOpenCreate(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
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
        react_1.default.createElement(Header, __assign({ selected: selected, direction: direction, enableSearch: enableSearch, enableFilters: enableFilters, enableSorting: enableSorting, enableCreate: enableCreate, handleSearch: handleSearch, handleKeywordChange: handleKeywordChange, handleFilter: handleFilter, handleClearFilters: handleClearFilters, handleSort: handleSort, handleSortDirection: handleSortDirection, handleAdd: handleAdd, keywords: keywords, activeFilters: activeFilters, filterOptions: filterOptions, sortOptions: sortOptions, query: query }, slots.header)),
        react_1.default.createElement(Toolbar, __assign({ selected: selected, selectedIds: selectedIds, open: (selected === null || selected === void 0 ? void 0 : selected.length) > 0, handleClose: handleClear, buttons: buttons, onSuccess: handleSuccess }, slots.toolbar)),
        react_1.default.createElement(material_1.Box, { sx: __assign({}, (loading && sx.loading)) },
            !sortable ? (react_1.default.createElement(List, { query: query, headers: headers, page: page, numPages: numPages, totalCount: totalCount, handlePaginate: handlePaginate, handleSort: handleSort, resources: resources, renderItem: function (resource, props) { return (react_1.default.createElement(Component, __assign({ key: resource === null || resource === void 0 ? void 0 : resource.id, selectable: selectable, resource: resource, selected: 
                    //@ts-ignore
                    selectedIds === null || selectedIds === void 0 ? void 0 : selectedIds.includes(resource === null || resource === void 0 ? void 0 : resource.id), enableSelect: selectable, enableBorder: enableBorder, enableEdit: enableEdit, enableDelete: enableDelete, handleClick: handleClick
                        ? function () { return handleClick(resource); }
                        : function () { return handleShowClick(resource); }, handleEdit: function () { return handleEdit(resource); }, handleDelete: function () { return handleDeleteClick(resource); }, handleSelect: function () { return handleSelect(resource); } }, props, slots.list))); } })) : (react_1.default.createElement(__1.SortableListItems, { droppableId: "sortable", resources: resources, handleDrop: handleDrop, page: page, numPages: numPages, totalCount: totalCount, handlePaginate: handlePaginate, renderItem: function (resource, index) { return (react_1.default.createElement(Component, __assign({ key: index, sortable: true, selectable: selectable, selected: 
                    // @ts-ignore
                    selectedIds === null || selectedIds === void 0 ? void 0 : selectedIds.includes(resource === null || resource === void 0 ? void 0 : resource.id), resource: resource, enableBorder: enableBorder, enableEdit: enableEdit, enableDelete: enableDelete, handleClick: handleClick
                        ? function () { return handleClick(resource); }
                        : function () { return handleShowClick(resource); }, handleEdit: function () { return handleEdit(resource); }, handleDelete: function () { return handleDeleteClick(resource); }, handleSelect: function () { return handleSelect(resource); } }, slots.list))); } })),
            !loading && (resources === null || resources === void 0 ? void 0 : resources.length) == 0 && (react_1.default.createElement(__1.Placeholder, { icon: emptyIcon, title: emptyTitle, description: emptyDescription }))),
        react_1.default.createElement(CreateForm, __assign({ open: openCreate, handleClose: function () { return setOpenCreate(false); }, loading: loading, errors: errors, resource: resource, handleChange: handleChange, handleRemove: handleRemove, handleSubmit: handleSubmit, fields: fields }, slots.create)),
        react_1.default.createElement(EditForm, __assign({ open: openEdit, handleClose: function () { return setOpenEdit(false); }, loading: loading, errors: errors, resource: resource, handleChange: handleChange, handleRemove: handleRemove, handleSubmit: handleSubmit, fields: fields }, slots.edit)),
        react_1.default.createElement(ShowModal, __assign({ loading: loading, open: openShow, handleClose: function () { return setOpenShow(false); }, fields: displayFields, resource: resource, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: function () { return handleEdit(resource); }, handleDelete: function () { return handleDeleteClick(resource); } }, slots.show)),
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
