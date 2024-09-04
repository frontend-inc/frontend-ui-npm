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
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var UnplashCard = function (props) {
    var _a, _b, _c, _d;
    var image = props.image, selected = props.selected, handleClick = props.handleClick;
    var handleProfileClick = function (user) {
        var _a;
        var url = ((_a = user === null || user === void 0 ? void 0 : user.links) === null || _a === void 0 ? void 0 : _a.html) + '?utm_source=frontend.co&utm_medium=referral';
        window.open(url, '_blank');
    };
    return (react_1.default.createElement(material_1.Card, { sx: __assign(__assign({}, sx.root), (selected && sx.selected)) },
        react_1.default.createElement(material_1.CardActionArea, { onClick: function () { return (handleClick ? handleClick(image) : null); } },
            react_1.default.createElement(components_1.Image, { height: 164, width: 164, src: (_a = image === null || image === void 0 ? void 0 : image.urls) === null || _a === void 0 ? void 0 : _a.small, alt: image === null || image === void 0 ? void 0 : image.alt_description, objectFit: "cover", disableBorderRadius: true })),
        react_1.default.createElement(material_1.CardHeader, { sx: sx.cardHeader, title: react_1.default.createElement(material_1.Button, { startIcon: react_1.default.createElement(material_1.Avatar, { sx: sx.avatar, src: (_c = (_b = image === null || image === void 0 ? void 0 : image.user) === null || _b === void 0 ? void 0 : _b.profile_image) === null || _c === void 0 ? void 0 : _c.medium }), sx: sx.button, onClick: function () { return handleProfileClick(image === null || image === void 0 ? void 0 : image.user); } }, (_d = image === null || image === void 0 ? void 0 : image.user) === null || _d === void 0 ? void 0 : _d.name) })));
};
exports.default = UnplashCard;
var sx = {
    root: {
        borderRadius: 1,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        p: 0,
    },
    selected: {
        borderColor: 'primary.main',
    },
    header: {},
    image: {
        objectFit: 'cover',
    },
    avatar: {
        height: 24,
        width: 24,
    },
    button: {
        fontSize: 12,
        textDecoration: 'none',
        color: 'text.secondary',
        flexWrap: 'break-word',
        '&:hover': {
            color: 'text.primary',
        },
    },
    cardHeader: {
        p: 0.5,
    },
};
