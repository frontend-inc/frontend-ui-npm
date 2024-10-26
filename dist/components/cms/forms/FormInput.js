'use client';
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
var FormInput = function (props) {
    var variant = props.variant, name = props.name, label = props.label, errors = props.errors, value = props.value, options = props.options, placeholder = props.placeholder, handleChange = props.handleChange, handleRemove = props.handleRemove, handleAddAttachment = props.handleAddAttachment, handleRemoveAttachment = props.handleRemoveAttachment, url = props.url, _a = props.query, query = _a === void 0 ? {} : _a, displayField = props.displayField, valueParam = props.valueParam, _b = props.inputOptions, defaultInputOptions = _b === void 0 ? {} : _b, _c = props.inputParams, defaultInputParams = _c === void 0 ? {} : _c;
    var componentMapper = __assign({ autosuggest: components_1.RemoteAutosuggest, array: components_1.ArrayInput, country: components_1.CountryInput, string: components_1.TextInput, file: components_1.AttachmentInput, email: components_1.EmailInput, phone: components_1.PhoneInput, url: components_1.URLInput, text: components_1.TextArea, snake_case: components_1.SnakeCaseInput, location: components_1.LocationInput, number: components_1.TextInput, price: components_1.TextInput, date: components_1.DateInput, datetime: components_1.DateInput, boolean: components_1.SwitchInput, select: components_1.Autosuggest, state: components_1.StateInput, rating: components_1.RatingInput, image: components_1.ImageInput, media: components_1.MediaInput, divider: components_1.DividerInput, shopify_product: components_1.ShopifyProductInput, shopify_products: components_1.ShopifyProductsInput, single_choice: components_1.Autosuggest, multiple_choice: components_1.ArrayInput }, defaultInputOptions);
    var inputProps = __assign({ autosuggest: {
            url: url,
            displayField: displayField,
            valueParam: valueParam,
            defaultQuery: query,
        }, string: {
            disableDebounce: true,
        }, text: {
            disableDebounce: true,
        }, select: {
            // Handle both array of strings and array of objects
            options: options === null || options === void 0 ? void 0 : options.map(function (option) { return ({
                icon: option.icon,
                label: option.label || option,
                value: option.value || option,
            }); }),
        }, single_choice: {
            // Handle both array of strings and array of objects
            options: options === null || options === void 0 ? void 0 : options.map(function (option) { return ({
                icon: option.icon,
                label: option.label || option,
                value: option.value || option,
            }); }),
        }, number: {
            type: 'number',
        }, boolean: {
            label: null,
            placeholder: label,
        }, price: {
            type: 'number',
        }, media: {
            handleRemove: handleRemove,
        } }, defaultInputParams);
    var InputComponent = componentMapper[variant] || components_1.TextInput;
    return (react_1.default.createElement(InputComponent, __assign({ errors: errors, label: label, name: name, value: value || '', handleChange: handleChange, handleRemove: handleRemove, handleAddAttachment: handleAddAttachment, handleRemoveAttachment: handleRemoveAttachment, placeholder: placeholder }, inputProps[variant])));
};
exports.default = FormInput;
