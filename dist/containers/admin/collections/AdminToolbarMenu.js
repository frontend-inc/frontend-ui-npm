"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var AdminToolbarMenu = function (props) {
    var handleSaveView = props.handleSaveView;
    var onSaveView = function () {
        handleSaveView();
    };
    return (react_1.default.createElement(components_1.MenuButton, null,
        react_1.default.createElement(material_1.MenuItem, { onClick: onSaveView }, "Save view")));
};
exports.default = AdminToolbarMenu;
