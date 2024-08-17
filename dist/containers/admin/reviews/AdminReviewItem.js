"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminReviewItem = function (props) {
    var review = props.resource, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { resource: review, displayFields: [
            {
                label: 'Rating',
                variant: 'rating',
                name: 'rating',
            },
            {
                label: 'Description',
                variant: 'text',
                name: 'description',
            },
        ], avatar: react_1.default.createElement(components_1.UserAvatar, { user: review === null || review === void 0 ? void 0 : review.user }), secondaryActions: (review === null || review === void 0 ? void 0 : review.flagged) && react_1.default.createElement(components_1.Label, { label: "Flagged" }), handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = AdminReviewItem;
