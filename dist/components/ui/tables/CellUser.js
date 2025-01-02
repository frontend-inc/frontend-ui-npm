'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var components_1 = require("../../../components");
var CellUser = function (props) {
    var user = props.value, handleClick = props.handleClick;
    if (!(user === null || user === void 0 ? void 0 : user.id))
        return null;
    return (react_1.default.createElement("div", { className: "w-full flex flex-row justify-start" },
        react_1.default.createElement(react_2.Button, { size: "sm", variant: "ghost", onPress: handleClick, startContent: react_1.default.createElement(components_1.UserAvatar, { user: user }) }, user === null || user === void 0 ? void 0 :
            user.first_name,
            " ", user === null || user === void 0 ? void 0 :
            user.last_name)));
};
exports.default = CellUser;
