"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var MyAccountForm = function (props) {
    var loading = props.loading, user = props.user, handleSubmit = props.handleSubmit, handleChange = props.handleChange, handleLogout = props.handleLogout, handleDeleteAvatar = props.handleDeleteAvatar;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(components_1.ImageInput, { value: user.avatar, name: "avatar", handleChange: handleChange, handleRemove: handleDeleteAvatar }),
        react_1.default.createElement(components_1.TextInput, { value: user.first_name, name: "first_name", placeholder: "First name", handleChange: handleChange }),
        react_1.default.createElement(components_1.TextInput, { value: user.last_name, name: "last_name", placeholder: "Last name", handleChange: handleChange }),
        react_1.default.createElement(components_1.TextInput, { multiline: true, rows: 3, name: "bio", value: user.bio, placeholder: "Bio", handleChange: handleChange }),
        react_1.default.createElement(components_1.SwitchInput, { value: user === null || user === void 0 ? void 0 : user.accepts_marketing, placeholder: "Accept email marketing", name: "accepts_marketing", handleChange: handleChange }),
        react_1.default.createElement(material_1.Button, { color: "primary", variant: "contained", onClick: handleSubmit, startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, "Save"),
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
