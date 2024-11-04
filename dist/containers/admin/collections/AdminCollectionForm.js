'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants_1 = require("../../../constants");
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var AdminCollectionForm = function (props) {
    var errors = props.errors, collection = props.collection, handleClick = props.handleClick, handleChange = props.handleChange;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
        react_1.default.createElement("div", { className: "p-2" },
            react_1.default.createElement(components_1.FormFields, { errors: errors, handleChange: handleChange, resource: collection, fields: [
                    {
                        label: 'Name',
                        name: 'label',
                        placeholder: 'Name',
                        variant: 'string',
                    },
                    {
                        label: 'API name',
                        name: 'name',
                        placeholder: 'API name',
                        variant: 'slug',
                    }
                ] })),
        !(collection === null || collection === void 0 ? void 0 : collection.id) && (react_1.default.createElement("div", { className: "px-4 grid grid-cols-2 md:grid-cols-3 gap-4" }, constants_1.COLLECTION_TEMPLATES.map(function (template, index) { return (react_1.default.createElement(components_2.SquareButton, { key: index, selected: collection.document_type == template.document_type, label: template.label, icon: template.icon, color: template.color, handleClick: function () { return handleClick(template); } })); }))),
        react_1.default.createElement(components_1.ErrorText, { error: (errors === null || errors === void 0 ? void 0 : errors.collection_type) && "collection type ".concat(errors.collection_type) })));
};
exports.default = AdminCollectionForm;
