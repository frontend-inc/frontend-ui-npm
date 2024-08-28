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
var DataList = function (props) {
    var SLOT_PROPS = {
        header: {},
        toolbar: {},
        list: {},
        item: {},
        show: {},
        edit: {},
        create: {},
        destroy: {},
        empty: {},
    };
    var _a = props.grid, grid = _a === void 0 ? false : _a, selectable = props.selectable, resource = props.resource, enableSearch = props.enableSearch, enableShow = props.enableShow, enableCreate = props.enableCreate, enableEdit = props.enableEdit, enableDelete = props.enableDelete, enableAddToList = props.enableAddToList, enableFilters = props.enableFilters, enableSorting = props.enableSorting, href = props.href, url = props.url, foreignUrl = props.foreignUrl, name = props.name, _b = props.query, query = _b === void 0 ? {} : _b, _c = props.fields, fields = _c === void 0 ? [] : _c, _d = props.filterOptions, filterOptions = _d === void 0 ? [] : _d, _e = props.sortOptions, sortOptions = _e === void 0 ? [] : _e, perPage = props.perPage, emptyIcon = props.emptyIcon, emptyTitle = props.emptyTitle, emptyDescription = props.emptyDescription, _f = props.buttons, buttons = _f === void 0 ? [] : _f, _g = props.header, Header = _g === void 0 ? __1.DataHeader : _g, _h = props.toolbar, Toolbar = _h === void 0 ? __1.DataToolbar : _h, _j = props.list, List = _j === void 0 ? __1.DataListItems : _j, _k = props.component, Component = _k === void 0 ? __1.DataItem : _k, _l = props.show, Show = _l === void 0 ? __1.DataShow : _l, _m = props.edit, Edit = _m === void 0 ? __1.DataForm : _m, _o = props.create, Create = _o === void 0 ? __1.DataForm : _o, _p = props.destroy, Delete = _p === void 0 ? __1.DataDelete : _p, _q = props.empty, Empty = _q === void 0 ? __1.DataEmpty : _q, _r = props.slots, slots = _r === void 0 ? SLOT_PROPS : _r, loadMore = props.loadMore, rest = __rest(props, ["grid", "selectable", "resource", "enableSearch", "enableShow", "enableCreate", "enableEdit", "enableDelete", "enableAddToList", "enableFilters", "enableSorting", "href", "url", "foreignUrl", "name", "query", "fields", "filterOptions", "sortOptions", "perPage", "emptyIcon", "emptyTitle", "emptyDescription", "buttons", "header", "toolbar", "list", "component", "show", "edit", "create", "destroy", "empty", "slots", "loadMore"]);
    return (react_1.default.createElement(frontend_js_1.ResourceProvider, { name: name, url: url, foreignUrl: foreignUrl },
        react_1.default.createElement(__1.DataFetcher, { query: query },
            react_1.default.createElement(Header, __assign({ url: url, query: query, enableSearch: enableSearch, enableCreate: enableCreate, enableFilters: enableFilters, enableSorting: enableSorting, filterOptions: filterOptions, sortOptions: sortOptions }, slots.header)),
            react_1.default.createElement(Toolbar, __assign({}, slots.toolbar, { buttons: buttons })),
            react_1.default.createElement(List, { grid: grid, selectable: selectable, href: href, enableEdit: enableEdit, enableDelete: enableDelete, enableAddToList: enableAddToList, component: Component, slots: {
                    list: slots.list,
                    item: slots.item,
                } }),
            react_1.default.createElement(Edit, __assign({ fields: fields, parentResource: resource }, slots.edit)),
            react_1.default.createElement(Create, __assign({ fields: fields, parentResource: resource }, slots.create)),
            react_1.default.createElement(Empty, __assign({ icon: emptyIcon, title: emptyTitle, description: emptyDescription }, slots.empty)),
            react_1.default.createElement(Show, __assign({ enableEdit: enableEdit, enableDelete: enableDelete }, slots.show)),
            react_1.default.createElement(Delete, __assign({ icon: emptyIcon, title: emptyTitle, description: emptyDescription }, slots.destroy)))));
};
exports.default = DataList;
