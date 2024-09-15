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
var components_1 = require("../../../components");
var constants_1 = require("../../../constants");
var AdminOrderForm = function (props) {
    var fields = [
        { label: 'User', name: 'user_id', variant: 'user' },
        {
            label: 'Status',
            name: 'status',
            variant: 'select',
            options: constants_1.ORDER_STATES,
        },
        { label: 'Customer Name', name: 'customer_name', variant: 'string' },
        { label: 'Email', name: 'customer_email', variant: 'string' },
        { label: 'Phone', name: 'customer_phone', variant: 'string' },
        { label: 'Address Line 1', name: 'address1', variant: 'string' },
        { label: 'Address Line 2', name: 'address2', variant: 'string' },
        { label: 'City', name: 'city', variant: 'string' },
        {
            label: 'State',
            name: 'state',
            variant: 'state',
            conditions: [{ name: 'country', operator: 'eq', value: 'US' }],
        },
        { label: 'Country', name: 'country', variant: 'country' },
        { label: 'Zipcode', name: 'zipcode', variant: 'string' },
    ];
    var inputOptions = {
        user: components_1.UserAutosuggest,
    };
    return react_1.default.createElement(components_1.ResourceForm, __assign({}, props, { fields: fields, inputOptions: inputOptions }));
};
exports.default = AdminOrderForm;
