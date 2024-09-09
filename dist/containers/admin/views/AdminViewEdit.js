"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminViewForm_1 = __importDefault(require("./AdminViewForm"));
var AdminViewEdit = function (props) {
    var loading = props.loading, errors = props.errors, open = props.open, view = props.view, handleClose = props.handleClose, handleChange = props.handleChange, handleSubmit = props.handleSubmit;
    return (react_1.default.createElement(components_1.Drawer, { loading: loading, open: open, handleClose: handleClose, title: "Save view", buttons: react_1.default.createElement(components_1.PrimaryButton, { loading: loading, onClick: handleSubmit }, "Save") },
        react_1.default.createElement(AdminViewForm_1.default, { errors: errors, view: view, handleChange: handleChange })));
};
exports.default = AdminViewEdit;
