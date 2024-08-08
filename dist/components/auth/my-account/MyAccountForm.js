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
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var constants_1 = require("../../../constants");
var MyAccountForm = function (props) {
    var loading = props.loading, errors = props.errors, user = props.user, _a = props.metafields, metafields = _a === void 0 ? [] : _a, handleSubmit = props.handleSubmit, handleChange = props.handleChange, handleLogout = props.handleLogout, handleDeleteAvatar = props.handleDeleteAvatar;
    var formFields = constants_1.USER_FORM_FIELDS;
    formFields = __spreadArray(__spreadArray([], formFields, true), [
        {
            label: 'Accept email marketing',
            name: 'accepts_marketing',
            variant: 'boolean',
        },
    ], false);
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(components_1.FormFields, { loading: loading, errors: errors, 
            //@ts-ignore
            fields: formFields, resource: user, handleChange: handleChange, handleRemove: handleDeleteAvatar, handleSubmit: handleSubmit, buttonText: "Save" }),
        react_1.default.createElement(material_1.Button, { color: "secondary", variant: "contained", onClick: handleLogout }, "Logout")));
};
exports.default = MyAccountForm;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    },
};
