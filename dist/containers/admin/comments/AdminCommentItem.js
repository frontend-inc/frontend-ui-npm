"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var material_1 = require("@mui/material");
var AdminCommentItem = function (props) {
    var _a;
    var comment = props.resource, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    var getCommentUserName = function (comment) {
        var _a, _b;
        return ((_a = comment === null || comment === void 0 ? void 0 : comment.user) === null || _a === void 0 ? void 0 : _a.first_name) + ' ' + ((_b = comment === null || comment === void 0 ? void 0 : comment.user) === null || _b === void 0 ? void 0 : _b.last_name);
    };
    return (react_1.default.createElement(components_1.ResourceListItem, { primary: getCommentUserName(comment), secondary: react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0 },
            react_1.default.createElement(material_1.Typography, { variant: "overline", color: 'text.secondary' },
                "@", (_a = comment === null || comment === void 0 ? void 0 : comment.user) === null || _a === void 0 ? void 0 :
                _a.username),
            react_1.default.createElement(material_1.Typography, { variant: "body2", color: 'text.secondary' }, (0, helpers_1.truncate)(comment === null || comment === void 0 ? void 0 : comment.body, 40))), avatar: react_1.default.createElement(components_1.UserAvatar, { user: comment === null || comment === void 0 ? void 0 : comment.user }), secondaryActions: (comment === null || comment === void 0 ? void 0 : comment.flagged) && react_1.default.createElement(components_1.Label, { label: "Flagged" }), handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = AdminCommentItem;
