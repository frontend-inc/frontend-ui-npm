'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var ResourceListItems = function (props) {
    var _a = props || {}, page = _a.page, _b = _a.grid, grid = _b === void 0 ? false : _b, numPages = _a.numPages, handlePaginate = _a.handlePaginate, resources = _a.resources, renderItem = _a.renderItem;
    return (react_1.default.createElement("div", { className: "w-full flex flex-col space-y-3" },
        !grid ? (react_1.default.createElement("ul", { className: "flex flex-col space-y-2" }, resources === null || resources === void 0 ? void 0 : resources.map(function (resource) { return renderItem(resource, props); }))) : (react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" }, resources === null || resources === void 0 ? void 0 : resources.map(function (resource) { return renderItem(resource, props); }))),
        react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, handlePaginate: function () { return handlePaginate(page + 1); } })));
};
exports.default = ResourceListItems;
