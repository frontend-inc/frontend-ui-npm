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
var components_1 = require("../../../components");
var __1 = require("../..");
var ResourceListItem_1 = __importDefault(require("./ResourceListItem"));
var ResourceList = function (props) {
    var _a = props.layout, layout = _a === void 0 ? 'list' : _a, dense = props.dense, _b = props.component, Component = _b === void 0 ? ResourceListItem_1.default : _b, url = props.url, name = props.name, _c = props.fields, fields = _c === void 0 ? [] : _c, _d = props.filterOptions, filterOptions = _d === void 0 ? [] : _d, _e = props.sortOptions, sortOptions = _e === void 0 ? [] : _e, _f = props.query, defaultQuery = _f === void 0 ? {} : _f, _g = props.perPage, perPage = _g === void 0 ? 20 : _g, _h = props.enableSearch, enableSearch = _h === void 0 ? false : _h, _j = props.enableFilters, enableFilters = _j === void 0 ? false : _j, _k = props.enableSorting, enableSorting = _k === void 0 ? false : _k, _l = props.enableLoadMore, enableLoadMore = _l === void 0 ? true : _l, enableEdit = props.enableEdit, enableDelete = props.enableDelete, enableCreate = props.enableCreate, handleClick = props.handleClick, _m = props.emptyIcon, emptyIcon = _m === void 0 ? 'Search' : _m, _o = props.emptyTitle, emptyTitle = _o === void 0 ? 'No results found' : _o, _p = props.emptyDescription, emptyDescription = _p === void 0 ? 'Try adjusting your search or filters' : _p, _q = props.componentProps, componentProps = _q === void 0 ? {} : _q;
    var _r = (0, react_1.useState)(false), openModal = _r[0], setOpenModal = _r[1];
    var _s = (0, react_1.useState)(false), openDeleteModal = _s[0], setOpenDeleteModal = _s[1];
    var _t = (0, frontend_js_1.useResource)({
        name: name,
        url: url,
    }), loading = _t.delayedLoading, errors = _t.errors, resource = _t.resource, resources = _t.resources, setResource = _t.setResource, update = _t.update, create = _t.create, destroy = _t.destroy, handleChange = _t.handleChange, query = _t.query, findMany = _t.findMany, reloadMany = _t.reloadMany, removeAttachment = _t.removeAttachment, page = _t.page, numPages = _t.numPages, loadMore = _t.loadMore;
    var _u = (0, react_1.useState)(''), keywords = _u[0], setKeywords = _u[1];
    var handleKeywordChange = function (ev) {
        setKeywords(ev.target.value);
    };
    var handleSearch = function (keywords) {
        findMany(__assign(__assign(__assign({}, query), defaultQuery), { keywords: keywords, page: 1, per_page: perPage }));
    };
    var handleSort = function (field) {
        findMany(__assign(__assign(__assign({}, query), defaultQuery), { sort_by: field.field }));
    };
    var handleSortDirection = function (sortDirection) {
        findMany(__assign(__assign({}, query), { sort_direction: sortDirection }));
    };
    var _v = (0, hooks_1.useFilters)({
        query: query,
    }), activeFilters = _v.activeFilters, setActiveFilters = _v.setActiveFilters, handleAddFilter = _v.handleAddFilter, buildQueryFilters = _v.buildQueryFilters;
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
        setOpenModal(true);
    };
    var handleEdit = function (item) {
        setResource(item);
        setOpenModal(true);
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
                        setOpenModal(false);
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
    var handleDeleteClick = function (item) {
        setResource(item);
        setOpenDeleteModal(true);
    };
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, destroy(resource === null || resource === void 0 ? void 0 : resource.id)];
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
                case 0: return [4 /*yield*/, removeAttachment(resource === null || resource === void 0 ? void 0 : resource.id, name)];
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
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(material_1.Stack, { direction: { xs: 'column', sm: 'row' }, sx: sx.actions, spacing: 1 },
            react_1.default.createElement(material_1.Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 1 },
                enableSearch && (react_1.default.createElement(components_1.SearchInput, { value: keywords, handleChange: handleKeywordChange, handleSearch: handleSearch })),
                enableFilters && (react_1.default.createElement(material_1.Box, null,
                    react_1.default.createElement(components_1.FilterButton, { filters: activeFilters, handleFilter: handleFilter, handleClear: handleClearFilters, filterOptions: filterOptions }))),
                enableSorting && (react_1.default.createElement(components_1.SortButton, { sortBy: (query === null || query === void 0 ? void 0 : query.sort_by) || 'id', sortDirection: (query === null || query === void 0 ? void 0 : query.sort_direction) || 'desc', sortOptions: sortOptions, handleSortBy: handleSort, handleSortDirection: handleSortDirection }))),
            enableCreate && (react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(material_1.Button, { sx: sx.button, color: "secondary", variant: "contained", onClick: handleAdd, startIcon: react_1.default.createElement(components_1.Icon, { name: "Plus", color: "secondary.contrastText", size: 20 }) }, "Add")))),
        react_1.default.createElement(material_1.Box, { sx: __assign({}, (loading && sx.loading)) },
            react_1.default.createElement(material_1.Stack, { spacing: 2, sx: sx.fullWidth },
                react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.layout), (layout == 'grid' ? sx.grid : sx.list)), (dense && sx.listDense)) }, !loading &&
                    (resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) { return (react_1.default.createElement(Component, __assign({ key: index, layout: layout, resource: resource, handleClick: handleClick ? function () { return handleClick(resource); } : undefined, handleEdit: enableEdit ? function () { return handleEdit(resource); } : undefined, handleDelete: enableDelete ? function () { return handleDeleteClick(resource); } : undefined }, componentProps))); }))))),
        !loading && (resources === null || resources === void 0 ? void 0 : resources.length) == 0 && (react_1.default.createElement(__1.Placeholder, { icon: emptyIcon, title: emptyTitle, description: emptyDescription })),
        react_1.default.createElement(components_1.Loader, { loading: loading }),
        enableLoadMore && (react_1.default.createElement(components_1.LoadMore, { page: page, numPages: numPages, loadMore: loadMore })),
        react_1.default.createElement(components_1.Drawer, { open: openModal, handleClose: function () { return setOpenModal(false); }, title: (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', actions: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save') },
            react_1.default.createElement(components_1.FormFields, { errors: errors, loading: loading, fields: fields, resource: resource, handleChange: handleChange, handleRemove: handleRemove })),
        react_1.default.createElement(components_1.AlertModal, { open: openDeleteModal, handleClose: function () { return setOpenDeleteModal(false); }, title: "Are you sure you want to delete this item?", description: "This action cannot be reversed.", handleConfirm: handleDelete })));
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
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    listDense: {
        gap: '8px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            md: '1fr 1fr 1fr',
            xs: '1fr',
        },
        gap: '16px',
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
    actions: {
        width: '100%',
        justifyContent: 'space-between',
    },
    loading: {
        opacity: 0.7,
    },
    circularProgress: {
        color: 'primary.main',
    },
};
