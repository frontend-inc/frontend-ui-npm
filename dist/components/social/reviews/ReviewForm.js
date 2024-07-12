"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var ReviewForm = function (props) {
    var _a = props || {}, loading = _a.loading, errors = _a.errors, review = _a.review, handleChange = _a.handleChange, handleSubmit = _a.handleSubmit;
    return (react_1.default.createElement(__1.AuthGuard, null,
        react_1.default.createElement(material_1.ListItem, { disableGutters: true },
            react_1.default.createElement(material_1.Stack, { sx: sx.form, direction: "column", spacing: 1 },
                react_1.default.createElement(__1.RatingInput, { errors: errors, name: "rating", value: review === null || review === void 0 ? void 0 : review.rating, handleChange: handleChange }),
                react_1.default.createElement(__1.TextInput, { errors: errors, name: "title", value: review === null || review === void 0 ? void 0 : review.title, handleChange: handleChange, placeholder: "Review summary..." }),
                react_1.default.createElement(__1.TextInput, { errors: errors, multiline: true, rows: 4, name: "body", value: review === null || review === void 0 ? void 0 : review.body, handleChange: handleChange, placeholder: "Leave a review..." }),
                react_1.default.createElement(material_1.Button, { variant: "contained", onClick: handleSubmit, disabled: loading, startIcon: react_1.default.createElement(__1.IconLoading, { loading: loading }) }, "Submit")))));
};
exports.default = ReviewForm;
var sx = {
    root: {
        alignItems: 'flex-start',
    },
    form: {
        p: 2,
        width: '100%',
        alignItems: 'flex-start',
    },
    paper: {
        width: '100%',
    },
};
