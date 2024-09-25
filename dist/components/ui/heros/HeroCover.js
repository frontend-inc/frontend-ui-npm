"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var HeroCover = function (props) {
    var _a = props || {}, image = _a.image, primary = _a.primary, actions = _a.actions, secondaryAction = _a.secondaryAction;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, spacing: 4 },
        react_1.default.createElement(__1.Cover, { image: image, height: 400, title: primary, enableOverlay: true }),
        react_1.default.createElement(material_1.Stack, { spacing: 3, sx: sx.header },
            actions,
            secondaryAction)));
};
exports.default = HeroCover;
var sx = {
    root: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        px: 2,
        maxWidth: 500,
        width: '100%',
    },
    content: {
        px: 2,
        width: '100%',
        pb: 4,
        maxWidth: {
            sm: 500,
            xs: '100%',
        },
    },
    text: {
        width: '100%',
        whiteSpace: 'pre-line',
    },
    caption: {
        color: 'text.secondary',
    },
    buttons: {
        justifyContent: 'center',
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
    imageContainer: {
        width: '100%',
        borderRadius: 1,
    },
};
