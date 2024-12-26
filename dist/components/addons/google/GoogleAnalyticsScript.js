'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_ga4_1 = __importDefault(require("react-ga4"));
var navigation_1 = require("next/navigation");
var GoogleAnalytics = function (props) {
    var id = (props || {}).id;
    var mounted = (0, react_1.useRef)(false);
    var pathname = (0, navigation_1.usePathname)();
    (0, react_1.useEffect)(function () {
        if (id && !mounted.current) {
            mounted.current = true;
            react_ga4_1.default.initialize([
                {
                    trackingId: id
                }
            ]);
        }
    }, [id]);
    (0, react_1.useEffect)(function () {
        if (id) {
            react_ga4_1.default.send({
                hitType: 'pageview',
                page: pathname
            });
        }
    }, [pathname]);
    return null;
};
exports.default = GoogleAnalytics;
