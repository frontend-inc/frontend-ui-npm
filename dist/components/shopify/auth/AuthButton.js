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
var webstudio_shopify_1 = require("webstudio-shopify");
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var router_1 = require("next/router");
var lucide_react_1 = require("lucide-react");
var context_1 = require("../../../context");
var AuthAvatarButton = function () {
    var router = (0, router_1.useRouter)();
    var _a = (0, webstudio_shopify_1.useAuth)(), logout = _a.logout, customer = _a.customer;
    var _b = (0, hooks_1.useMenu)({}), open = _b.open, anchorEl = _b.anchorEl, closeMenu = _b.closeMenu, toggleMenu = _b.toggleMenu;
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var handleClick = function (path) {
        closeMenu();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        router.push("".concat(clientUrl, "/").concat(path));
    };
    var handleLogoutClick = function () {
        logout();
        router.push("".concat(clientUrl, "/shopify/login"));
    };
    if (!customer)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.IconButton, { sx: sx.button, onClick: toggleMenu },
            react_1.default.createElement(lucide_react_1.User, { size: 32, color: "black" })),
        react_1.default.createElement(components_1.UserMenu, { open: open, anchorEl: anchorEl, toggleMenu: toggleMenu, handleLogoutClick: handleLogoutClick, handleClick: handleClick })));
};
exports.default = AuthAvatarButton;
var sx = {
    button: {
        bgcolor: 'background.paper',
    },
};
