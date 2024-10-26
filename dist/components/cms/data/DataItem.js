'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
// This component is responsible for converting a resource
// into a DataItem UI component
var DataItem = function (props) {
    var _a = props || {}, sortable = _a.sortable, selectable = _a.selectable, selected = _a.selected, resource = _a.resource, actions = _a.actions, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete, handleSelect = _a.handleSelect, _b = _a.slots, slots = _b === void 0 ? {
        item: {},
        image: {},
    } : _b;
    var _c = resource || {}, label = _c.label, title = _c.title, image = _c.image, description = _c.description;
    return (react_1.default.createElement(__1.DataListItem, { sortable: sortable, selectable: selectable, selected: selected, label: label, primary: title, secondary: description, image: image === null || image === void 0 ? void 0 : image.url, actions: actions, secondaryAction: secondaryAction, handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete, handleSelect: handleSelect, slots: slots }));
};
exports.default = DataItem;
