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
var frontend_js_1 = require("frontend-js");
var __1 = require("../..");
var frontend_js_2 = require("frontend-js");
var hooks_1 = require("../../../hooks");
var __2 = require("../..");
var material_1 = require("@mui/material");
var context_1 = require("../../../context");
var frontend_js_3 = require("frontend-js");
var CollectionKanBan = function (props) {
    var setAuthOpen = (0, react_1.useContext)(context_1.AppContext).setAuthOpen;
    var currentUser = (0, frontend_js_2.useAuth)().currentUser;
    var url = props.url, searchUrl = props.searchUrl, headers = props.headers, _a = props.fields, fields = _a === void 0 ? [] : _a, _resource = props.resource, _b = props.displayFields, displayFields = _b === void 0 ? [] : _b, _c = props.actions, actions = _c === void 0 ? [] : _c, _d = props.enableOverlay, enableOverlay = _d === void 0 ? false : _d, enableEdit = props.enableEdit, enableDelete = props.enableDelete, enableCreate = props.enableCreate, enableFavorites = props.enableFavorites, enableRatings = props.enableRatings, enableUsers = props.enableUsers, _e = props.enableSearch, enableSearch = _e === void 0 ? false : _e, _f = props.enableFilters, enableFilters = _f === void 0 ? false : _f, _g = props.enableSorting, enableSorting = _g === void 0 ? false : _g, _h = props.filterOptions, filterOptions = _h === void 0 ? [] : _h, _j = props.sortOptions, sortOptions = _j === void 0 ? [] : _j, _k = props.filterUser, filterUser = _k === void 0 ? false : _k, _l = props.filterTeam, filterTeam = _l === void 0 ? false : _l, emptyIcon = props.emptyIcon, _m = props.emptyTitle, emptyTitle = _m === void 0 ? 'No results found' : _m, _o = props.emptyDescription, emptyDescription = _o === void 0 ? 'Try changing your search or filters.' : _o, rest = __rest(props, ["url", "searchUrl", "headers", "fields", "resource", "displayFields", "actions", "enableOverlay", "enableEdit", "enableDelete", "enableCreate", "enableFavorites", "enableRatings", "enableUsers", "enableSearch", "enableFilters", "enableSorting", "filterOptions", "sortOptions", "filterUser", "filterTeam", "emptyIcon", "emptyTitle", "emptyDescription"]);
    var fieldName = 'status'; //Hard code the field as status
    var _p = (0, frontend_js_1.useDocuments)({
        url: url
    }), loading = _p.loading, delayedLoading = _p.delayedLoading, errors = _p.errors, resource = _p.resource, setResource = _p.setResource, create = _p.create, update = _p.update, destroy = _p.destroy, handleDataChange = _p.handleDataChange, removeAttachment = _p.removeAttachment, addLinks = _p.addLinks, updatePositions = _p.updatePositions;
    var _q = (0, hooks_1.useSearch)({
        url: searchUrl,
        user: currentUser,
        perPage: 1000,
        filterUser: filterUser,
        filterTeam: filterTeam,
        query: {},
    }), resources = _q.resources, query = _q.query, keywords = _q.keywords, handleKeywordChange = _q.handleKeywordChange, handleSearch = _q.handleSearch, handleSortBy = _q.handleSortBy, handleSortDirection = _q.handleSortDirection, reloadMany = _q.reloadMany, activeFilters = _q.activeFilters, handleFilter = _q.handleFilter, handleClearFilters = _q.handleClearFilters;
    var _r = (0, react_1.useState)(false), open = _r[0], setOpen = _r[1];
    var _s = (0, react_1.useState)(false), openModal = _s[0], setOpenModal = _s[1];
    var _t = (0, react_1.useState)(false), openDeleteModal = _t[0], setOpenDeleteModal = _t[1];
    var _u = (0, react_1.useState)(), activeResource = _u[0], setActiveResource = _u[1];
    var handleClick = function (resource) {
        setActiveResource(resource);
        setOpen(true);
    };
    var handleAdd = function (columnName) {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        var newResource = (0, frontend_js_3.changeDocumentValue)({}, fieldName, columnName);
        setResource(newResource);
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
                    _a.trys.push([1, 10, , 11]);
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
                    if (!(resp === null || resp === void 0 ? void 0 : resp.id)) return [3 /*break*/, 9];
                    if (!(_resource === null || _resource === void 0 ? void 0 : _resource.id)) return [3 /*break*/, 7];
                    return [4 /*yield*/, addLinks(resp.id, [_resource === null || _resource === void 0 ? void 0 : _resource.id])];
                case 6:
                    _a.sent();
                    reloadMany();
                    _a.label = 7;
                case 7:
                    setResource({});
                    setOpenModal(false);
                    return [4 /*yield*/, reloadMany()];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    err_1 = _a.sent();
                    console.log('Error', err_1);
                    return [3 /*break*/, 11];
                case 11: return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteClick = function (item) {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        setActiveResource(item);
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
                    return [4 /*yield*/, destroy(resource.id)];
                case 1:
                    _a.sent();
                    setOpenDeleteModal(false);
                    setOpenModal(false);
                    return [4 /*yield*/, reloadMany()];
                case 2:
                    _a.sent();
                    setResource({});
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
    var handleDrop = function (movedItem, value, columns) { return __awaiter(void 0, void 0, void 0, function () {
        var movedDocument, columnItems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setActiveResource(null);
                    movedDocument = (0, frontend_js_3.changeDocumentValue)(movedItem, fieldName, value);
                    return [4 /*yield*/, update(movedDocument)];
                case 1:
                    _a.sent();
                    columnItems = Object.keys(columns).map(function (key) { return columns[key]; });
                    columnItems = columnItems.reduce(function (acc, val) { return acc.concat(val); }, []);
                    columnItems = columnItems.map(function (item, index) {
                        return __assign(__assign({}, item), { position: index });
                    });
                    return [4 /*yield*/, updatePositions(columnItems)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, reloadMany()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    if (!headers || !fieldName)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Box, { px: 0.5 },
            react_1.default.createElement(__1.CollectionToolbar, { query: query, activeFilters: activeFilters, enableFilters: enableFilters, enableSorting: enableSorting, enableSearch: enableSearch, filterOptions: filterOptions, sortOptions: sortOptions, handleFilter: handleFilter, handleClearFilters: handleClearFilters, handleSortBy: handleSortBy, handleSortDirection: handleSortDirection, keywords: keywords, handleKeywordChange: handleKeywordChange, handleSearch: handleSearch })),
        react_1.default.createElement(__1.KanBan, { loading: delayedLoading, actions: actions, resources: resources, activeResource: activeResource, headers: headers, fieldName: fieldName, displayFields: displayFields, handleClick: handleClick, handleDrop: handleDrop, enableEdit: enableEdit, enableDelete: enableEdit, enableCreate: enableCreate, handleEdit: handleEdit, handleDelete: handleDeleteClick, handleAdd: handleAdd, enableFavorites: enableFavorites, enableRatings: enableRatings }),
        react_1.default.createElement(__2.Drawer, { open: openModal, handleClose: function () { return setOpenModal(false); }, title: (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', actions: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(__2.IconLoading, { loading: loading }) }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save') },
            react_1.default.createElement(__2.Form, { loading: loading, errors: errors, fields: fields, resource: (0, frontend_js_3.flattenDocument)(resource), handleChange: handleDataChange, handleRemove: handleRemove })),
        react_1.default.createElement(__2.AlertModal, { open: openDeleteModal, handleClose: function () { return setOpenDeleteModal(false); }, title: "Are you sure you want to delete this item?", description: "This action cannot be reversed.", handleConfirm: handleDelete }),
        react_1.default.createElement(__2.HeroModal, { open: open, handleClose: function () { return setOpen(false); }, actions: actions, resource: activeResource, url: url, displayFields: displayFields, enableOverlay: enableOverlay, enableEdit: enableEdit, enableFavorites: enableFavorites, enableRatings: enableRatings, handleEdit: function () { return handleEdit(activeResource); } })));
};
exports.default = CollectionKanBan;
