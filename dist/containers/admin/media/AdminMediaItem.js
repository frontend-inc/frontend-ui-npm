"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var AdminMediaItem = function (props) {
    var resource = props.resource, sortable = props.sortable, handleClick = props.handleClick, handleDelete = props.handleDelete;
    return (react_1.default.createElement(components_1.ResourceGridItem, { enableBorder: true, sortable: sortable, 
        //@ts-ignore 
        image: (0, helpers_1.resizeCloudinaryImage)(resource === null || resource === void 0 ? void 0 : resource.url, { width: 800, height: 800 }), primary: resource === null || resource === void 0 ? void 0 : resource.content_type, secondaryAction: react_1.default.createElement(components_1.Label, { label: resource === null || resource === void 0 ? void 0 : resource.dimensions }), handleClick: handleClick, handleDelete: handleDelete }));
};
exports.default = AdminMediaItem;
