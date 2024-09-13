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
var __1 = require("../..");
var material_1 = require("@mui/material");
var SecondaryFields = function (props) {
    var _a = props || {}, resource = _a.resource, _b = _a.fields, fields = _b === void 0 ? [] : _b, enableRatings = _a.enableRatings, enableUsers = _a.enableUsers, _c = _a.slots, slots = _c === void 0 ? {
        ratings: {},
        fields: {},
        user: {},
    } : _c;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 },
        enableRatings == true && (react_1.default.createElement(__1.ProductRating, __assign({ size: "small", resource: resource }, slots.ratings))),
        react_1.default.createElement(__1.DisplayFields, __assign({ fields: fields, resource: resource }, slots.fields)),
        enableUsers && react_1.default.createElement(__1.UserChip, __assign({ user: resource === null || resource === void 0 ? void 0 : resource.user }, slots.user))));
};
exports.default = SecondaryFields;
