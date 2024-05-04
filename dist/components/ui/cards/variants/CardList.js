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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var context_1 = require("../../../../context");
var material_1 = require("@mui/material");
var __1 = require("../../..");
var helpers_1 = require("../../../../helpers");
var router_1 = require("next/router");
var CardList = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, label = _a.label, title = _a.title, description = _a.description, _b = _a.image, image = _b === void 0 ? '' : _b, href = _a.href, _c = _a.height, height = _c === void 0 ? 180 : _c, buttonText = _a.buttonText, _d = _a.textVariant, textVariant = _d === void 0 ? 'subtitle1' : _d, handleClick = _a.handleClick, _e = _a.objectFit, objectFit = _e === void 0 ? 'cover' : _e, _f = _a.enableBorder, enableBorder = _f === void 0 ? false : _f, _g = _a.enableGradient, enableGradient = _g === void 0 ? false : _g, _h = _a.enableOverlay, enableOverlay = _h === void 0 ? false : _h, enableEdit = _a.enableEdit, enableDelete = _a.enableDelete, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete;
    var router = (0, router_1.useRouter)();
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)) },
        react_1.default.createElement(material_1.Stack, { sx: sx.container, spacing: 1, flexDirection: { xs: 'column', sm: 'row' } },
            react_1.default.createElement(material_1.Box, { sx: sx.image },
                react_1.default.createElement(__1.TouchableOpacity, { handleClick: handleItemClick },
                    react_1.default.createElement(__1.Image, { label: label, src: image, height: height, objectFit: objectFit, alt: title, enableGradient: enableGradient, enableOverlay: enableOverlay, disableBorderRadius: enableBorder }))),
            react_1.default.createElement(material_1.Stack, { sx: sx.contentArea, direction: "row", spacing: 1 },
                react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, sx: __assign(__assign({}, sx.content), (enableBorder && sx.contentBorder)) },
                    react_1.default.createElement(material_1.Typography, { color: "textPrimary", variant: textVariant }, (0, helpers_1.truncate)(title)),
                    react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "body2", sx: sx.description }, (0, helpers_1.truncate)(description, 80))),
                (enableEdit || enableDelete) && (react_1.default.createElement(__1.MenuButton, { icon: "EllipsisVertical", handleEdit: enableEdit ? handleEdit : undefined, handleDelete: enableDelete ? handleDelete : undefined }))),
            buttonText && (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.actions), (enableBorder && sx.actionsBorder)) },
                react_1.default.createElement(material_1.Button, { variant: "contained", color: "secondary", onClick: handleItemClick }, buttonText))))));
};
exports.default = CardList;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 1,
        overflow: 'hidden',
    },
    gradient: {
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
    container: {
        width: '100%',
    },
    image: {
        pr: {
            sm: 2,
            xs: 0,
        },
        mr: {
            sm: 2,
            xs: 0,
        },
        width: {
            sm: 220,
            xs: '100%',
        },
        minWidth: {
            sm: 220,
            xs: '100%',
        },
        height: '100%',
    },
    contentArea: {
        width: '100%',
    },
    content: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
        py: {
            sm: 0,
            xs: 1,
        },
    },
    contentBorder: {
        py: 2,
        px: {
            sm: 0,
            xs: 2,
        },
    },
    description: {
        maxWidth: '320px',
    },
    actions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: {
            sm: 'flex-end',
            xs: 'flex-start',
        },
    },
    actionsBorder: {
        px: 1,
        pb: {
            sm: 0,
            xs: 1,
        },
    },
};
