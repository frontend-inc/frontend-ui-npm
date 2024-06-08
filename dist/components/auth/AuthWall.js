"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Login_1 = __importDefault(require("./login/Login"));
var components_1 = require("../../components");
var material_1 = require("@mui/material");
var AuthWall = function () {
    return (react_1.default.createElement(material_1.Container, { maxWidth: "sm" },
        react_1.default.createElement(material_1.Box, { sx: sx.root },
            react_1.default.createElement(components_1.Heading, { description: "Please sign in to continue.", textAlign: "center" }),
            react_1.default.createElement(components_1.AuthLayout, null,
                react_1.default.createElement(Login_1.default, null)))));
};
exports.default = AuthWall;
var sx = {
    root: {
        width: '100%',
        height: 'calc(100vh - 120px)',
        gap: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
};
