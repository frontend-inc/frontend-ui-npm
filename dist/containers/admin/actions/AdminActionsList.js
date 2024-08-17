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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var containers_1 = require("../../../containers");
var constants_1 = require("../../../constants");
var AdminActionsList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)(), activeAction = _b[0], setActiveAction = _b[1];
    var handleClick = function (action) {
        setActiveAction(action);
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    return (react_1.default.createElement(material_1.Stack, { p: 2, direction: "column", spacing: 2 },
        react_1.default.createElement(components_1.ResourceList, { url: "".concat(apiUrl, "/actions"), name: "app_action", enableSearch: true, enableCreate: true, enableEdit: true, enableDelete: true, query: {
                sort_by: 'action_type',
                sort_direction: 'asc',
            }, filterOptions: [
                {
                    label: 'Type',
                    field: 'action_type',
                    variant: 'multiple_choice',
                    options: constants_1.ACTION_TYPES,
                },
            ], fields: [
                {
                    label: 'Label',
                    name: 'label',
                    variant: 'string',
                },
                {
                    label: 'API name',
                    name: 'name',
                    variant: 'nospace',
                },
                {
                    label: 'Action',
                    name: 'action_type',
                    variant: 'select',
                    options: constants_1.ACTION_TYPES,
                },
                {
                    label: 'Collection',
                    name: 'collection_id',
                    variant: 'autosuggest',
                    displayField: 'name',
                    url: "".concat(apiUrl, "/collections"),
                    query: {},
                    conditions: [
                        {
                            name: 'action_type',
                            operator: 'in',
                            value: [
                                'resources.create',
                                'resources.save',
                                'resources.delete',
                            ],
                        },
                    ],
                },
            ], handleClick: handleClick, component: containers_1.AdminActionItem, emptyIcon: "Hook", emptyTitle: "No actions", emptyDescription: "No actions yet." }),
        react_1.default.createElement(components_1.Drawer, { open: open, handleClose: handleClose },
            react_1.default.createElement(components_1.ResourceList, { sortable: true, enableBorder: true, direction: "column", 
                //@ts-ignore
                url: "".concat(apiUrl, "/actions/").concat(activeAction === null || activeAction === void 0 ? void 0 : activeAction.id, "/zaps"), name: "zap", enableSearch: true, enableCreate: true, enableEdit: true, enableDelete: true, query: {
                    sort_by: 'position',
                    sort_direction: 'asc',
                }, fields: [
                    {
                        label: 'Zap',
                        name: 'zap_type',
                        variant: 'select',
                        options: constants_1.ZAP_TYPES,
                    },
                    {
                        label: 'Post URL',
                        name: 'url',
                        variant: 'string',
                        conditions: [
                            {
                                name: 'zap_type',
                                operator: 'eq',
                                value: 'webhook',
                            },
                        ],
                    },
                    {
                        label: 'Email',
                        name: 'email_id',
                        variant: 'autosuggest',
                        displayField: 'name',
                        url: "".concat(apiUrl, "/emails"),
                        query: {
                            filters: {
                                AND: [
                                    { internal: { eq: false } },
                                ]
                            }
                        },
                        conditions: [
                            {
                                name: 'zap_type',
                                operator: 'eq',
                                value: 'email',
                            },
                        ],
                    },
                ], component: containers_1.AdminZapItem, emptyIcon: "Zap", emptyTitle: "No zaps", emptyDescription: "No zaps yet." }))));
};
exports.default = AdminActionsList;
