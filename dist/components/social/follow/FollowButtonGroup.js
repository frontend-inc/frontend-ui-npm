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
var FollowModal_1 = __importDefault(require("./FollowModal"));
var FollowButtonGroup = function (props) {
    var user = props.user;
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var handleClick = function () {
        setOpen(true);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, alignItems: "center", divider: react_1.default.createElement(material_1.Divider, { sx: sx.divider }) },
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, alignItems: "center" },
                react_1.default.createElement(material_1.Link, { sx: sx.link, variant: "overline", onClick: handleClick }, user === null || user === void 0 ? void 0 : user.display_num_followers)),
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, alignItems: "center" },
                react_1.default.createElement(material_1.Link, { variant: "overline", sx: sx.link, onClick: handleClick }, user === null || user === void 0 ? void 0 : user.display_num_following))),
        react_1.default.createElement(FollowModal_1.default, { open: open, handleClose: function () { return setOpen(false); }, user: user })));
};
exports.default = FollowButtonGroup;
var sx = {
    divider: {
        borderRight: '2px solid',
        borderColor: 'divider',
        height: 16,
    },
    link: {
        minWidth: 100,
        boxShadow: 0,
        color: 'text.secondary',
        textDecoration: 'none',
    },
};
