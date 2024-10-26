'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminZapItem = function (props) {
    var _a;
    var zap = props.resource, sortable = props.sortable, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { enableBorder: true, sortable: sortable, icon: zap.zap_type === 'email' ? 'Mail' : 'Webhook', primary: zap === null || zap === void 0 ? void 0 : zap.zap_type, secondary: (zap === null || zap === void 0 ? void 0 : zap.url) || ((_a = zap === null || zap === void 0 ? void 0 : zap.email) === null || _a === void 0 ? void 0 : _a.name), secondaryAction: react_1.default.createElement(components_1.Label, { label: zap === null || zap === void 0 ? void 0 : zap.event_type }), handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = AdminZapItem;
