"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var MobileDrawer_1 = __importDefault(require("./MobileDrawer"));
var MobileHeader_1 = __importDefault(require("./MobileHeader"));
var DesktopHeader_1 = __importDefault(require("./DesktopHeader"));
var hooks_1 = require("../../../hooks");
var Header = function (props) {
    var _a = (0, hooks_1.useApp)(), appLogo = _a.logo, enableStripe = _a.enableStripe, enableShopify = _a.enableShopify;
    var logo = props.logo, _b = props.links, links = _b === void 0 ? [] : _b, handleClick = props.handleClick, _c = props.enableAuth, enableAuth = _c === void 0 ? false : _c;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(DesktopHeader_1.default, { logo: logo || appLogo, enableAuth: enableAuth, enableStripe: enableStripe, enableShopify: enableShopify, links: links, handleClick: handleClick }),
        react_1.default.createElement(MobileHeader_1.default, { logo: logo || appLogo, enableStripe: enableStripe, enableShopify: enableShopify, enableNotifications: true, links: links, handleClick: handleClick }),
        react_1.default.createElement(MobileDrawer_1.default, { enableAuth: enableAuth, enableStripe: enableStripe, enableShopify: enableShopify, links: links, handleClick: handleClick })));
};
exports.default = Header;
var sx = {
    root: {
        height: 64,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        bgcolor: 'background.default',
    },
};
