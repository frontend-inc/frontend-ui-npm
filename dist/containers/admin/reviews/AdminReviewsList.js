'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var containers_1 = require("../../../containers");
var AdminReviewShow_1 = __importDefault(require("./AdminReviewShow"));
var AdminReviewsList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { enableBorder: false, url: "".concat(apiUrl, "/reviews"), name: "review", enableShow: true, enableSearch: true, enableDelete: true, sortOptions: [
            { name: 'created_at', label: 'Date' },
            { name: 'rating', label: 'Rating' },
        ], filterOptions: [
            {
                field: 'rating',
                label: 'Rating',
                variant: 'ratings_scale',
            },
            {
                field: 'flagged',
                label: 'Flagged',
                variant: 'boolean',
            },
        ], displayFields: [
            { name: 'rating', label: 'Rating', variant: 'rating' },
            { name: 'body', label: 'Review', variant: 'text' },
        ], component: containers_1.AdminReviewItem, show: AdminReviewShow_1.default, emptyIcon: "Star", emptyTitle: "No reviews found", emptyDescription: "No reviews found for this app" }));
};
exports.default = AdminReviewsList;
