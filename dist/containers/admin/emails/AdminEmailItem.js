"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var colors_1 = require("@mui/material/colors");
var EmailItem = function (props) {
    var email = props.resource, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { enableBorder: true, primary: email.name, secondary: email.subject, icon: "Mail", color: colors_1.deepPurple[500], secondaryActions: (email === null || email === void 0 ? void 0 : email.internal) && react_1.default.createElement(components_1.Label, { label: "System" }), handleClick: function () { return handleEdit(email); }, handleEdit: function () { return handleEdit(email); }, handleDelete: (email === null || email === void 0 ? void 0 : email.internal) ? undefined : function () { return handleDelete(email); } }));
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
