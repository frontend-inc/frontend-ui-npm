'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminOrderListItem_1 = __importDefault(require("./AdminOrderListItem"));
var AdminOrderForm_1 = __importDefault(require("./AdminOrderForm"));
var AdminOrderToolbar_1 = __importDefault(require("./AdminOrderToolbar"));
var navigation_1 = require("next/navigation");
var constants_1 = require("../../../constants");
var AdminOrdersList = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var router = (0, navigation_1.useRouter)();
    var clientUrl = (0, hooks_1.useAdmin)().clientUrl;
    var handleClick = function (order) {
        router.push("".concat(clientUrl, "/shop/orders/").concat(order.id));
    };
    return (react_1.default.createElement(components_1.ResourceList, { selectable: true, url: "".concat(apiUrl, "/orders"), name: 'order', enableSearch: true, enableEdit: true, handleClick: handleClick, query: {
            sort_by: 'number',
            sort_direction: 'desc',
        }, filterOptions: [
            {
                label: 'Status',
                name: 'status',
                options: constants_1.ORDER_STATES,
            },
        ], edit: AdminOrderForm_1.default, toolbar: AdminOrderToolbar_1.default, component: AdminOrderListItem_1.default, emptyIcon: "ShoppingCart", emptyTitle: "No orders", emptyDescription: "No orders added yet." }));
};
exports.default = AdminOrdersList;
