'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../../components/core");
var components_1 = require("../../../components");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var hooks_1 = require("../../../hooks");
var AdminOrderDetails = function (props) {
    var _a = props || {}, order = _a.order, handleEdit = _a.handleEdit, loading = _a.loading;
    var _b = (0, hooks_1.useAlerts)(), showAlertSuccess = _b.showAlertSuccess, showAlertError = _b.showAlertError;
    var handleCopyEmail = function () {
        if (order.customer_email) {
            (0, copy_to_clipboard_1.default)(order.customer_email);
            showAlertSuccess('Email copied to clipboard');
        }
        else {
            showAlertError('No email to copy');
        }
    };
    return (react_1.default.createElement("div", { className: "grid grid-cols-2 gap-4 ".concat(loading ? 'opacity-50' : '') },
        react_1.default.createElement("div", { className: "flex flex-row space-x-2" },
            react_1.default.createElement(core_1.Typography, { variant: "subtitle1" },
                "Order ",
                order.display_number),
            react_1.default.createElement(components_1.Label, { label: order === null || order === void 0 ? void 0 : order.status })),
        react_1.default.createElement("div", { className: "flex justify-end items-start" },
            react_1.default.createElement(components_1.Button, { onClick: handleEdit }, "Edit")),
        react_1.default.createElement("div", { className: "bg-card p-4 rounded-lg shadow" },
            react_1.default.createElement("div", { className: "flex flex-col" },
                react_1.default.createElement("div", { className: "flex justify-start items-center pb-1 border-b border-border" },
                    react_1.default.createElement(components_1.UserChip, { user: order === null || order === void 0 ? void 0 : order.user, size: 44, enableUsername: true, enableEmail: true })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(components_1.Button, { variant: "ghost", className: "mt-1 p-0.5 text-foreground", onClick: handleCopyEmail },
                        react_1.default.createElement(components_1.Icon, { name: "Mail", size: 20, className: "mr-2" }),
                        order.customer_name)),
                react_1.default.createElement(core_1.Typography, { variant: "overline", className: "text-muted-foreground whitespace-pre-line" }, order.shipping_address))),
        react_1.default.createElement("div", { className: "bg-card p-4 rounded-lg shadow" },
            react_1.default.createElement("div", { className: "flex flex-col" },
                react_1.default.createElement(core_1.Typography, { variant: "overline", className: "text-muted-foreground" },
                    "Subtotal: ",
                    order.display_subtotal),
                react_1.default.createElement(core_1.Typography, { variant: "overline", className: "text-muted-foreground" },
                    "Taxes: ",
                    order.total_amount),
                react_1.default.createElement(core_1.Typography, { variant: "overline", className: "text-muted-foreground" },
                    "Discounts: ",
                    order.discount_amount),
                react_1.default.createElement(core_1.Typography, { variant: "overline", className: "text-muted-foreground" },
                    "Shipping: ",
                    order.shipping_amount),
                react_1.default.createElement(core_1.Typography, { variant: "overline", className: "text-muted-foreground" },
                    "Total: ",
                    order.display_total)))));
};
exports.default = AdminOrderDetails;
