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
var components_1 = require("../../../components");
var router_1 = require("next/router");
var CollectionSchemaToggle = function (props) {
    var router = (0, router_1.useRouter)();
    var _a = router === null || router === void 0 ? void 0 : router.query, appId = _a.app_id, collectionId = _a.collection_id;
    var _b = props.tab, tab = _b === void 0 ? 0 : _b;
    var handleClick = function (path) {
        router.push("/dashboard/".concat(appId, "/").concat(path, "/").concat(collectionId));
    };
    return (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 0.5 },
        react_1.default.createElement(material_1.Hidden, { smDown: true },
            react_1.default.createElement(material_1.Button, { color: "secondary", sx: __assign(__assign({}, sx.button), (tab == 0 && sx.selected)), variant: tab == 0 ? 'contained' : 'text', onClick: function () { return handleClick('collections'); }, startIcon: react_1.default.createElement(components_1.Icon, { name: "Database", color: "secondary.contrastText" }) }, "Content"),
            react_1.default.createElement(material_1.Button, { sx: __assign(__assign({}, sx.button), (tab == 1 && sx.selected)), variant: tab == 1 ? 'contained' : 'text', color: "secondary", onClick: function () { return handleClick('schema'); }, startIcon: react_1.default.createElement(components_1.Icon, { name: "Type", color: "secondary.contrastText" }) }, "Fields"))));
};
exports.default = CollectionSchemaToggle;
var sx = {
    button: {
        color: 'text.secondary',
    },
    selected: {
        color: 'secondary.contrastText',
        bgcolor: 'secondary.main',
    },
    icon: {
        color: 'secondary.contrastText',
    },
};
