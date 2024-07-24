"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var Resource = function (props) {
    var _a;
    var icon = props.icon, avatar = props.avatar, color = props.color, resource = props.resource, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, secondaryActions = props.secondaryActions, menuActions = props.menuActions, _b = props.displayFields, displayFields = _b === void 0 ? [] : _b, sortable = props.sortable, _c = props.isDragging, isDragging = _c === void 0 ? false : _c, _d = props.enableBorder, enableBorder = _d === void 0 ? false : _d, secondary = props.secondary;
    var title = (resource || {}).title;
    var image = (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url;
    return (react_1.default.createElement(material_1.List, { sx: __assign(__assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)), (isDragging && sx.isDragging)) },
        react_1.default.createElement(material_1.ListItem, { disablePadding: true, secondaryAction: react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.actions },
                secondaryActions,
                (menuActions || handleEdit || handleDelete) && (react_1.default.createElement(__1.MenuButton, { handleEdit: handleEdit, handleDelete: handleDelete }, menuActions))) },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: handleClick ? function () { return handleClick(resource); } : undefined },
                sortable && (react_1.default.createElement(material_1.ListItemIcon, { sx: sx.dragHandle },
                    react_1.default.createElement(__1.Icon, { name: "GripVertical", size: 20, color: 'text.secondary' }))),
                avatar && react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon }, avatar),
                !avatar && image && (react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(__1.Image, { src: image, width: 32, height: 32, alt: image }))),
                icon && (react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(material_1.Avatar, { sx: {
                            bgcolor: color,
                        } },
                        react_1.default.createElement(__1.Icon, { name: icon, size: 24 })))),
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "body1" }, title), secondary: react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource }),
                        secondary) })))));
};
exports.default = Resource;
var sx = {
    root: {
        p: 0,
        m: 0,
    },
    rootBorder: {
        borderBottom: '1px solid',
        borderColor: 'divider'
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
    dragHandle: {
        width: 24,
        cursor: 'grab',
        '&:active': {
            cursor: 'grabbing',
        },
    },
    isDragging: {
        border: '2px solid red',
    }
};
