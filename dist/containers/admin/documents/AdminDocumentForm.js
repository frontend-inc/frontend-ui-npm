'use client';
"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var AdminDocumentInput_1 = __importDefault(require("./AdminDocumentInput"));
var lodash_1 = require("lodash");
var AdminDocumentForm = function (props) {
    var errors = props.errors, fields = props.fields, document = props.document, collection = props.collection, handleChange = props.handleChange, handleAddReferences = props.handleAddReferences, handleRemoveReferences = props.handleRemoveReferences, handleAddAttachment = props.handleAddAttachment, handleRemoveAttachment = props.handleRemoveAttachment, handleAddProducts = props.handleAddProducts, handleRemoveProducts = props.handleRemoveProducts, handleUpdateProductPositions = props.handleUpdateProductPositions;
    var _a = (0, react_1.useState)([]), editableFields = _a[0], setEditableFields = _a[1];
    (0, react_1.useEffect)(function () {
        if (fields) {
            var sortedFields = fields.sort(function (a, b) { return a.position - b.position; });
            setEditableFields(sortedFields);
        }
    }, [fields]);
    if (!document)
        return null;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-3" }, editableFields === null || editableFields === void 0 ? void 0 : editableFields.map(function (field, i) {
        var _a;
        return (react_1.default.createElement(AdminDocumentInput_1.default, { key: i, errors: errors, field: field, value: (0, lodash_1.get)(document, field === null || field === void 0 ? void 0 : field.name), placeholder: (_a = field.label) === null || _a === void 0 ? void 0 : _a.toLowerCase(), handleChange: handleChange, document: document, collection: collection, handleAddReferences: handleAddReferences, handleRemoveReferences: handleRemoveReferences, handleAddAttachment: handleAddAttachment, handleRemoveAttachment: handleRemoveAttachment, handleAddProducts: handleAddProducts, handleRemoveProducts: handleRemoveProducts, handleUpdateProductPositions: handleUpdateProductPositions }));
    })));
};
exports.default = AdminDocumentForm;
