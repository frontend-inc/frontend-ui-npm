'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var DisplayMetafield = function (props) {
    var field = props.field, resource = props.resource, disablePadding = props.disablePadding;
    return (react_1.default.createElement(components_1.AccordionItem, { primary: field.label, secondary: react_1.default.createElement(components_1.Field, { disableLabel: true, field: field, resource: resource }) }));
};
exports.default = DisplayMetafield;
