"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var PublishButton_1 = __importDefault(require("./inputs/PublishButton"));
var SaveButton_1 = __importDefault(require("./inputs/SaveButton"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var AdminDocumentRightPanel = function (props) {
    var appId = props.appId, loading = props.loading, publishLoading = props.publishLoading, errors = props.errors, document = props.document, handleChange = props.handleChange, handleSubmit = props.handleSubmit, handleTogglePublish = props.handleTogglePublish, enablePayments = props.enablePayments, enableUsers = props.enableUsers, enableTeams = props.enableTeams, enableStripe = props.enableStripe;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 2, sx: sx.rightContent },
        react_1.default.createElement(material_1.Typography, { variant: "caption", color: "text.secondary" }, "Publish"),
        react_1.default.createElement(PublishButton_1.default, { loading: publishLoading, document: document, handleTogglePublish: handleTogglePublish }),
        react_1.default.createElement(material_1.Typography, { mt: 2, variant: "caption", color: "text.secondary" },
            "Last saved ", document === null || document === void 0 ? void 0 :
            document.last_saved_at),
        react_1.default.createElement(SaveButton_1.default, { fullWidth: true, loading: loading, document: document, handleSubmit: handleSubmit }),
        react_1.default.createElement(material_1.Divider, null),
        enableUsers && (react_1.default.createElement(components_1.UserAutosuggest, { direction: "row", label: "User", errors: errors, name: "user_id", value: document === null || document === void 0 ? void 0 : document.user_id, handleChange: handleChange })),
        enableTeams && (react_1.default.createElement(components_1.TeamAutosuggest, { direction: "row", label: "Team", errors: errors, name: "team_id", value: document === null || document === void 0 ? void 0 : document.team_id, handleChange: handleChange })),
        enableStripe && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(material_1.Divider, null),
            react_1.default.createElement(material_1.Collapse, { in: enablePayments },
                react_1.default.createElement(material_1.Stack, { spacing: 1 },
                    react_1.default.createElement(components_2.TextInput, { direction: "row", name: "stripe_payment_link", value: document === null || document === void 0 ? void 0 : document.stripe_payment_link, handleChange: handleChange, label: "Stripe Link", placeholder: "Enter Stripe Payment Link", info: "Enter the Stripe payment URL" }),
                    react_1.default.createElement(material_1.Box, { sx: sx.spacer })))))));
};
exports.default = AdminDocumentRightPanel;
var sx = {
    root: {
        height: '100%',
        width: '100%',
    },
    container: {
        p: 2,
        pr: 4,
        pb: {
            sm: 0,
            xs: '80px',
        },
    },
    icon: {
        height: 28,
        width: 28,
    },
    progressLoader: {
        p: 0,
    },
    rightContent: {
        px: 2,
        pt: 1,
        bgcolor: 'background.paper',
        height: 'calc(100vh - 60px)',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    spacer: {
        height: '50px',
    },
    buttons: {
        height: '100%',
        alignItems: 'center',
    },
};
