"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("components");
var AddressItem = function (props) {
    var address = props.address, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, _a = props.disableActions, disableActions = _a === void 0 ? false : _a;
    return (react_1.default.createElement(material_1.ListItem, { disableGutters: true, secondaryAction: !disableActions && (react_1.default.createElement(components_1.MenuButton, null,
            react_1.default.createElement(material_1.MenuItem, { onClick: function () { return handleEdit(address === null || address === void 0 ? void 0 : address.id); } }, "Edit"),
            react_1.default.createElement(material_1.MenuItem, { onClick: function () { return handleDelete(address); } }, "Delete"))) },
        react_1.default.createElement(material_1.ListItemButton, { onClick: function () { return handleClick(address === null || address === void 0 ? void 0 : address.id); }, sx: sx.item },
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { gutterBottom: true, variant: "subtitle1" }, address === null || address === void 0 ? void 0 :
                    address.firstName,
                    " ", address === null || address === void 0 ? void 0 :
                    address.lastName), secondary: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(material_1.Typography, { gutterBottom: true, variant: "body2", color: "textSecondary" }, address.address1),
                    address.address2 && (react_1.default.createElement(material_1.Typography, { gutterBottom: true, variant: "body2", color: "textSecondary" }, address.address2)),
                    react_1.default.createElement(material_1.Typography, { gutterBottom: true, variant: "body2", color: "textSecondary" }, address === null || address === void 0 ? void 0 :
                        address.city,
                        ", ", address === null || address === void 0 ? void 0 :
                        address.province,
                        " ", address === null || address === void 0 ? void 0 :
                        address.zip)) }))));
};
exports.default = AddressItem;
var sx = {
    root: {},
    button: {
        p: 0,
    },
    item: {
        borderRadius: '10px',
        m: 0,
        width: '100%',
        maxWidth: '100%',
    },
    card: {
        borderRadius: '10px',
        backgroundColor: 'primary.contrastText',
        borderColor: 'common.card',
    },
};
