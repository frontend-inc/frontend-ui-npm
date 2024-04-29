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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var router_1 = require("next/router");
var SocialButtons = function (props) {
    var url = props.url, handle = props.handle, enableLikes = props.enableLikes, enableShares = props.enableShares, enableFavorites = props.enableFavorites, _a = props.justifyContent, justifyContent = _a === void 0 ? 'center' : _a;
    var router = (0, router_1.useRouter)();
    var currentPageUrl = router.asPath;
    var _b = (0, frontend_js_1.useResource)({
        url: url,
    }), loading = _b.loading, resource = _b.resource, findOne = _b.findOne;
    (0, react_1.useEffect)(function () {
        if (url && handle) {
            findOne(handle);
        }
    }, [url, handle]);
    if (!(resource === null || resource === void 0 ? void 0 : resource.id))
        return null;
    return (react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: justifyContent, spacing: 1 },
        enableLikes && react_1.default.createElement(components_1.LikeButton, { handle: handle, url: url }),
        enableFavorites && react_1.default.createElement(components_1.FavoriteButton, { handle: handle, url: url }),
        enableShares && react_1.default.createElement(components_1.ShareButton, { url: currentPageUrl })));
};
exports.default = SocialButtons;
