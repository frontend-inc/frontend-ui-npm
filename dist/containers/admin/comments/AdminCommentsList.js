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
var AdminCommentShow_1 = __importDefault(require("./AdminCommentShow"));
var AdminCommentsList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { url: "".concat(apiUrl, "/comments"), name: "comment", enableSearch: true, enableDelete: true, enableShow: true, filterOptions: [
            {
                name: 'flagged',
                label: 'Flagged',
                options: [
                    { label: 'Flagged', value: true },
                    { label: 'Not Flagged', value: false },
                ],
            },
        ], component: containers_1.AdminCommentItem, show: AdminCommentShow_1.default, emptyIcon: "MessageSquare", emptyTitle: "No comments", emptyDescription: "No comments yet." }));
};
exports.default = AdminCommentsList;
