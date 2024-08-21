"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var containers_1 = require("../../../containers");
var AdminSubscriptionPlanForm_1 = __importDefault(require("./AdminSubscriptionPlanForm"));
var AdminSubscriptionPlansList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.Resources, { url: "".concat(apiUrl, "/subscription_plans"), name: "subscription_plan", enableSearch: true, enableCreate: true, enableEdit: true, enableDelete: true, sortOptions: [
            { name: 'name', label: 'Name' },
            { name: 'price', label: 'price' },
        ], edit: AdminSubscriptionPlanForm_1.default, create: AdminSubscriptionPlanForm_1.default, component: containers_1.AdminSubscriptionPlanItem }));
};
exports.default = AdminSubscriptionPlansList;
