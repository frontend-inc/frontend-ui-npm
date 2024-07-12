"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var helpers_1 = require("../../../helpers");
var HeroSnippet = function (props) {
    var _a = props || {}, resource = _a.resource, url = _a.url, _b = _a.actions, actions = _b === void 0 ? [] : _b, _c = _a.displayFields, displayFields = _c === void 0 ? [] : _c, enableRatings = _a.enableRatings, enablePayments = _a.enablePayments, enableEdit = _a.enableEdit, handleEdit = _a.handleEdit;
    var _d = resource || {}, image = _d.image, label = _d.label, title = _d.title;
    if (!resource)
        return null;
    return (react_1.default.createElement(material_1.Paper, { elevation: 0, sx: sx.paper },
        react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 2, sx: sx.header },
            (image === null || image === void 0 ? void 0 : image.url) && (react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
                react_1.default.createElement(__1.Image, { disableBorderRadius: true, label: label, src: image === null || image === void 0 ? void 0 : image.url, alt: title, height: 240 }))),
            react_1.default.createElement(material_1.Stack, { spacing: 0.5, direction: "column", p: 2, width: "100%" },
                react_1.default.createElement(material_1.Typography, { variant: "subtitle1", color: "text.primary" }, resource === null || resource === void 0 ? void 0 : resource.title),
                enableRatings == true && (react_1.default.createElement(__1.AvgRating, { resource: resource, enableTotal: true })),
                react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource }),
                enablePayments == true && (react_1.default.createElement(__1.StripePaymentLink, { resource: resource, buttonText: "Checkout", justifyContent: "center" })),
                react_1.default.createElement(__1.UserChip, { user: resource === null || resource === void 0 ? void 0 : resource.user })),
            react_1.default.createElement(material_1.Box, { justifyContent: "flex-end" }, ((actions === null || actions === void 0 ? void 0 : actions.length) > 0 || enableEdit) && (react_1.default.createElement(__1.Actions, { numVisible: 0, actions: (0, helpers_1.buildActions)({
                    enableEdit: enableEdit,
                    handleEdit: handleEdit,
                    actions: actions,
                }), justifyContent: "flex-end", resource: (0, frontend_js_1.flattenDocument)(resource) }))))));
};
exports.default = HeroSnippet;
var sx = {
    paper: {
        border: '1px solid',
        borderColor: 'divider',
        mb: 2,
        transition: 'box-shadow 0.3s',
        '&:hover': {
            boxShadow: 2,
        },
    },
    container: {
        borderRadius: 1,
        overflow: 'hidden',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: {
            md: 'flex-start',
            xs: 'center',
        },
    },
    header: {
        width: '100%',
    },
    imageContainer: {
        width: 240,
        minWidth: 240,
        borderRadius: function (theme) {
            return "".concat(theme.shape.borderRadius, "px 0 0 ").concat(theme.shape.borderRadius, "px");
        },
        overflow: 'hidden'
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        bgcolor: 'rgb(0,0,0,0.5)',
    },
};
