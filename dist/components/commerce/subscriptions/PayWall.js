"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var PayWall = function () {
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(components_1.Heading, { title: 'Subscription required', description: 'Please subscribe below to continue', textAlign: 'center' }),
        react_1.default.createElement(material_1.Box, { width: '100%' },
            react_1.default.createElement(components_1.SubscriptionTable, null))));
};
exports.default = PayWall;
var sx = {
    root: {
        height: 'calc(100vh - 120px)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px'
    }
};
