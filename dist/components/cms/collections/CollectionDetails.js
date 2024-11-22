'use client';
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var constants_1 = require("../../../constants");
var CollectionDetails = function (props) {
    var _a;
    var _b = props || {}, actions = _b.actions, resource = _b.resource, disableImage = _b.disableImage, _c = _b.metafields, metafields = _c === void 0 ? [] : _c;
    var fields = constants_1.DOCUMENT_SHOW_FIELDS[resource === null || resource === void 0 ? void 0 : resource.documentType];
    var filteredFields = fields.filter(function (field) { return !['image', 'label', 'title'].includes(field.name); });
    return (react_1.default.createElement("div", { className: "w-full flex flex-col space-y-6" },
        !disableImage && (react_1.default.createElement("div", { className: "w-full flex flex-row justify-center" },
            react_1.default.createElement("div", { className: "w-full h-[320px] max-w-screen-sm" },
                react_1.default.createElement(__1.Image, { alt: resource === null || resource === void 0 ? void 0 : resource.label, src: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, label: resource === null || resource === void 0 ? void 0 : resource.label })))),
        actions && (react_1.default.createElement("div", { className: "flex flex-row items-center justify-center w-full" }, actions)),
        react_1.default.createElement(__1.DisplayFields, { fields: __spreadArray(__spreadArray([], filteredFields, true), metafields, true), resource: resource })));
};
exports.default = CollectionDetails;
