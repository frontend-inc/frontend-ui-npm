"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var constants_1 = require("../../../constants");
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var components_3 = require("../../../components");
var AdminCollectionForm = function (props) {
    var errors = props.errors, collection = props.collection, handleTemplateClick = props.handleTemplateClick, handleChange = props.handleChange;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 },
        react_1.default.createElement(material_1.Box, { p: 2 },
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
                        variant: 'nospace',
                    },
                ] })),
        !(collection === null || collection === void 0 ? void 0 : collection.id) && (react_1.default.createElement(components_3.MenuList, { enableBorder: true, label: "Templates" },
            react_1.default.createElement(material_1.List, { sx: { my: 0 } }, constants_1.COLLECTION_TEMPLATES.map(function (template) { return (react_1.default.createElement(components_2.MenuListItem, { selected: collection.template == template, title: template.label, description: template.description, icon: template.icon, color: template.color, handleClick: function () { return handleTemplateClick(template); } })); })))),
        react_1.default.createElement(components_1.ErrorText, { error: (errors === null || errors === void 0 ? void 0 : errors.collection_type) && "collection type ".concat(errors.collection_type) })));
};
exports.default = AdminCollectionForm;
