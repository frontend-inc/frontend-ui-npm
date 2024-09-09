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
var sortable_1 = require("@dnd-kit/sortable");
var KanBanCard = function (props) {
    var _a = props || {}, id = _a.id, loading = _a.loading, label = _a.label, primary = _a.primary, secondary = _a.secondary, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, image = _a.image, actions = _a.actions, // Todo: rendering actions inteferes with drag/drop
    enableDragging = _a.enableDragging, _b = _a.height, height = _b === void 0 ? 240 : _b, _c = _a.slots, slots = _c === void 0 ? {
        item: {},
        image: {},
    } : _c;
    var _d = (0, sortable_1.useSortable)({
        id: id,
    }), attributes = _d.attributes, listeners = _d.listeners, setNodeRef = _d.setNodeRef;
    return (react_1.default.createElement(material_1.Stack, __assign({ direction: "column", sx: __assign(__assign(__assign({}, sx.root), (loading && sx.rootLoading)), (enableDragging && sx.rootDragging)) }, slots.item),
        react_1.default.createElement(material_1.Stack, __assign({ direction: "column", ref: setNodeRef }, attributes, listeners),
            image && (react_1.default.createElement(material_1.Box, { sx: sx.image },
                react_1.default.createElement(components_1.Image, __assign({ label: label, src: image, height: height, alt: primary, handleClick: handleClick }, slots.image)))),
            react_1.default.createElement(material_1.Stack, { direction: "row", alignItems: "flex-start" },
                react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0.5, sx: sx.content },
                    react_1.default.createElement(material_1.Typography, { sx: sx.title, color: "text.primary", variant: "subtitle1" }, primary),
                    react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "body2" }, secondary)))),
        react_1.default.createElement(material_1.Box, { sx: sx.footer },
            react_1.default.createElement(material_1.Button, { onClick: handleClick, size: "small", variant: "contained", color: "secondary", sx: sx.button }, "Details"),
            react_1.default.createElement(material_1.Stack, { direction: "row", alignItems: "flex-end" }, secondaryAction))));
};
exports.default = KanBanCard;
var sx = {
    root: {
        p: 0,
        my: 1,
        width: 260,
        cursor: 'pointer',
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.default',
        transition: 'box-shadow 0.3s',
        overflow: 'hidden',
        '&:hover': {
            boxShadow: 2,
        },
    },
    rootDragging: {
        boxShadow: 2,
        transform: 'rotate(3deg)',
    },
    rootLoading: {
        opacity: 0.5,
    },
    dragHandle: {
        width: 32,
        minWidth: 32,
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        py: 1,
        cursor: 'grab',
        '&:active': {
            cursor: 'grabbing',
        },
    },
    button: {
        textTransform: 'uppercase',
    },
    image: {
        overflow: 'hidden',
        borderRadius: function (theme) { return "".concat(theme.spacing(1), "px ").concat(theme.spacing(1), "px 0 0"); },
        width: '100%',
    },
    content: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
        p: 1,
    },
    header: {
        ml: 1,
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
    title: {
        width: '100%',
    },
    description: {
        maxWidth: '240px',
    },
    footer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        px: 1,
        pb: 1,
    },
};
