'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var frontend_shadcn_1 = require("frontend-shadcn");
var components_2 = require("../../../components");
var ShopifyAddressItem = function (props) {
    var address = props.address, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, _a = props.disableActions, disableActions = _a === void 0 ? false : _a;
    return (react_1.default.createElement("div", { className: "flex justify-between items-center w-full p-2" },
        react_1.default.createElement(react_2.Button, { variant: "light", className: "flex-grow text-left justify-start rounded-lg", 
            //@ts-ignore
            onPress: function () { return handleClick(address === null || address === void 0 ? void 0 : address.id); } },
            react_1.default.createElement("div", null,
                react_1.default.createElement(components_1.Typography, { variant: "subtitle1" }, address === null || address === void 0 ? void 0 :
                    address.firstName,
                    " ", address === null || address === void 0 ? void 0 :
                    address.lastName),
                react_1.default.createElement(components_1.Typography, { variant: "body2" }, address.address1),
                address.address2 && (react_1.default.createElement(components_1.Typography, { variant: "body2" }, address.address2)),
                react_1.default.createElement(components_1.Typography, { variant: "body2" }, address === null || address === void 0 ? void 0 :
                    address.city,
                    ", ", address === null || address === void 0 ? void 0 :
                    address.province,
                    " ", address === null || address === void 0 ? void 0 :
                    address.zip))),
        !disableActions && (react_1.default.createElement(frontend_shadcn_1.DropdownMenu, null,
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuTrigger, { asChild: true },
                react_1.default.createElement(components_2.MenuButton, null)),
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuContent, null,
                react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { onSelect: function () { return handleEdit(address === null || address === void 0 ? void 0 : address.id); } }, "Edit"),
                react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { onSelect: function () { return handleDelete(address); } }, "Delete"))))));
};
exports.default = ShopifyAddressItem;
