"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
var ProductListItem = function (props) {
    var _a;
    var _b = props || {}, product = _b.resource, enableDelete = _b.enableDelete, sortable = _b.sortable, selectable = _b.selectable, handleSelect = _b.handleSelect, selected = _b.selected, handleDelete = _b.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { sortable: sortable, selectable: selectable, image: (_a = product === null || product === void 0 ? void 0 : product.image) === null || _a === void 0 ? void 0 : _a.url, primary: product === null || product === void 0 ? void 0 : product.title, selected: selected, handleSelect: handleSelect, handleDelete: enableDelete ? handleDelete : undefined }));
};
exports.default = ProductListItem;
