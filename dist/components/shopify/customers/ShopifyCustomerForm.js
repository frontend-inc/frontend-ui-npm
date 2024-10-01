"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var ShopifyCustomerForm = function (props) {
    var loading = props.loading, customer = props.customer, handleChange = props.handleChange, handleSubmit = props.handleSubmit;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1 },
        react_1.default.createElement(__1.TextInput, { placeholder: "First Name", name: "firstName", value: (customer === null || customer === void 0 ? void 0 : customer.firstName) || '', handleChange: handleChange }),
        react_1.default.createElement(__1.TextInput, { placeholder: "Last Name", name: "lastName", value: (customer === null || customer === void 0 ? void 0 : customer.lastName) || '', handleChange: handleChange }),
        react_1.default.createElement(__1.TextInput, { placeholder: "Email", name: "email", value: (customer === null || customer === void 0 ? void 0 : customer.email) || '', handleChange: handleChange }),
        react_1.default.createElement(__1.TextInput, { placeholder: "Phone number", name: "phone", value: (customer === null || customer === void 0 ? void 0 : customer.phone) || '', handleChange: handleChange }),
        react_1.default.createElement(__1.TextInput, { type: "password", placeholder: "Change Password", name: "password", value: (customer === null || customer === void 0 ? void 0 : customer.password) || '', handleChange: handleChange }),
        react_1.default.createElement(material_1.Button, { color: "secondary", endIcon: loading && react_1.default.createElement(__1.IconLoading, null), variant: "contained", onClick: handleSubmit }, "Update Account")));
};
exports.default = ShopifyCustomerForm;
