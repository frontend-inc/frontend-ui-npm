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
var __1 = require("../..");
var lodash_1 = require("lodash");
var DisplayField = function (props) {
    var _a;
    var field = props.field, resource = props.resource, rest = __rest(props, ["field", "resource"]);
    var name = field.name, label = field.label, fieldVariant = field.variant, icon = field.icon;
    var value = (0, lodash_1.get)(resource, name);
    if (!value || (value === null || value === void 0 ? void 0 : value.length) == 0)
        return null;
    var components = {
        boolean: __1.FieldBoolean,
        date: __1.FieldDate,
        datetime: __1.FieldDate,
        file: __1.FieldFile,
        html: __1.FieldHTML,
        location: __1.FieldLocation,
        image: __1.FieldImage,
        video: __1.FieldVideo,
        url: __1.FieldURL,
        rating: __1.FieldRating,
        text: __1.FieldText,
        markdown: __1.FieldMarkdown,
        number: __1.FieldText,
        array: __1.FieldArray,
        string: __1.FieldString,
        select: __1.FieldString,
        price: __1.FieldPrice,
        email: __1.FieldString,
        phone: __1.FieldString,
        shopify_product: __1.FieldShopify,
        vimeo_video: __1.FieldVimeo,
        youtube_video: __1.FieldYouTube,
    };
    var variantProps = {
        array: {
            className: 'px-[40px] sm:px-[100px] py-1 text-sm font-medium',
        },
        email: {
            className: 'w-full text-center text-sm italic',
        },
        file: {
            className: 'w-full justify-center',
        },
        string: {
            className: 'w-full text-center text-md font-normal tracking-wide',
        },
        text: {
            className: 'px-[40px] sm:px-[100px] leading-relaxed text-lg',
        },
        html: {
            className: 'prose',
        },
        image: {
            label: label,
        },
        video: {
            height: 450,
            width: 800,
        },
        youtube_video: {
            height: 450,
            width: 800,
        },
        vimeo_video: {
            height: 450,
            width: 800,
        },
        location: {
            lat: resource === null || resource === void 0 ? void 0 : resource.lat,
            lng: resource === null || resource === void 0 ? void 0 : resource.lng,
            label: resource === null || resource === void 0 ? void 0 : resource.title,
            image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url,
            zoom: 16,
            darkTheme: false,
        },
    };
    var Component = components[fieldVariant] || __1.FieldString;
    var componentProps = (variantProps === null || variantProps === void 0 ? void 0 : variantProps[fieldVariant]) || {};
    if (!value || value == '')
        return null;
    return (react_1.default.createElement("div", { className: "max-w-screen-lg w-full min-w-[280px] sm:min-w-[640px] md:min-w-[768px]" },
        react_1.default.createElement("div", { className: "container justify-center items-center" },
            react_1.default.createElement(Component, __assign({ icon: icon, variant: "caption", value: value }, componentProps)))));
};
exports.default = DisplayField;
