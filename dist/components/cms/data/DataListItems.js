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
    var enableShow = props.enableShow, enableEdit = props.enableEdit, enableDelete = props.enableDelete, handleShow = props.handleShow, handleClick = props.handleClick, _c = props.pagination, Pagination = _c === void 0 ? __1.LoadMore : _c, _d = props.component, Component = _d === void 0 ? __2.DataListItem : _d, _e = props.slots, slots = _e === void 0 ? {
        item: {},
        list: {},
    } : _e, rest = __rest(props, ["enableShow", "enableEdit", "enableDelete", "handleShow", "handleClick", "pagination", "component", "slots"]);
    var _f = (0, hooks_1.useForms)(), handleEdit = _f.handleEdit, handleDeleteClick = _f.handleDeleteClick;
    var handleShowClick = function (resource) {
        if (enableShow) {
            setResource(resource);
            setOpenShow(true);
        }
    };
    var handleLoadMore = function () {
        var perPage = ((query === null || query === void 0 ? void 0 : query.per_page) || 12) + 12;
        setQuery(__assign(__assign({}, query), { per_page: perPage }));
    };
    return (react_1.default.createElement(__2.DataLayout, __assign({}, slots.list, { loading: loading }), resources === null || resources === void 0 ? void 0 :
        resources.map(function (resource, index) {
            var _a;
            return (react_1.default.createElement(Component, __assign({ key: index, label: resource === null || resource === void 0 ? void 0 : resource.label, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, primary: resource === null || resource === void 0 ? void 0 : resource.title, secondary: resource === null || resource === void 0 ? void 0 : resource.description, handleClick: handleClick ?
                    function () { return handleClick(resource); } :
                    function () { return handleShowClick(resource); }, enableShow: enableShow, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: enableEdit ? function () { return handleEdit(resource); } : undefined, handleDelete: enableDelete ? function () { return handleDeleteClick(resource); } : undefined }, slots.item)));
        }),
        react_1.default.createElement(Pagination, { page: page, numPages: numPages, loadMore: handleLoadMore })));
};
exports.default = DataListItems;