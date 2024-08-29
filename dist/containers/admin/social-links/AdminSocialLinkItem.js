"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminSocialLinkItem = function (props) {
    var _a = props || {}, socialLink = _a.resource, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { sortable: true, avatar: react_1.default.createElement(components_1.SocialLink, { size: 32, provider: socialLink === null || socialLink === void 0 ? void 0 : socialLink.provider }), color: "primary.main", primary: socialLink === null || socialLink === void 0 ? void 0 : socialLink.label, secondary: socialLink === null || socialLink === void 0 ? void 0 : socialLink.url, handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = AdminSocialLinkItem;
