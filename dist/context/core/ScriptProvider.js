"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ScriptContext_1 = __importDefault(require("./ScriptContext"));
var addons_1 = require("../../components/addons");
var addons_2 = require("../../hooks/addons");
var script_1 = __importDefault(require("next/script"));
var analytics_next_1 = require("@segment/analytics-next");
var ScriptProvider = function (props) {
    var _a = props || {}, _b = _a.disableAnalytics, disableAnalytics = _b === void 0 ? false : _b, _c = _a.disableChat, disableChat = _c === void 0 ? false : _c, okendoSubscriberId = _a.okendoSubscriberId, googleTagManagerId = _a.googleTagManagerId, googleAnalyticsId = _a.googleAnalyticsId, gorgiasChatId = _a.gorgiasChatId, gorgiasContactFormSrc = _a.gorgiasContactFormSrc, facebookPixelId = _a.facebookPixelId, hotJarId = _a.hotJarId, redditPixelId = _a.redditPixelId, segmentWriteKey = _a.segmentWriteKey, tikTokPixelId = _a.tikTokPixelId, visualWebsiteOptimizerId = _a.visualWebsiteOptimizerId, klaviyoCompanyId = _a.klaviyoCompanyId, children = _a.children;
    var _d = (0, react_1.useState)(null), segment = _d[0], setSegment = _d[1];
    (0, addons_2.useTikTok)({ tikTokPixelId: !disableAnalytics && tikTokPixelId });
    (0, addons_2.useFacebookPixel)({ facebookPixelId: !disableAnalytics && facebookPixelId });
    (0, react_1.useEffect)(function () {
        if (!disableAnalytics && segmentWriteKey) {
            setSegment(analytics_next_1.AnalyticsBrowser.load({
                writeKey: segmentWriteKey
            }));
        }
    }, [disableAnalytics, segmentWriteKey]);
    var value = {
        segment: segment,
        disableAnalytics: disableAnalytics,
        okendoSubscriberId: okendoSubscriberId,
        googleTagManagerId: googleTagManagerId,
        googleAnalyticsId: googleAnalyticsId,
        gorgiasChatId: gorgiasChatId,
        redditPixelId: redditPixelId,
        segmentWriteKey: segmentWriteKey
    };
    return (react_1.default.createElement(ScriptContext_1.default.Provider, { value: value },
        !disableAnalytics && (react_1.default.createElement(react_1.default.Fragment, null,
            googleTagManagerId && (react_1.default.createElement(addons_1.GoogleTagManagerScript, { id: googleTagManagerId })),
            googleAnalyticsId && (react_1.default.createElement(addons_1.GoogleAnalyticsScript, { id: googleAnalyticsId })),
            redditPixelId && (react_1.default.createElement(addons_1.RedditScript, { id: redditPixelId })),
            hotJarId && (react_1.default.createElement(addons_1.HotJarScript, { id: hotJarId })),
            visualWebsiteOptimizerId && (react_1.default.createElement(addons_1.VisualWebsiteOptimizerScript, { id: visualWebsiteOptimizerId })))),
        !disableChat && (react_1.default.createElement(react_1.default.Fragment, null, gorgiasChatId && (react_1.default.createElement(addons_1.GorgiasChat, { id: gorgiasChatId })))),
        klaviyoCompanyId && (react_1.default.createElement(addons_1.KlaviyoScript, { id: klaviyoCompanyId })),
        gorgiasContactFormSrc && (react_1.default.createElement(script_1.default, { strategy: "beforeInteractive", src: gorgiasContactFormSrc })),
        okendoSubscriberId && (react_1.default.createElement(addons_1.OkendoScript, { subscriberId: okendoSubscriberId })),
        children));
};
exports.default = ScriptProvider;
