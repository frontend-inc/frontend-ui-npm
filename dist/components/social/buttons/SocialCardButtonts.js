"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var lucide_react_1 = require("lucide-react");
var icons_material_1 = require("@mui/icons-material");
var helpers_1 = require("../../../helpers");
var frontend_js_1 = require("frontend-js");
var SocialCardButtons = function (props) {
    var item = props.item, handleFavorite = props.handleFavorite, handleComment = props.handleComment, handleShare = props.handleShare, _a = props.isFavoriteFn, isFavoriteFn = _a === void 0 ? helpers_1.isFavorited : _a;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var _b = (0, react_1.useState)(false), isFavorite = _b[0], setIsFavorite = _b[1];
    var handleFavoriteClick = function (item) {
        setIsFavorite(!isFavorite);
        handleFavorite(item);
    };
    (0, react_1.useEffect)(function () {
        if (item) {
            if (isFavoriteFn(currentUser, item === null || item === void 0 ? void 0 : item.id)) {
                setIsFavorite(true);
            }
            else {
                setIsFavorite(false);
            }
        }
    }, [currentUser, item]);
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(material_1.IconButton, { size: "small", onClick: function () { return handleFavoriteClick(item); } }, isFavorite ? (react_1.default.createElement(icons_material_1.FavoriteOutlined, { sx: sx.favorite })) : (react_1.default.createElement(icons_material_1.FavoriteBorderOutlined, null))),
        react_1.default.createElement(material_1.IconButton, { size: "small", onClick: function () { return handleComment(item); } },
            react_1.default.createElement(lucide_react_1.MessageCircle, { size: 24 })),
        react_1.default.createElement(material_1.IconButton, { size: "small", onClick: function () { return handleShare(item); } },
            react_1.default.createElement(lucide_react_1.Send, { size: 24 }))));
};
exports.default = SocialCardButtons;
var sx = {
    actions: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    favorite: {
        color: 'error.main',
    },
};
