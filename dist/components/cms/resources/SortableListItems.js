'use client';
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
var SortableListItems = function (props) {
    var _a = props || {}, _b = _a.droppableId, droppableId = _b === void 0 ? 'sortable' : _b, resources = _a.resources, page = _a.page, numPages = _a.numPages, handlePaginate = _a.handlePaginate, handleDrop = _a.handleDrop, renderItem = _a.renderItem, _c = _a.slots, slots = _c === void 0 ? {
        list: {},
        pagination: {},
    } : _c;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
        react_1.default.createElement(__1.SortableList, __assign({ droppableId: droppableId, items: resources, handleDrop: handleDrop, renderItem: renderItem }, slots.list)),
        react_1.default.createElement(__1.LoadMore, __assign({ page: page, numPages: numPages, handlePaginate: function () { return handlePaginate(page + 1); } }, slots.pagination))));
};
exports.default = SortableListItems;
