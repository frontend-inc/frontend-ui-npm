"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var CollectionToolbarModal = function () {
    var setOpenReferences = (0, frontend_js_1.useResourceContext)().setOpenReferences;
    var handleAddReference = function (selected) {
        setOpenReferences(true);
    };
    var buttons = [
        {
            label: 'Add to List',
            icon: 'ListPlus',
            color: 'secondary',
            variant: 'contained',
            onClick: handleAddReference
        }
    ];
    return (react_1.default.createElement(components_1.DataToolbarModal, null,
        react_1.default.createElement(components_1.DataToolbarButtons, { buttons: buttons })));
};
exports.default = CollectionToolbarModal;
