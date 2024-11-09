'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminSubscriptionForm_1 = __importDefault(require("./AdminSubscriptionForm"));
var AdminSubscriptionListItem_1 = __importDefault(require("./AdminSubscriptionListItem"));
var AdminSubscriptionsList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { url: "".concat(apiUrl, "/subscriptions"), name: "subscription", enableSearch: true, enableCreate: true, enableEdit: true, enableDelete: true, sortOptions: [
            { name: 'name', label: 'Name' },
            { name: 'price', label: 'price' },
        ], edit: AdminSubscriptionForm_1.default, create: AdminSubscriptionForm_1.default, component: AdminSubscriptionListItem_1.default }));
};
exports.default = AdminSubscriptionsList;
