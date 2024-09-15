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
var material_1 = require("@mui/material");
var FormField_1 = __importDefault(require("./FormField"));
var lodash_1 = require("lodash");
var helpers_1 = require("../../../helpers");
var FormFields = function (props) {
    var errors = props.errors, loading = props.loading, fields = props.fields, resource = props.resource, handleChange = props.handleChange, handleRemove = props.handleRemove, handleAddAttachment = props.handleAddAttachment, handleRemoveAttachment = props.handleRemoveAttachment, inputOptions = props.inputOptions, inputParams = props.inputParams;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: __assign(__assign({}, sx.root), (loading && sx.loading)) }, fields === null || fields === void 0 ? void 0 : fields.map(function (field, index) {
        if (!(0, helpers_1.validateFieldConditions)((field === null || field === void 0 ? void 0 : field.conditions) || [], resource)) {
            return null;
        }
        return (react_1.default.createElement(FormField_1.default, { key: index, resource: resource, errors: errors, field: field, value: (0, lodash_1.get)(resource, field.name) || (field === null || field === void 0 ? void 0 : field.default), 
            //@ts-ignore
            handleChange: handleChange, handleRemove: handleRemove, handleAddAttachment: handleAddAttachment, handleRemoveAttachment: handleRemoveAttachment, inputOptions: inputOptions, inputParams: inputParams }));
    })));
};
exports.default = FormFields;
var sx = {
    root: {
        width: '100%',
    },
    button: {
        mt: 2,
    },
    loading: {
        opacity: 0.5,
    },
};
