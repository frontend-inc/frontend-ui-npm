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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var context_1 = require("../../../context");
var material_1 = require("@mui/material");
var AdminTabAuth_1 = __importDefault(require("./AdminTabAuth"));
var AdminTabIcon_1 = __importDefault(require("./AdminTabIcon"));
var image_1 = __importDefault(require("next/image"));
var router_1 = require("next/router");
var TabIcons = function (props) {
    var logo = props.logo, menuItems = props.menuItems, handleClick = props.handleClick, secondaryActions = props.secondaryActions;
    var activeTab = (0, react_1.useContext)(context_1.AdminContext).activeTab;
    var router = (0, router_1.useRouter)();
    var handleHomeClick = function () {
        router.push('/admin');
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Box, { width: "100%" },
            react_1.default.createElement(material_1.Box, { sx: sx.menuItems },
                logo && (react_1.default.createElement(material_1.Button, { sx: sx.logoButton, onClick: handleHomeClick },
                    react_1.default.createElement(image_1.default, { src: logo, height: 24, width: 24, alt: "logo" }))), menuItems === null || menuItems === void 0 ? void 0 :
                menuItems.map(function (item, index) { return (react_1.default.createElement(material_1.Box, { px: 1, key: index },
                    react_1.default.createElement(AdminTabIcon_1.default, { selected: activeTab == item.id, icon: item.icon, handleClick: function () { return handleClick(item); } }))); }))),
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, divider: react_1.default.createElement(material_1.Divider, null), sx: sx.bottomTabs },
            secondaryActions,
            react_1.default.createElement(AdminTabAuth_1.default, null))));
};
exports.default = TabIcons;
var sx = {
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRight: '1px solid',
        borderColor: 'divider',
    },
    icon: {
        color: 'primary.contrastText',
    },
    menuItems: {
        my: 1,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column',
        overflow: 'none',
        gap: '10px',
    },
    logo: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomTabs: {
        mb: 2,
    },
    logoButton: {
        p: 0,
        m: 0,
        height: 24,
        width: 24,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
};
