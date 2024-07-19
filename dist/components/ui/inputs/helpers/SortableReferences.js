"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../../..");
var SortableReferenceItem_1 = __importDefault(require("./SortableReferenceItem"));
var SortableReferences = function (props) {
    var _a = props || {}, references = _a.references, handleDrop = _a.handleDrop, handleDelete = _a.handleDelete, handleEdit = _a.handleEdit;
    var sorted = references === null || references === void 0 ? void 0 : references.sort(function (a, b) { return a.position - b.position; });
    if (!sorted)
        return null;
    return (react_1.default.createElement(__1.SortableList, { droppableId: 'document-references', items: sorted, handleDrop: handleDrop, renderItem: function (reference) {
            var _a, _b, _c;
            return (react_1.default.createElement(SortableReferenceItem_1.default, { key: reference.id, image: (_b = (_a = reference === null || reference === void 0 ? void 0 : reference.target) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.url, title: (_c = reference === null || reference === void 0 ? void 0 : reference.target) === null || _c === void 0 ? void 0 : _c.title, isDragging: reference === null || reference === void 0 ? void 0 : reference.isDragging, handleDelete: function () { return handleDelete(reference === null || reference === void 0 ? void 0 : reference.target); }, handleEdit: function () { return handleEdit(reference === null || reference === void 0 ? void 0 : reference.target); } }));
        } }));
};
exports.default = SortableReferences;
