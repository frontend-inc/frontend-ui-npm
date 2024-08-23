"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var ResourceDetails = function (props) {
    var _a = props || {}, loading = _a.loading, avatar = _a.avatar, open = _a.open, handleClose = _a.handleClose, resource = _a.resource, primary = _a.primary, secondary = _a.secondary, label = _a.label, image = _a.image, _b = _a.fields, fields = _b === void 0 ? [] : _b, enableEdit = _a.enableEdit, enableDelete = _a.enableDelete, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete;
    return (react_1.default.createElement(components_1.Drawer, { open: open, handleClose: handleClose, buttons: (enableEdit || enableDelete) && (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: { width: '100%' } },
            enableEdit && (react_1.default.createElement(material_1.Button, { fullWidth: true, variant: 'contained', color: 'primary', onClick: handleEdit }, "Edit")),
            enableDelete && (react_1.default.createElement(material_1.Button, { fullWidth: true, variant: 'contained', color: 'secondary', onClick: handleDelete }, "Delete")))) },
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 }, loading == true ? (react_1.default.createElement(components_1.CircularLoader, { size: 44 })) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(material_1.Stack, { direction: "column", sx: sx.content, spacing: 0.5 },
                image && (react_1.default.createElement(material_1.Box, { sx: sx.image },
                    react_1.default.createElement(components_1.Image, { height: 160, src: image }))),
                avatar && avatar,
                react_1.default.createElement(material_1.Typography, { variant: "h5" }, primary),
                secondary && (react_1.default.createElement(material_1.Typography, { variant: "overline" }, secondary)),
                label && (react_1.default.createElement(components_1.Label, { label: label }))), fields === null || fields === void 0 ? void 0 :
            fields.map(function (field, index) { return (react_1.default.createElement(components_1.Field, { enableBorder: true, key: index, 
                //@ts-ignore
                field: field, resource: resource, direction: "row" })); }))))));
};
exports.default = ResourceDetails;
var sx = {
    content: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '160px',
    },
};
