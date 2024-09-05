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
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var icons_material_1 = require("@mui/icons-material");
var helpers_1 = require("../../../helpers");
var DocumentItem = function (props) {
    var item = props.item, handleEditItem = props.handleEditItem, handleRemoveItem = props.handleRemoveItem, _a = props.enableCssFix, enableCssFix = _a === void 0 ? true : _a;
    return (react_1.default.createElement(material_1.Box
    //@ts-ignore
    , { 
        //@ts-ignore
        sx: __assign(__assign(__assign({}, sx.root), (item.isDragging && sx.isDragging)), (item.isDragging && enableCssFix && sx.cssFix)) },
        react_1.default.createElement(material_1.Box, { sx: sx.dragHandle },
            react_1.default.createElement(icons_material_1.DragIndicator, { sx: sx.secondaryIcon })),
        react_1.default.createElement(material_1.Box, { sx: sx.content },
            react_1.default.createElement(material_1.Box, { sx: sx.contentHeader },
                react_1.default.createElement(material_1.Box, { sx: sx.leftContent },
                    react_1.default.createElement(components_1.Label, { label: item === null || item === void 0 ? void 0 : item.content_type })),
                react_1.default.createElement(material_1.Box, { sx: sx.rightContent },
                    react_1.default.createElement(material_1.Box, { sx: sx.secondaryActions },
                        react_1.default.createElement(components_2.PublishLabel, { published: item === null || item === void 0 ? void 0 : item.published }),
                        react_1.default.createElement(components_1.MenuButton, null,
                            react_1.default.createElement(material_1.MenuItem, { onClick: function () { return handleEditItem(item); } },
                                react_1.default.createElement(material_1.Typography, { variant: "body2", color: "textPrimary" }, "Edit")),
                            react_1.default.createElement(material_1.MenuItem, { onClick: function () { return handleRemoveItem(item); } },
                                react_1.default.createElement(material_1.Typography, { variant: "body2", color: "textPrimary" }, "Remove")))))),
            react_1.default.createElement(material_1.Box, { sx: sx.contentBody },
                react_1.default.createElement(material_1.Typography, { sx: sx.title, variant: "body1", color: "textPrimary" }, (0, helpers_1.truncate)(item === null || item === void 0 ? void 0 : item.title))))));
};
exports.default = DocumentItem;
var sx = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        bgcolor: 'background.paper',
        borderRadius: 1,
        border: '1px solid',
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
        alignItems: 'flex-end',
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
    dragHandle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30px',
        borderRight: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.hover',
        borderRadius: 1,
    },
    cssFix: {
        ml: [0, '260px'],
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
