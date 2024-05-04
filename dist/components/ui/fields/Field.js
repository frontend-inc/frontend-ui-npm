"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var Field = function (props) {
    var field = props.field, document = props.document, enableBorder = props.enableBorder;
    var variant = field.variant, label = field.label;
    var value = document[field === null || field === void 0 ? void 0 : field.name];
    if (!value) {
        value = '-';
    }
    var components = {
        "boolean": components_1.FieldBoolean,
        "date": components_1.FieldDate,
        "datetime": components_1.FieldDate,
        "file": components_1.FieldFile,
        "image": components_1.FieldImage,
        "video": components_1.FieldVideo,
        "json": components_1.FieldJSON,
        "url": components_1.FieldURL,
        "rating": components_1.FieldRating,
        "text": components_1.FieldText,
        "number": components_1.FieldText,
        "array": components_1.FieldArray,
        "string": components_1.FieldString,
        "select": components_1.FieldString,
        "price": components_1.FieldPrice
    };
    var Component = components[variant];
    return (react_1.default.createElement(Component, { label: label, value: value, enableBorder: enableBorder }));
};
exports.default = Field;
