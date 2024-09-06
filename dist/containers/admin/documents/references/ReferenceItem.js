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
var components_1 = require("../../../../components");
var components_2 = require("../../../../components");
var helpers_1 = require("../../../../helpers");
var SortableReferenceItem = function (props) {
    var _a;
    var item = props.item, handleEditItem = props.handleEditItem, handleRemoveItem = props.handleRemoveItem;
    var target = (item || {}).target;
    return (react_1.default.createElement(material_1.Box
    //@ts-ignore
    , { 
        //@ts-ignore
        sx: __assign(__assign({}, sx.root), (item.isDragging && sx.isDragging)) },
        react_1.default.createElement(material_1.Box, { sx: sx.dragHandle },
            react_1.default.createElement(components_1.Icon, { name: "GripVertical" })),
        react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
            react_1.default.createElement(components_1.Image, { src: (_a = target === null || target === void 0 ? void 0 : target.image) === null || _a === void 0 ? void 0 : _a.url, alt: target === null || target === void 0 ? void 0 : target.title, height: 72, disableBorder: true, disableBorderRadius: true })),
        react_1.default.createElement(material_1.Box, { sx: sx.content },
            react_1.default.createElement(material_1.Box, { sx: sx.contentHeader },
                react_1.default.createElement(material_1.Box, { sx: sx.leftContent },
                    react_1.default.createElement(components_1.Label, { darkMode: true, color: "background.main", label: target === null || target === void 0 ? void 0 : target.content_type })),
                react_1.default.createElement(material_1.Box, { sx: sx.rightContent },
                    react_1.default.createElement(material_1.Box, { sx: sx.secondaryActions },
                        react_1.default.createElement(components_2.PublishLabel, { published: target === null || target === void 0 ? void 0 : target.published }),
                        react_1.default.createElement(components_1.MenuButton, null,
                            react_1.default.createElement(material_1.MenuItem, { onClick: function () { return handleEditItem(target); } },
                                react_1.default.createElement(material_1.Typography, { variant: "body2", color: "textPrimary" }, "Edit")),
                            react_1.default.createElement(material_1.MenuItem, { onClick: function () { return handleRemoveItem(item); } },
                                react_1.default.createElement(material_1.Typography, { variant: "body2", color: "textPrimary" }, "Remove")))))),
            react_1.default.createElement(material_1.Box, { sx: sx.contentBody },
                react_1.default.createElement(material_1.Typography, { sx: sx.title, variant: "body1", color: "textPrimary" }, (0, helpers_1.truncate)(target === null || target === void 0 ? void 0 : target.title))))));
};
exports.default = SortableReferenceItem;
var sx = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        bgcolor: 'background.paper',
        borderRadius: 1,
        border: '2px solid',
        borderColor: 'divider',
        p: 0,
        mb: 1,
        width: '100%',
    },
    content: {
        width: '100%',
    },
    contentHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        px: 1,
    },
    contentBody: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        flexGrow: 1,
        px: 1,
        pb: 1,
    },
    leftContent: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
    },
    rightContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    imageContainer: {
        width: 72,
    },
    dragHandle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30px',
        bgcolor: 'background.default',
        borderRadius: '8px 0 0 8px',
    },
    icon: {
        color: 'primary.main',
    },
    secondaryIcon: {
        color: 'text.secondary',
    },
    isDragging: {
        bgcolor: 'background.paper',
    },
    visibilityIcon: {
        height: 20,
        width: 20,
        color: 'secondary.main',
    },
    title: {
        fontSize: 15,
        fontWeight: 500,
    },
    secondaryActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
};
