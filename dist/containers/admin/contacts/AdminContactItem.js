"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminContactItem = function (props) {
    var contact = props.resource, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { primary: contact === null || contact === void 0 ? void 0 : contact.name, secondary: contact === null || contact === void 0 ? void 0 : contact.email, avatar: react_1.default.createElement(components_1.UserAvatar, { user: contact }), handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = AdminContactItem;
