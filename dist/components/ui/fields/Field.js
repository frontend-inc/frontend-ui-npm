"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("components");
var helpers_1 = require("helpers");
var Field = function (props) {
    var field = props.field, document = props.document;
    var variant = field.variant, label = field.label;
    var value = (0, helpers_1.getDocumentValue)(document, field);
    if (!value)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        variant === 'boolean' && react_1.default.createElement(components_1.FieldBoolean, { label: label, value: value }),
        variant === 'date' && react_1.default.createElement(components_1.FieldDate, { label: label, value: value }),
        variant === 'datetime' && react_1.default.createElement(components_1.FieldDate, { label: label, value: value }),
        variant === 'image' && react_1.default.createElement(components_1.FieldImage, { value: value }),
        variant === 'video' && react_1.default.createElement(components_1.FieldVideo, { value: value }),
        variant === 'json' && react_1.default.createElement(components_1.FieldJSON, { label: label, value: value }),
        variant === 'url' && react_1.default.createElement(components_1.FieldURL, { label: label, value: value }),
        variant === 'rating' && react_1.default.createElement(components_1.FieldRating, { label: label, value: value }),
        variant === 'text' && react_1.default.createElement(components_1.FieldText, { label: label, value: value }),
        variant === 'array' && react_1.default.createElement(components_1.FieldArray, { label: label, value: value }),
        variant === 'string' && react_1.default.createElement(components_1.FieldString, { label: label, value: value }),
        variant === 'price' && react_1.default.createElement(components_1.FieldPrice, { label: label, value: value })));
};
exports.default = Field;
