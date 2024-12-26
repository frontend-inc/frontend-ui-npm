'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FormField_1 = __importDefault(require("./FormField"));
var lodash_1 = require("lodash");
var helpers_1 = require("../../../helpers");
var FormFields = function (props) {
    var errors = props.errors, loading = props.loading, fields = props.fields, resource = props.resource, handleChange = props.handleChange, handleRemove = props.handleRemove, handleAddAttachment = props.handleAddAttachment, handleRemoveAttachment = props.handleRemoveAttachment, inputOptions = props.inputOptions, inputParams = props.inputParams;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-4 w-full p-1" }, fields === null || fields === void 0 ? void 0 : fields.map(function (field, index) {
        if (!(0, helpers_1.validateFieldConditions)((field === null || field === void 0 ? void 0 : field.conditions) || [], resource)) {
            return null;
        }
        return (react_1.default.createElement(FormField_1.default, { key: index, errors: errors, field: field, value: (0, lodash_1.get)(resource, field.name) || (field === null || field === void 0 ? void 0 : field.default), 
            //@ts-ignore
            handleChange: handleChange, handleRemove: handleRemove, handleAddAttachment: handleAddAttachment, handleRemoveAttachment: handleRemoveAttachment, inputOptions: inputOptions, inputParams: inputParams }));
    })));
};
exports.default = FormFields;
