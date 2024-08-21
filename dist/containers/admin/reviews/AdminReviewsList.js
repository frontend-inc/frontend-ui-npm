"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var containers_1 = require("../../../containers");
var AdminReviewsList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.Resources, { enableBorder: false, url: "".concat(apiUrl, "/reviews"), name: "review", enableSearch: true, enableDelete: true, filterOptions: [
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
        ], component: containers_1.AdminReviewItem, emptyIcon: "Star", emptyTitle: "No reviews found", emptyDescription: "No reviews found for this app" }));
};
exports.default = AdminReviewsList;
