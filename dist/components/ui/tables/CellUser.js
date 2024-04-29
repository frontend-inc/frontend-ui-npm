"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var CellUser = function (props) {
    var _a;
    var user = props.value;
    return (react_1.default.createElement(material_1.Box, { sx: sx.cell },
        react_1.default.createElement(material_1.Button, { sx: sx.button, size: "small", color: "secondary", startIcon: ((_a = user === null || user === void 0 ? void 0 : user.avatar) === null || _a === void 0 ? void 0 : _a.url) &&
                react_1.default.createElement(components_1.UserAvatar, { user: user }) },
            react_1.default.createElement(material_1.Typography, { variant: "caption" }, user === null || user === void 0 ? void 0 :
                user.first_name,
                " ", user === null || user === void 0 ? void 0 :
                user.last_name))));
};
exports.default = CellUser;
var sx = {
    cell: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
    },
    button: {
        borderRadius: function (theme) { return theme.shape.borderRadius; },
    }
};
