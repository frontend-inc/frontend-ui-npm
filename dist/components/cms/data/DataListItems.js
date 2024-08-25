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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var __2 = require("../..");
var hooks_1 = require("../../../hooks");
var DataListItems = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), setResource = _a.setResource, loading = _a.loading, resources = _a.resources, page = _a.page, numPages = _a.numPages, _b = _a.query, query = _b === void 0 ? {} : _b, setQuery = _a.setQuery, setOpenShow = _a.setOpenShow;
    var enableShow = props.enableShow, enableEdit = props.enableEdit, enableDelete = props.enableDelete, handleClick = props.handleClick, _c = props.pagination, Pagination = _c === void 0 ? __1.LoadMore : _c, _d = props.component, Component = _d === void 0 ? __2.DataItem : _d, _e = props.slots, slots = _e === void 0 ? {
        item: {},
        list: {},
    } : _e;
    var _f = (0, hooks_1.useForms)(), handleShow = _f.handleShow, handleEdit = _f.handleEdit, handleDeleteClick = _f.handleDeleteClick;
    var handleShowClick = function (resource) {
        if (handleClick) {
            handleClick(resource);
        }
        else if (enableShow) {
            handleShow(resource);
        }
    };
    var handlePaginate = function () {
        var perPage = ((query === null || query === void 0 ? void 0 : query.per_page) || 12) + 12;
        setQuery(__assign(__assign({}, query), { per_page: perPage }));
    };
    return (react_1.default.createElement(__2.DataLayout, __assign({}, slots.list, { loading: loading }), resources === null || resources === void 0 ? void 0 :
        resources.map(function (resource, index) { return (react_1.default.createElement(Component, __assign({ key: index, resource: resource, handleClick: function () { return handleShowClick(resource); }, enableShow: enableShow, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: enableEdit ? function () { return handleEdit(resource); } : undefined, handleDelete: enableDelete ? function () { return handleDeleteClick(resource); } : undefined }, slots.item))); }),
        react_1.default.createElement(Pagination, { page: page, numPages: numPages, handlePaginate: handlePaginate })));
};
exports.default = DataListItems;
