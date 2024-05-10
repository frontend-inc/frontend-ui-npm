"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var TeamForm = function (props) {
    var loading = props.loading, errors = props.errors, team = props.team, handleSubmit = props.handleSubmit, handleCancel = props.handleCancel, handleChange = props.handleChange, handleDeleteImage = props.handleDeleteImage;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    if ((currentUser === null || currentUser === void 0 ? void 0 : currentUser.team_role) != 'admin') {
        return (react_1.default.createElement(components_1.Placeholder, { icon: 'lock', title: 'Unauthorized', description: 'You do not have permission to access this page', actions: react_1.default.createElement(material_1.Button, { color: "secondary", onClick: handleCancel, variant: "contained", startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, "Cancel") }));
    }
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(components_1.ImageInput, { value: team.image, name: "image", handleChange: handleChange, handleRemove: handleDeleteImage }),
        react_1.default.createElement(components_1.TextInput, { errors: errors, value: team.name, name: "name", placeholder: "Name", handleChange: handleChange }),
        react_1.default.createElement(material_1.Stack, { sx: sx.actions, direction: 'row', spacing: 1 },
            react_1.default.createElement(material_1.Button, { color: "secondary", onClick: handleCancel, variant: "contained", startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, "Cancel"),
            react_1.default.createElement(material_1.Button, { color: "primary", onClick: handleSubmit, variant: "contained", startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, "Save"))));
};
exports.default = TeamForm;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    },
    actions: {
        width: '100%',
        justifyContent: 'flex-end'
    }
};
