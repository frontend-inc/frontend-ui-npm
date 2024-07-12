"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
var SortableDocumentLinkItem_1 = __importDefault(require("./SortableDocumentLinkItem"));
var SortableDocumentLinks = function (props) {
    var _a = props || {}, documentLinks = _a.documentLinks, handleDrop = _a.handleDrop, handleDelete = _a.handleDelete, handleEdit = _a.handleEdit;
    var sorted = documentLinks === null || documentLinks === void 0 ? void 0 : documentLinks.sort(function (a, b) { return a.position - b.position; });
    if (!sorted)
        return null;
    return (react_1.default.createElement(components_1.SortableList, { droppableId: 'document-links', items: sorted, handleDrop: handleDrop, renderItem: function (link) {
            var _a, _b, _c, _d;
            return (react_1.default.createElement(SortableDocumentLinkItem_1.default, { key: link.id, image: (_b = (_a = link === null || link === void 0 ? void 0 : link.target) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.url, title: (_c = link === null || link === void 0 ? void 0 : link.target) === null || _c === void 0 ? void 0 : _c.title, subtitle: (_d = link === null || link === void 0 ? void 0 : link.target) === null || _d === void 0 ? void 0 : _d.content_type, isDragging: link === null || link === void 0 ? void 0 : link.isDragging, handleDelete: function () { return handleDelete(link === null || link === void 0 ? void 0 : link.target); }, handleEdit: function () { return handleEdit(link === null || link === void 0 ? void 0 : link.target); } }));
        } }));
};
exports.default = SortableDocumentLinks;
