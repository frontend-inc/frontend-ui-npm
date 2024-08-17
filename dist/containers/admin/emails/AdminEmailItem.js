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
var components_1 = require("../../../components");
var colors_1 = require("@mui/material/colors");
var EmailItem = function (props) {
    var email = props.resource, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { enableBorder: true, resource: __assign({ title: email.name }, email), displayFields: [{ label: 'Subject', name: 'subject', variant: 'string' }], icon: 'Mail', color: colors_1.deepPurple[500], secondaryActions: (email === null || email === void 0 ? void 0 : email.internal) && react_1.default.createElement(components_1.Label, { label: "System" }), handleClick: function () { return handleEdit(email); }, handleEdit: function () { return handleEdit(email); }, handleDelete: (email === null || email === void 0 ? void 0 : email.internal) ? undefined : function () { return handleDelete(email); } }));
};
exports.default = EmailItem;
var sx = {
    root: {
        p: 0,
        borderRadius: 1,
        border: '2px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        '&:hover': {
            borderColor: 'primary.main',
        },
        my: 1,
    },
    secondaryActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    listItemButton: {
        p: 2,
    },
};
