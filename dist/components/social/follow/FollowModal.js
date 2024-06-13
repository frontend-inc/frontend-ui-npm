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
var material_1 = require("@mui/material");
var __1 = require("../..");
var FollowUser_1 = __importDefault(require("./FollowUser"));
var FollowModal = function (props) {
    var _a = props || {}, open = _a.open, handleClose = _a.handleClose, user = _a.user;
    var _b = (0, react_1.useState)(0), currentTab = _b[0], setCurrentTab = _b[1];
    var handleTabChange = function (event, newValue) {
        setCurrentTab(newValue);
    };
    return (react_1.default.createElement(__1.Modal, { open: open, handleClose: handleClose, title: "@".concat(user === null || user === void 0 ? void 0 : user.username) },
        react_1.default.createElement(material_1.Tabs, { variant: "fullWidth", onChange: handleTabChange, value: currentTab },
            react_1.default.createElement(material_1.Tab, { label: "Followers", value: 0 }),
            react_1.default.createElement(material_1.Tab, { label: "Following", value: 1 })),
        react_1.default.createElement(material_1.Box, { sx: sx.container },
            currentTab == 0 && (react_1.default.createElement(__1.ResourceList, { name: 'user', url: "/api/v1/cms/users/".concat(user === null || user === void 0 ? void 0 : user.username, "/followers"), enableSearch: true, component: FollowUser_1.default })),
            currentTab == 1 && (react_1.default.createElement(__1.ResourceList, { name: 'user', url: "/api/v1/cms/users/".concat(user === null || user === void 0 ? void 0 : user.username, "/following"), enableSearch: true, component: FollowUser_1.default })))));
};
exports.default = FollowModal;
var sx = {
    container: {
        py: 2,
        minHeight: 200
    }
};
