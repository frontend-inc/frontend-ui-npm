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
var components_1 = require("../../../components");
var lodash_1 = require("lodash");
var moment_1 = __importDefault(require("moment"));
var Field = function (props) {
    var field = props.field, resource = props.resource, _a = props.dateFormat, dateFormat = _a === void 0 ? 'MM/DD/YYYYY' : _a, rest = __rest(props, ["field", "resource", "dateFormat"]);
    var fieldVariant = field.variant, label = field.label;
    var value = (0, lodash_1.get)(resource, field === null || field === void 0 ? void 0 : field.name);
    if (!value) {
        switch (fieldVariant) {
            case 'array':
                value = [];
            default:
                value = '-';
                break;
        }
    }
    if ((field === null || field === void 0 ? void 0 : field.variant) == 'date' || (field === null || field === void 0 ? void 0 : field.variant) == 'datetime') {
        value = (0, moment_1.default)(value).format(dateFormat);
    }
    var components = {
        boolean: components_1.FieldBoolean,
        date: components_1.FieldDate,
        datetime: components_1.FieldDate,
        file: components_1.FieldFile,
        float: components_1.FieldString,
        image: components_1.FieldImage,
        video: components_1.FieldVideo,
        json: components_1.FieldJSON,
        url: components_1.FieldURL,
        rating: components_1.FieldRating,
        text: components_1.FieldText,
        location: components_1.FieldLocation,
        number: components_1.FieldString,
        array: components_1.FieldArray,
        string: components_1.FieldString,
        select: components_1.FieldString,
        price: components_1.FieldPrice,
    };
    var Component = components[fieldVariant] || components_1.FieldString;
    return react_1.default.createElement(Component, __assign({ value: value, label: label }, rest));
};
exports.default = Field;
