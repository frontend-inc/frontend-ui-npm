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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("./index");
var Input = function (props) {
    var variant = props.variant, rest = __rest(props, ["variant"]);
    var COMPONENTS = {
        array: index_1.ArrayInput,
        attachment: index_1.AttachmentInput,
        autocomplete: index_1.AutocompleteInput,
        boolean: index_1.BooleanInput,
        checkboxGroup: index_1.CheckboxGroupInput,
        checkbox: index_1.CheckboxInput,
        color: index_1.ColorInput,
        date: index_1.DateInput,
        email: index_1.EmailInput,
        error: index_1.ErrorInput,
        image: index_1.ImageInput,
        jsonArray: index_1.JsonArrayInput,
        noSpace: index_1.NoSpaceInput,
        numberRange: index_1.NumberRangeInput,
        numberSlider: index_1.NumberSliderInput,
        phone: index_1.PhoneInput,
        priceRange: index_1.PriceRangeInput,
        radio: index_1.RadioInput,
        reference: index_1.ReferenceInput,
        search: index_1.SearchInput,
        select: index_1.SelectInput,
        shopify_products: index_1.ShopifyProductsInput,
        switch: index_1.SwitchInput,
        ratings: index_1.RatingInput,
        tabs: index_1.TabsInput,
        text: index_1.TextInput,
        url: index_1.URLInput,
    };
    var Component = COMPONENTS[variant];
    return react_1.default.createElement(Component, __assign({}, rest));
};
exports.default = Input;
