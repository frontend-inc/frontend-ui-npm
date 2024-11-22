'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var CellUser = function (props) {
    var user = props.value, handleClick = props.handleClick;
    if (!(user === null || user === void 0 ? void 0 : user.id))
        return null;
    return (react_1.default.createElement("div", { className: "w-full flex flex-row justify-start" },
        react_1.default.createElement(components_1.Button, { size: "sm", variant: "secondary", onClick: handleClick, startIcon: react_1.default.createElement(components_2.UserAvatar, { size: 28, user: user }) }, user === null || user === void 0 ? void 0 :
            user.first_name,
            " ", user === null || user === void 0 ? void 0 :
            user.last_name)));
};
exports.default = CellUser;
