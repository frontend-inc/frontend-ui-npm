"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminActionItem = function (props) {
    var _a;
    var resource = props.resource, sortable = props.sortable, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { enableBorder: true, sortable: sortable, icon: "Zap", color: "primary.main", primary: resource === null || resource === void 0 ? void 0 : resource.label, secondary: (_a = resource === null || resource === void 0 ? void 0 : resource.collection) === null || _a === void 0 ? void 0 : _a.name, secondaryAction: react_1.default.createElement(components_1.Label, { label: resource === null || resource === void 0 ? void 0 : resource.event_type }), handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = AdminActionItem;
