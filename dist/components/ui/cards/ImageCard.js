"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var helpers_1 = require("../../../helpers");
var ImageCard = function (props) {
    var _a = props || {}, resource = _a.resource, handleClick = _a.handleClick, enableEdit = _a.enableEdit, enableDelete = _a.enableDelete, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete, _b = _a.enableGradient, enableGradient = _b === void 0 ? false : _b, _c = _a.enableOverlay, enableOverlay = _c === void 0 ? false : _c, _d = _a.enableFavorites, enableFavorites = _d === void 0 ? false : _d;
    var _e = resource || {}, title = _e.title, image = _e.image;
    return (react_1.default.createElement(components_1.LightDarkMode, { mode: "dark" },
        react_1.default.createElement(material_1.Box, { sx: sx.root },
            react_1.default.createElement(components_1.TouchableOpacity, { handleClick: handleClick },
                react_1.default.createElement(components_1.Image, { src: image === null || image === void 0 ? void 0 : image.url, height: 260, alt: title, enableGradient: enableGradient, enableOverlay: enableOverlay })),
            react_1.default.createElement(material_1.Box, { sx: sx.buttons },
                enableFavorites == true && (react_1.default.createElement(components_1.FavoriteButton, { handle: resource === null || resource === void 0 ? void 0 : resource.handle })),
                react_1.default.createElement(components_1.Actions, { resource: resource, numVisible: 0, buttons: (0, helpers_1.buildActions)({
                        enableEdit: enableEdit,
                        enableDelete: enableDelete,
                        handleEdit: handleEdit,
                        handleDelete: handleDelete,
                    }) })),
            react_1.default.createElement(material_1.Box, { sx: sx.userCard }, (resource === null || resource === void 0 ? void 0 : resource.user) && react_1.default.createElement(components_1.UserChip, { user: resource === null || resource === void 0 ? void 0 : resource.user })))));
};
exports.default = ImageCard;
var sx = {
    root: {
        position: 'relative',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: 1,
        transition: 'box-shadow 0.3s',
        '&:hover': {
            boxShadow: 2,
        },
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'absolute',
        top: 10,
        right: 10,
    },
    userCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
};
