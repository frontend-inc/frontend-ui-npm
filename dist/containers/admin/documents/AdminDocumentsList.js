'use client';
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminDocumentListItem_1 = __importDefault(require("./AdminDocumentListItem"));
var AdminDocumentCreateForm_1 = __importDefault(require("./AdminDocumentCreateForm"));
var AdminDocumentEditForm_1 = __importDefault(require("./AdminDocumentEditForm"));
var AdminDocumentShow_1 = __importDefault(require("./AdminDocumentShow"));
var AdminDocumentToolbar_1 = __importDefault(require("./AdminDocumentToolbar"));
var AdminDocumentHeader_1 = __importDefault(require("./AdminDocumentHeader"));
var constants_1 = require("../../../constants");
var AdminDocumentsList = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var collectionId = props.collectionId, _a = props.documentType, documentType = _a === void 0 ? 'post' : _a, _b = props.metafields, metafields = _b === void 0 ? [] : _b;
    var formFields = __spreadArray(__spreadArray([], constants_1.DOCUMENT_FORM_FIELDS[documentType], true), metafields, true);
    var showFields = __spreadArray(__spreadArray([], constants_1.DOCUMENT_FORM_FIELDS[documentType], true), metafields, true);
    return (react_1.default.createElement(components_1.ResourceList, { selectable: true, sortable: true, url: "".concat(apiUrl, "/").concat(collectionId), name: 'document', enableSearch: true, enableShow: true, enableEdit: true, enableDelete: true, enableCreate: true, sortOptions: [
            { name: 'position', label: 'Position' },
            { name: 'title', label: 'Title' },
        ], query: {
            sort_by: 'position',
            sort_direction: 'asc'
        }, create: AdminDocumentCreateForm_1.default, edit: AdminDocumentEditForm_1.default, show: AdminDocumentShow_1.default, header: AdminDocumentHeader_1.default, toolbar: AdminDocumentToolbar_1.default, component: AdminDocumentListItem_1.default, slots: {
            create: {
                fields: formFields,
                collectionId: collectionId
            },
            edit: {
                fields: formFields,
                collectionId: collectionId
            },
            show: {
                fields: showFields,
                documentType: documentType,
                collectionId: collectionId
            },
            header: {
                collectionId: collectionId
            },
            toolbar: {
                collectionId: collectionId
            }
        }, emptyIcon: "Box", emptyTitle: "No content", emptyDescription: "No content added yet." }));
};
exports.default = AdminDocumentsList;
