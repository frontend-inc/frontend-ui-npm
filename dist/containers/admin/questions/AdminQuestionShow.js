'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../../components/core");
var components_1 = require("../../../components");
var containers_1 = require("../../../containers");
var AdminQuestionShow = function (props) {
    var _a, _b, _c, _d, _e;
    var _f = props || {}, open = _f.open, handleClose = _f.handleClose, resource = _f.resource, loading = _f.loading, enableEdit = _f.enableEdit, enableDelete = _f.enableDelete, handleDelete = _f.handleDelete, handleEdit = _f.handleEdit;
    return (react_1.default.createElement(components_1.ResourceModal, { loading: loading, open: open, handleClose: handleClose, enableDelete: enableDelete, enableEdit: enableEdit, handleEdit: handleEdit, handleDelete: handleDelete },
        react_1.default.createElement(components_1.ResourceDetails, { direction: "row", label: (_a = resource === null || resource === void 0 ? void 0 : resource.question) === null || _a === void 0 ? void 0 : _a.variant, image: (_c = (_b = resource === null || resource === void 0 ? void 0 : resource.question) === null || _b === void 0 ? void 0 : _b.image) === null || _c === void 0 ? void 0 : _c.url, primary: (_d = resource === null || resource === void 0 ? void 0 : resource.question) === null || _d === void 0 ? void 0 : _d.title, secondary: (_e = resource === null || resource === void 0 ? void 0 : resource.question) === null || _e === void 0 ? void 0 : _e.description, resource: resource === null || resource === void 0 ? void 0 : resource.question, fields: [] }),
        react_1.default.createElement("div", { className: "flex flex-col space-y-3" },
            react_1.default.createElement("div", { className: "w-full h-[1px] border-top-1 border-border" }),
            react_1.default.createElement(core_1.Typography, { variant: "subtitle1" }, "Answer Choices"),
            react_1.default.createElement(core_1.Typography, { variant: "body2", className: "text-muted-foreground" }, "For single choice and multiple choice questions"),
            react_1.default.createElement(containers_1.AdminAnswerList, { direction: "column", questionId: resource === null || resource === void 0 ? void 0 : resource.question_id }))));
};
exports.default = AdminQuestionShow;
