"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var components_3 = require("../../../components");
var helpers_1 = require("../../../helpers");
var CollectionKanBanCard = function (props) {
    var _a;
    var _b = props || {}, id = _b.id, loading = _b.loading, buttons = _b.buttons, resource = _b.resource, _c = _b.displayFields, displayFields = _c === void 0 ? [] : _c, _d = _b.height, height = _d === void 0 ? 200 : _d, handleClick = _b.handleClick, enableGradient = _b.enableGradient, enableOverlay = _b.enableOverlay, _e = _b.enableDragging, enableDragging = _e === void 0 ? false : _e, enableComments = _b.enableComments, enableLikes = _b.enableLikes, enableFavorites = _b.enableFavorites, enableRatings = _b.enableRatings, enableEdit = _b.enableEdit, enableDelete = _b.enableDelete, handleEdit = _b.handleEdit, handleDelete = _b.handleDelete, enableUsers = _b.enableUsers;
    return (react_1.default.createElement(components_2.KanBanCard, { id: resource === null || resource === void 0 ? void 0 : resource.id, primary: resource === null || resource === void 0 ? void 0 : resource.title, enableDragging: enableDragging, loading: loading, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, handleClick: handleClick, secondary: react_1.default.createElement(components_1.SecondaryFields, { enableRatings: enableRatings, enableUsers: enableUsers, fields: displayFields, resource: resource }), actions: react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(components_1.SocialButtons, { resource: resource, enableLikes: enableLikes, enableFavorites: enableFavorites, enableComments: enableComments })), secondaryAction: react_1.default.createElement(components_3.ButtonActions, { numVisible: 0, buttons: (0, helpers_1.buildActions)({
                enableEdit: enableEdit,
                enableDelete: enableDelete,
                handleEdit: handleEdit,
                handleDelete: handleDelete,
                buttons: buttons,
            }), resource: resource }), slots: {
            image: {
                enableGradient: enableGradient,
                enableOverlay: enableOverlay,
            }
        } }));
};
exports.default = CollectionKanBanCard;
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
