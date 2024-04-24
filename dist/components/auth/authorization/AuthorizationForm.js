"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var AuthorizeForm = function (props) {
    var loading = props.loading, app = props.app, handleSubmit = props.handleSubmit;
    var permissions = [
        'Your name',
        'Your email address',
        'Your profile picture',
    ];
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Typography, { variant: "h5", sx: sx.title },
            "Do you authorize ", app === null || app === void 0 ? void 0 :
            app.name,
            " to access your account?"),
        react_1.default.createElement(material_1.Typography, { variant: "body2", sx: sx.title },
            "The following information will be shared with ",
            react_1.default.createElement("span", null, app === null || app === void 0 ? void 0 : app.name),
            ":"),
        react_1.default.createElement(material_1.List, { disablePadding: true }, permissions.map(function (permission, index) { return (react_1.default.createElement(material_1.ListItem, { disableGutters: true, disablePadding: true, key: index },
            react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                react_1.default.createElement(material_1.Typography, { variant: "body2" },
                    react_1.default.createElement(components_1.Icon, { name: "CheckSquare", color: "text.secondary", size: 20 }))),
            react_1.default.createElement(material_1.ListItemText, { primary: permission }))); })),
        react_1.default.createElement(material_1.Button, { fullWidth: true, color: "primary", onClick: handleSubmit, variant: "contained", endIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, "Continue"),
        react_1.default.createElement(material_1.Box, { sx: sx.termsAndConditions },
            react_1.default.createElement(material_1.Typography, { variant: "caption" },
                "By clicking \"Continue\" you agree to our",
                ' ',
                react_1.default.createElement(material_1.Link, { target: "_blank", href: "/terms-and-conditions" }, "Terms and Conditions"),
                "."))));
};
exports.default = AuthorizeForm;
var sx = {
    root: {
        mt: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    termsAndConditions: {
        my: 1,
        color: 'text.secondary',
    },
    title: {
        '& span': {
            fontWeight: 700,
        },
    },
    listItemIcon: {
        minWidth: 30,
    },
};
