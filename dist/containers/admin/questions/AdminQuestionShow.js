"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var containers_1 = require("../../../containers");
var AdminQuestionShow = function (props) {
    var _a, _b, _c, _d, _e;
    var _f = props || {}, open = _f.open, handleClose = _f.handleClose, resource = _f.resource, loading = _f.loading, enableEdit = _f.enableEdit, enableDelete = _f.enableDelete, handleDelete = _f.handleDelete, handleEdit = _f.handleEdit;
    return (react_1.default.createElement(components_1.ResourceModal, { loading: loading, open: open, handleClose: handleClose, enableDelete: enableDelete, enableEdit: enableEdit, handleEdit: handleEdit, handleDelete: handleDelete },
        react_1.default.createElement(components_1.ResourceDetails, { direction: "row", label: (_a = resource === null || resource === void 0 ? void 0 : resource.question) === null || _a === void 0 ? void 0 : _a.variant, image: (_c = (_b = resource === null || resource === void 0 ? void 0 : resource.question) === null || _b === void 0 ? void 0 : _b.image) === null || _c === void 0 ? void 0 : _c.url, primary: (_d = resource === null || resource === void 0 ? void 0 : resource.question) === null || _d === void 0 ? void 0 : _d.title, secondary: (_e = resource === null || resource === void 0 ? void 0 : resource.question) === null || _e === void 0 ? void 0 : _e.description, resource: resource === null || resource === void 0 ? void 0 : resource.question, fields: [] }),
        react_1.default.createElement(material_1.Stack, { direction: "column", width: '100%', spacing: 2 },
            react_1.default.createElement(material_1.Box, { sx: sx.divider }),
            react_1.default.createElement(material_1.Typography, { variant: "subtitle1", color: 'text.primary' }, "Answer Choices"),
            react_1.default.createElement(material_1.Typography, { variant: "body2", color: 'text.secondary' }, "For single choice and multiple choice questions"),
            react_1.default.createElement(containers_1.AdminAnswerList, { direction: "column", questionId: resource === null || resource === void 0 ? void 0 : resource.question_id }))));
};
exports.default = AdminQuestionShow;
var sx = {
    divider: {
        borderBottom: '1px solid',
        borderColor: 'divider',
        pt: 2,
        my: 2
    }
};
