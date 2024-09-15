"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminOrderLineItem_1 = __importDefault(require("./AdminOrderLineItem"));
var AdminOrderLineItemToolbar_1 = __importDefault(require("./AdminOrderLineItemToolbar"));
var AdminOrderLineItemsList = function (props) {
    var orderId = (props || {}).orderId;
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { selectable: true, url: "".concat(apiUrl, "/orders/").concat(orderId, "/order_line_items"), name: 'order', enableSearch: true, enableEdit: true, query: {
            sort_by: 'created_at',
            sort_direction: 'desc',
        }, component: AdminOrderLineItem_1.default, toolbar: AdminOrderLineItemToolbar_1.default, emptyIcon: "Shirt", emptyTitle: "No order line items", emptyDescription: "No order line items." }));
};
exports.default = AdminOrderLineItemsList;
