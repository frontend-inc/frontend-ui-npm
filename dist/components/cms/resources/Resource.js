"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ResourceListItem_1 = __importDefault(require("./ResourceListItem"));
var helpers_1 = require("../../../helpers");
var Resource = function (props) {
    var _a;
    var icon = props.icon, color = props.color, avatar = props.avatar, resource = props.resource, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, secondaryActions = props.secondaryActions, menuActions = props.menuActions, sortable = props.sortable, _b = props.isDragging, isDragging = _b === void 0 ? false : _b, _c = props.enableBorder, enableBorder = _c === void 0 ? false : _c;
    return (react_1.default.createElement(ResourceListItem_1.default, { icon: icon, color: color, avatar: avatar, primary: resource === null || resource === void 0 ? void 0 : resource.title, secondary: (0, helpers_1.truncate)(resource === null || resource === void 0 ? void 0 : resource.description, 60), image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, handleClick: function () { return handleClick(resource); }, handleEdit: handleEdit, handleDelete: handleDelete, menuActions: menuActions, secondaryActions: secondaryActions, sortable: sortable, isDragging: isDragging, enableBorder: enableBorder }));
};
exports.default = Resource;
