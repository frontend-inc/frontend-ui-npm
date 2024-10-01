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
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var router_1 = require("next/router");
var frontend_shopify_1 = require("frontend-shopify");
var AdminShopifyPage = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, hooks_1.useAdmin)().clientUrl;
    var appId = router.query.app_id;
    var _a = (0, hooks_1.useApps)(), loading = _a.loading, app = _a.app, findApp = _a.findApp;
    var _b = props || {}, title = _b.title, actions = _b.actions, activeTab = _b.activeTab, activeMenu = _b.activeMenu, menuItems = _b.menuItems, enableEdit = _b.enableEdit, enableDelete = _b.enableDelete, handleEdit = _b.handleEdit, handleDelete = _b.handleDelete, _c = _b.disablePadding, disablePadding = _c === void 0 ? false : _c, children = _b.children;
    (0, hooks_1.useTabs)(activeTab);
    var handleClick = function (menuItem) {
        router.push("".concat(clientUrl).concat(menuItem.value));
    };
    (0, react_1.useEffect)(function () {
        if (appId) {
            findApp(appId);
        }
    }, [appId]);
    if (loading) {
        return react_1.default.createElement(__1.CircularLoader, { size: 64 });
    }
    if (!(app === null || app === void 0 ? void 0 : app.shopify_domain) || !(app === null || app === void 0 ? void 0 : app.shopify_storefront_access_token)) {
        return (react_1.default.createElement(__1.Placeholder, { title: "Please connect your Shopify store", description: "You need to connect your Shopify store to use this feature" }));
    }
    return (react_1.default.createElement(frontend_shopify_1.ShopifyProvider, { shopUrl: "/editor/shop", domain: app.shopify_domain, storefrontAccessToken: app.shopify_storefront_access_token },
        menuItems && (react_1.default.createElement(__1.AdminLayoutLeft, null,
            react_1.default.createElement(__1.AdminMenu, { enableEdit: enableEdit, enableDelete: enableDelete, activeMenu: activeMenu, menuItems: menuItems, handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete }))),
        react_1.default.createElement(__1.AdminLayoutCenter, null,
            react_1.default.createElement(__1.AdminHeader, { title: title, buttons: actions, enableExpandLeftPanel: true }),
            react_1.default.createElement(__1.AdminLayoutScroll, null,
                react_1.default.createElement(material_1.Box, { p: disablePadding ? 0 : 2 }, children)))));
};
exports.default = AdminShopifyPage;
