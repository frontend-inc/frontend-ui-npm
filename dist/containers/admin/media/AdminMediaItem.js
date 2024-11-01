'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminMediaItem = function (props) {
    var resource = props.resource, sortable = props.sortable, handleClick = props.handleClick, handleDelete = props.handleDelete;
    return (react_1.default.createElement(components_1.ResourceGridItem, { enableBorder: true, sortable: sortable, 
        //@ts-ignore
        image: resource === null || resource === void 0 ? void 0 : resource.url, secondaryAction: react_1.default.createElement(components_1.Badge, null, resource === null || resource === void 0 ? void 0 : resource.content_type), handleClick: handleClick, handleDelete: handleDelete, slots: {
            image: {
                height: 160,
                width: 320,
                objectFit: 'contain',
            },
        } }));
};
exports.default = AdminMediaItem;
