"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Resource_1 = __importDefault(require("./Resource"));
var ResourceListItem = function (props) {
    var _a;
    var resource = props.resource, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, secondaryActions = props.secondaryActions, menuActions = props.menuActions, _b = props.displayFields, displayFields = _b === void 0 ? [] : _b;
    var _c = resource || {}, icon = _c.icon, color = _c.color, title = _c.title, description = _c.description;
    var image = (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url;
    return (react_1.default.createElement(Resource_1.default, { icon: icon, color: color, title: title, description: description, image: image, displayFields: displayFields, resource: resource, handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete, secondaryActions: secondaryActions, menuActions: menuActions }));
};
exports.default = ResourceListItem;
var sx = {
    root: {
        p: 0,
        m: 0,
    },
    listItemButton: {
        p: 1,
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
    actions: {
        alignItems: 'center',
    },
    listItemIcon: {
        mr: 2,
    },
};
