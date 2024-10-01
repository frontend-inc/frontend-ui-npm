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
var ReferenceInput_1 = __importDefault(require("./references/ReferenceInput"));
var ProductsInput_1 = __importDefault(require("./products/ProductsInput"));
var InputWrapper_1 = __importDefault(require("./inputs/InputWrapper"));
var components_2 = require("../../../components");
var material_1 = require("@mui/material");
var AdminDocumentInput = function (props) {
    var errors = props.errors, field = props.field, value = props.value, handleChange = props.handleChange, document = props.document, collection = props.collection, handleAddReferences = props.handleAddReferences, handleRemoveReferences = props.handleRemoveReferences, handleAddAttachment = props.handleAddAttachment, handleRemoveAttachment = props.handleRemoveAttachment, handleAddProducts = props.handleAddProducts, handleRemoveProducts = props.handleRemoveProducts, handleUpdateProductPositions = props.handleUpdateProductPositions;
    var _a = field || {}, variant = _a.variant, name = _a.name, label = _a.label, options = _a.options;
    var componentMapper = {
        array: components_1.ArrayInput,
        country: components_1.CountryInput,
        state: components_1.StateInput,
        string: components_1.TextInput,
        url: components_1.TextInput,
        text: components_1.TextInput,
        location: components_1.LocationInput,
        number: components_1.TextInput,
        price: components_1.TextInput,
        date: components_1.DateInput,
        datetime: components_1.DateInput,
        boolean: components_1.CheckboxInput,
        select: components_1.Autosuggest,
        rating: components_1.RatingInput,
        json: components_1.JSONInput,
        products: ProductsInput_1.default,
        shopify_products: components_1.ShopifyProductsInput,
        file: components_2.MediaInput,
        image: components_2.MediaInput,
        video: components_2.MediaInput,
        habtm: ReferenceInput_1.default,
    };
    var Component = componentMapper[variant] || components_1.TextInput;
    var inputProps = {
        array: {
            value: value || [],
        },
        shopify_products: {
            value: value || [],
            height: 180,
            width: 180,
        },
        location: {
            enablePosition: true,
            lat: document === null || document === void 0 ? void 0 : document.lat,
            lng: document === null || document === void 0 ? void 0 : document.lng,
            darkTheme: true,
            height: 180,
            width: 180,
            zoom: 15,
        },
        tags: {
            value: value || [],
            freeSolo: true,
        },
        text: {
            multiline: true,
            rows: 6,
        },
        select: {
            options: (options === null || options === void 0 ? void 0 : options.map(function (opt) { return ({
                value: opt,
                label: opt,
            }); })) || [],
        },
        products: {
            document: document,
            value: value || [],
            handleAddProducts: handleAddProducts,
            handleRemoveProducts: handleRemoveProducts,
            handleUpdateProductPositions: handleUpdateProductPositions,
        },
        number: {
            type: 'number',
        },
        price: {
            type: 'number',
        },
        habtm: {
            field: field,
            document: document,
            collection: collection,
            handleAddReferences: handleAddReferences,
            handleRemoveReferences: handleRemoveReferences,
            enableMultipleSelect: true,
        },
        image: {
            field: field,
            collection: collection,
            handleAddAttachment: handleAddAttachment,
            handleRemoveAttachment: handleRemoveAttachment,
        },
        file: {
            field: field,
            collection: collection,
            handleAddAttachment: handleAddAttachment,
            handleRemoveAttachment: handleRemoveAttachment,
        },
        video: {
            field: field,
            collection: collection,
            handleAddAttachment: handleAddAttachment,
            handleRemoveAttachment: handleRemoveAttachment,
        },
    }[variant];
    return (react_1.default.createElement(InputWrapper_1.default, { title: label, label: variant },
        react_1.default.createElement(material_1.Stack, { sx: sx.stack, direction: "row", spacing: 1, alignItems: "center" },
            react_1.default.createElement(Component, __assign({ errors: errors, name: name, value: value, handleChange: handleChange }, inputProps)),
            ['string', 'text'].includes(variant) && name !== 'handle' && (react_1.default.createElement(components_2.AiChatModal, { name: name, value: value, handleChange: handleChange })))));
};
exports.default = AdminDocumentInput;
var sx = {
    stack: {
        width: '100%',
    },
};
