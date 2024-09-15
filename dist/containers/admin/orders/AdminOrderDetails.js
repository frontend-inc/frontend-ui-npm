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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
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
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.grid), (loading && sx.loading)) },
        react_1.default.createElement(material_1.Stack, { spacing: 1, direction: "row" },
            react_1.default.createElement(material_1.Typography, { variant: "subtitle1", color: "text.primary" },
                "Order ",
                order.display_number),
            react_1.default.createElement(components_1.Label, { label: order === null || order === void 0 ? void 0 : order.status })),
        react_1.default.createElement(material_1.Box, { sx: sx.actions },
            react_1.default.createElement(components_1.PrimaryButton, { onClick: handleEdit }, "Edit")),
        react_1.default.createElement(material_1.Paper, { sx: sx.paper },
            react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0 },
                react_1.default.createElement(material_1.Box, { sx: sx.user },
                    react_1.default.createElement(components_1.UserChip, { user: order === null || order === void 0 ? void 0 : order.user, size: 44, enableUsername: true, enableEmail: true })),
                react_1.default.createElement(material_1.Box, null,
                    react_1.default.createElement(material_1.Button, { startIcon: react_1.default.createElement(components_1.Icon, { name: "Mail", size: 20 }), sx: sx.emailButton, onClick: handleCopyEmail }, order.customer_name)),
                react_1.default.createElement(material_1.Typography, { variant: "overline", color: "text.secondary", sx: sx.address }, order.shipping_address))),
        react_1.default.createElement(material_1.Paper, { sx: sx.paper },
            react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0 },
                react_1.default.createElement(material_1.Typography, { variant: "overline", color: "text.secondary" },
                    "Subtotal: ",
                    order.display_subtotal),
                react_1.default.createElement(material_1.Typography, { variant: "overline", color: "text.secondary" },
                    "Taxes: ",
                    order.total_amount),
                react_1.default.createElement(material_1.Typography, { variant: "overline", color: "text.secondary" },
                    "Discounts: ",
                    order.discount_amount),
                react_1.default.createElement(material_1.Typography, { variant: "overline", color: "text.secondary" },
                    "Shipping: ",
                    order.shipping_amount),
                react_1.default.createElement(material_1.Typography, { variant: "overline", color: "text.secondary" },
                    "Total: ",
                    order.display_total)))));
};
exports.default = AdminOrderDetails;
var sx = {
    root: {
        width: '100%',
        padding: 2,
    },
    loading: {
        opacity: 0.5,
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
    },
    paper: {
        p: 2,
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    user: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        pb: 1,
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
    emailButton: {
        mt: 1,
        p: '2px',
        color: 'text.primary',
    },
    address: {
        whiteSpace: 'pre-line',
    },
};
