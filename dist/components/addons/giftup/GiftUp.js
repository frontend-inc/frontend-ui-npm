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
var GiftUp = function (props) {
    var id = props.id;
    (0, react_1.useEffect)(function () {
        var loadScript = function () {
            var script = document.createElement('script');
            script.src = 'https://cdn.giftup.app/dist/gift-up.js';
            script.async = true;
            script.onload = function () {
                //@ts-ignore
                window.giftup = window.giftup || function () {
                    //@ts-ignore
                    ;
                    (window.giftup.q = window.giftup.q || []).push(arguments);
                };
                //@ts-ignore
                window.giftup('init', id);
            };
            document.body.appendChild(script);
        };
        //@ts-ignore
        if (id && window.giftup) {
            //@ts-ignore
            window.giftup('init', id);
        }
        else {
            loadScript();
        }
        return function () {
            var allScripts = document.getElementsByTagName('script');
            for (var i = 0; i < allScripts.length; i++) {
                if (allScripts[i].src.includes('gift-up.js')) {
                    //@ts-ignore
                    script.parentNode.removeChild(script);
                }
            }
        };
    }, [id]);
    if (!id)
        return null;
    return (react_1.default.createElement("div", { className: "gift-up-target", "data-site-id": id, "data-platform": "Other" }));
};
exports.default = GiftUp;
