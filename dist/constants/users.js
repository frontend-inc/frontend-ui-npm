"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACCOUNT_FORM_FIELDS = exports.USER_ADDRESS_FIELDS = exports.USER_FORM_FIELDS = exports.USER_ROLES = void 0;
var countries_1 = require("./countries");
var states_1 = require("./states");
exports.USER_ROLES = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
];
exports.USER_FORM_FIELDS = [
    { name: 'avatar', variant: 'image' },
    { label: 'First name', name: 'first_name', variant: 'string' },
    { label: 'Last name', name: 'last_name', variant: 'string' },
    { label: 'About me', name: 'about_me', variant: 'text' },
];
exports.USER_ADDRESS_FIELDS = [
    {
        label: 'Address',
        name: 'address1',
        variant: 'string',
        placeholder: 'Street',
    },
    {
        label: '',
        name: 'address2',
        variant: 'string',
        placeholder: 'Unit or Apartment',
    },
    { label: 'City', name: 'city', variant: 'string' },
    {
        label: 'State',
        name: 'state',
        variant: 'select',
        options: states_1.STATES,
        conditions: [{ name: 'country', operator: 'eq', value: 'US' }],
    },
    {
        label: 'Country',
        name: 'country',
        variant: 'select',
        options: countries_1.COUNTRIES,
        default: 'US',
    },
    { label: 'Zipcode', name: 'zipcode', variant: 'string' },
];
exports.ACCOUNT_FORM_FIELDS = [
    { name: 'avatar', variant: 'image' },
    { label: 'First name', name: 'first_name', variant: 'string' },
    { label: 'Last name', name: 'last_name', variant: 'string' },
];
