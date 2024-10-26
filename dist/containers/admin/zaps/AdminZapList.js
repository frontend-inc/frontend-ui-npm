'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminZapForm_1 = __importDefault(require("./AdminZapForm"));
var AdminZapItem_1 = __importDefault(require("./AdminZapItem"));
var AdminZapsList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { sortable: true, enableBorder: true, url: "".concat(apiUrl, "/zaps"), name: "zap", enableSearch: true, enableCreate: true, enableEdit: true, enableDelete: true, query: {
            sort_by: 'position',
            sort_direction: 'asc',
        }, edit: AdminZapForm_1.default, create: AdminZapForm_1.default, component: AdminZapItem_1.default, emptyIcon: "Zap", emptyTitle: "No zaps", emptyDescription: "No zaps yet." }));
};
exports.default = AdminZapsList;
