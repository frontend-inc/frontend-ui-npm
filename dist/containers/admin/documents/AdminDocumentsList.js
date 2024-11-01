'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminDocumentItem_1 = __importDefault(require("./AdminDocumentItem"));
var AdminDocumentCreateForm_1 = __importDefault(require("./AdminDocumentCreateForm"));
var AdminDocumentEditForm_1 = __importDefault(require("./AdminDocumentEditForm"));
var AdminDocumentShow_1 = __importDefault(require("./AdminDocumentShow"));
var AdminDocumentToolbar_1 = __importDefault(require("./AdminDocumentToolbar"));
var AdminDocumentHeader_1 = __importDefault(require("./AdminDocumentHeader"));
var AdminDocumentsList = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var collectionId = props.collectionId, _a = props.fields, fields = _a === void 0 ? [] : _a;
    return (react_1.default.createElement(components_1.ResourceList, { selectable: true, sortable: true, url: "".concat(apiUrl, "/").concat(collectionId), name: 'document', enableSearch: true, enableShow: true, enableEdit: true, enableDelete: true, enableCreate: true, sortOptions: [
            { name: 'position', label: 'Position' },
            { name: 'title', label: 'Title' },
        ], query: {
            sort_by: 'position',
            sort_direction: 'asc'
        }, create: AdminDocumentCreateForm_1.default, edit: AdminDocumentEditForm_1.default, show: AdminDocumentShow_1.default, header: AdminDocumentHeader_1.default, toolbar: AdminDocumentToolbar_1.default, component: AdminDocumentItem_1.default, slots: {
            create: {
                fields: fields,
                collectionId: collectionId
            },
            edit: {
                fields: fields,
                collectionId: collectionId
            },
            show: {
                fields: fields,
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
