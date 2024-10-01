"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminCommentShow = function (props) {
    var _a, _b, _c, _d;
    var loading = props.loading, open = props.open, handleClose = props.handleClose, enableEdit = props.enableEdit, enableDelete = props.enableDelete, handleEdit = props.handleEdit, handleDelete = props.handleDelete, comment = props.resource;
    return (react_1.default.createElement(components_1.ResourceModal, { loading: loading, open: open, handleClose: handleClose, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: handleEdit, handleDelete: handleDelete },
        react_1.default.createElement(components_1.ResourceDetails, __assign({ image: (_b = (_a = comment === null || comment === void 0 ? void 0 : comment.document) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.url, primary: (_c = comment === null || comment === void 0 ? void 0 : comment.user) === null || _c === void 0 ? void 0 : _c.name, secondary: "@".concat((_d = comment === null || comment === void 0 ? void 0 : comment.user) === null || _d === void 0 ? void 0 : _d.username) }, props, { fields: [{ name: 'body', label: 'Comment', variant: 'text' }] }))));
};
exports.default = AdminCommentShow;
