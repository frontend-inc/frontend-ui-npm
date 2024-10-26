'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var constants_1 = require("../../../constants");
var AdminFieldVariantListItem = function (props) {
    var field = props.field, handleClick = props.handleClick;
    var fieldVariant = constants_1.FIELD_VARIANTS.find(function (f) { return f.variant === (field === null || field === void 0 ? void 0 : field.variant); });
    return (react_1.default.createElement(components_1.MenuListItem, { icon: fieldVariant === null || fieldVariant === void 0 ? void 0 : fieldVariant.icon, color: field.color, title: field.label, description: field.description, handleClick: function () { return handleClick(field); } }));
};
exports.default = AdminFieldVariantListItem;
