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
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var AdminFieldVariantList_1 = __importDefault(require("./AdminFieldVariantList"));
var AdminFieldVariantListItem_1 = __importDefault(require("./AdminFieldVariantListItem"));
var constants_1 = require("../../../constants");
var AdminFieldForm = function (props) {
    var _a = props || {}, loading = _a.loading, errors = _a.errors, open = _a.open, handleClose = _a.handleClose, resource = _a.resource, setResource = _a.setResource, handleChange = _a.handleChange, handleSubmit = _a.handleSubmit, handleRemove = _a.handleRemove;
    var handleClick = function (field) {
        setResource(__assign(__assign({}, resource), { db_type: field.db_type, variant: field.variant }));
        setTab(1);
    };
    var _b = (0, react_1.useState)(0), tab = _b[0], setTab = _b[1];
    var TABS = [
        { label: 'Field', value: 0 },
        { label: 'Settings', value: 1 },
        { label: 'Validate', value: 2 },
        { label: 'UI', value: 3 },
    ];
    return (react_1.default.createElement(components_1.Drawer, { disablePadding: true, open: open, handleClose: handleClose, title: (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', buttons: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save') },
        react_1.default.createElement(material_1.Box, { p: 2 },
            react_1.default.createElement(components_1.ButtonTabs, { value: tab, options: TABS, handleChange: setTab })),
        tab == 0 && (react_1.default.createElement(AdminFieldVariantList_1.default, { field: resource, handleClick: handleClick })),
        react_1.default.createElement(material_1.Box, { px: 2 },
            tab == 1 && (react_1.default.createElement(react_1.default.Fragment, null,
                (resource === null || resource === void 0 ? void 0 : resource.variant) && (react_1.default.createElement(AdminFieldVariantListItem_1.default, { field: constants_1.FIELD_VARIANTS === null || constants_1.FIELD_VARIANTS === void 0 ? void 0 : constants_1.FIELD_VARIANTS.find(function (f) { return f.variant == resource.variant; }), handleClick: function () { return null; } })),
                react_1.default.createElement(components_1.FormFields, { errors: errors, resource: resource, handleChange: handleChange, handleRemove: handleRemove, fields: [
                        { label: 'Label', name: 'label', variant: 'string' },
                        {
                            label: 'API name',
                            name: 'name',
                            variant: 'nospace',
                            conditions: [
                                {
                                    name: 'variant',
                                    operator: 'nin',
                                    value: [
                                        'image',
                                        'file',
                                        'video',
                                        'audio',
                                        'habtm',
                                        'shopify_products',
                                        'url',
                                        'email',
                                        'phone'
                                    ]
                                }
                            ],
                        },
                        {
                            label: 'Options',
                            name: 'options',
                            variant: 'array',
                            conditions: [
                                {
                                    name: 'variant',
                                    operator: 'eq',
                                    value: 'select'
                                }
                            ],
                        },
                    ] }))),
            tab == 2 && (react_1.default.createElement(components_1.FormFields, { errors: errors, resource: resource, handleChange: handleChange, fields: [
                    {
                        label: 'Validate required',
                        name: 'validate_required',
                        variant: 'boolean'
                    },
                    {
                        label: 'Validate unique',
                        name: 'validate_unique',
                        variant: 'boolean'
                    },
                    {
                        label: 'Validate length',
                        name: 'validate_length',
                        variant: 'boolean'
                    },
                    {
                        label: 'Validate number range',
                        name: 'validate_numericality',
                        variant: 'boolean'
                    },
                    {
                        label: 'Validate inclusion',
                        name: 'validate_inclusion',
                        variant: 'boolean'
                    },
                    {
                        label: 'Validate format',
                        name: 'validate_format',
                        variant: 'boolean'
                    },
                    {
                        label: 'Minimum text length',
                        name: 'validate_length_min',
                        variant: 'number',
                        conditions: [
                            {
                                name: 'validate_length',
                                operator: 'eq',
                                value: true
                            }
                        ],
                    },
                    {
                        label: 'Maximum text length',
                        name: 'validate_length_max',
                        variant: 'number',
                        conditions: [
                            {
                                name: 'validate_length',
                                operator: 'eq',
                                value: true
                            }
                        ],
                    },
                    {
                        label: 'Minimum number',
                        name: 'validate_length_min',
                        variant: 'number',
                        conditions: [
                            {
                                name: 'validate_numericality',
                                operator: 'eq',
                                value: true
                            }
                        ],
                    },
                    {
                        label: 'Maximum number',
                        name: 'validate_length_max',
                        variant: 'number',
                        conditions: [
                            {
                                name: 'validate_numericality',
                                operator: 'eq',
                                value: true
                            }
                        ],
                    },
                    {
                        label: 'Allowed values',
                        name: 'validate_inclusion_options',
                        variant: 'array',
                        conditions: [
                            {
                                name: 'validate_inclusion',
                                operator: 'eq',
                                value: true
                            }
                        ],
                    },
                    {
                        label: 'Regex format',
                        name: 'validate_format_regext',
                        variant: 'string',
                        conditions: [
                            {
                                name: 'validate_format',
                                operator: 'eq',
                                value: true
                            }
                        ],
                    },
                ], handleRemove: function () { return (null); } })),
            tab == 3 && (react_1.default.createElement(components_1.FormFields, { errors: errors, resource: resource, handleChange: handleChange, fields: [
                    {
                        label: 'Display field',
                        name: 'display_field',
                        variant: 'boolean',
                        conditions: [
                            {
                                name: 'variant',
                                operator: 'nin',
                                value: ['habtm', 'file', 'audio', 'video', 'image']
                            },
                        ]
                    },
                    {
                        label: 'Form field',
                        name: 'form_field',
                        variant: 'boolean',
                    },
                    {
                        label: 'Search filter field',
                        name: 'filter_field',
                        variant: 'boolean',
                        conditions: [
                            {
                                name: 'variant',
                                operator: 'nin',
                                value: [
                                    'habtm',
                                    'file',
                                    'audio',
                                    'video',
                                    'image',
                                    'shopify_products'
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Search sort field',
                        name: 'sort_field',
                        variant: 'boolean',
                        conditions: [
                            {
                                name: 'variant',
                                operator: 'nin',
                                value: [
                                    'habtm',
                                    'file',
                                    'audio',
                                    'video',
                                    'image',
                                    'shopify_products'
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Table header',
                        name: 'table_header',
                        variant: 'boolean',
                        conditions: [
                            {
                                name: 'variant',
                                operator: 'nin',
                                value: [
                                    'habtm',
                                    'shopify_products'
                                ]
                            },
                        ]
                    },
                ] })))));
};
exports.default = AdminFieldForm;
