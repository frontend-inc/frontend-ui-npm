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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_2 = require("ai/react");
var components_1 = require("../../../components");
var react_3 = require("@nextui-org/react");
var components_2 = require("../../../components");
var components_3 = require("../../../components");
var react_4 = require("@nextui-org/react");
var components_4 = require("../../../components");
var navigation_1 = require("next/navigation");
var frontend_shadcn_1 = require("frontend-shadcn");
//@ts-ignore
var react_markdown_1 = __importDefault(require("react-markdown"));
var AiShopifyAssistant = function (props) {
    var avatar = (props || {}).avatar;
    var appId = (0, navigation_1.useParams)().app_id;
    var _a = (0, react_1.useState)(false), loading = _a[0], setLoading = _a[1];
    var dispatchTool = function (toolInvocation, result) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (result === 'No') {
                addToolResult({
                    toolCallId: toolInvocation.toolCallId,
                    result: 'No, thanks.',
                });
                return [2 /*return*/];
            }
            else {
                addToolResult({
                    toolCallId: toolInvocation.toolCallId,
                    result: 'Yes, please.',
                });
            }
            setLoading(false);
            return [2 /*return*/];
        });
    }); };
    var _b = (0, react_2.useChat)({
        api: '/api/v1/ai/shopify_assistant',
        onToolCall: function (_a) {
            var toolCall = _a.toolCall;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/];
                });
            });
        },
        onError: function (error) {
            setLoading(false);
            console.log('Error', error);
        },
    }), isLoading = _b.isLoading, input = _b.input, handleInputChange = _b.handleInputChange, messages = _b.messages, setMessages = _b.setMessages, handleSubmit = _b.handleSubmit, addToolResult = _b.addToolResult, stop = _b.stop;
    var handleChatSubmit = function (event) {
        event.preventDefault();
        handleSubmit(event, {
            data: {
                appId: appId,
            },
        });
    };
    return (react_1.default.createElement(components_4.Container, { maxWidth: 'md' },
        react_1.default.createElement("div", { className: (0, react_4.cn)('p-4 relative flex flex-col justify-between w-full', loading && 'opacity-50') },
            react_1.default.createElement("div", { className: "w-full overflow-y-scroll" },
                react_1.default.createElement("ul", { className: "list-none py-2 space-y-2" },
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(frontend_shadcn_1.Card, { className: "w-full" },
                            react_1.default.createElement(frontend_shadcn_1.CardContent, { className: "w-full flex items-center space-x-4" },
                                react_1.default.createElement(components_3.Avatar, { src: avatar, alt: "avatar" }),
                                react_1.default.createElement(components_1.Typography, { variant: "body1", className: "text-foreground/70" }, "Hi! I'm your shopping assistant. Ask me anything about our products.")))), messages === null || messages === void 0 ? void 0 :
                    messages.map(function (message, index) {
                        var _a;
                        return (react_1.default.createElement("li", { id: index === messages.length - 1
                                ? 'latest-message'
                                : "message-".concat(index), key: 'message-' + index, className: (0, react_4.cn)('flex flex-col space-y-2 w-full') },
                            react_1.default.createElement(frontend_shadcn_1.Card, { className: 'w-full' },
                                react_1.default.createElement(frontend_shadcn_1.CardContent, { className: "flex flex-col space-y-2" },
                                    react_1.default.createElement("div", { className: "flex flex-row space-x-4" },
                                        react_1.default.createElement("div", { className: "flex flex-row justify-center" }, (message === null || message === void 0 ? void 0 : message.role) === 'assistant' ? (react_1.default.createElement(components_3.Avatar, { src: avatar, alt: "avatar" })) : (react_1.default.createElement(frontend_shadcn_1.Avatar, { className: "rounded-lg" },
                                            react_1.default.createElement(frontend_shadcn_1.AvatarFallback, { className: "rounded-lg" },
                                                react_1.default.createElement(components_1.RemixIcon, { name: "ri-user-6-line", className: "text-primary" }))))),
                                        (message === null || message === void 0 ? void 0 : message.role) === 'assistant' ? (react_1.default.createElement("div", { className: "prose prose-sm text-left text-primary flex flex-col" },
                                            react_1.default.createElement(components_1.Typography, { variant: "body1", className: "font-bold" }, "Assistant:"),
                                            react_1.default.createElement(react_markdown_1.default, null, message.content))) : (react_1.default.createElement("div", { className: "flex flex-col" },
                                            react_1.default.createElement(components_1.Typography, { variant: "body2", className: "font-bold" }, "You:"),
                                            react_1.default.createElement(components_1.Typography, { variant: "body2" }, message === null || message === void 0 ? void 0 : message.content)))), (_a = message.toolInvocations) === null || _a === void 0 ? void 0 :
                                    _a.map(function (toolInvocation) {
                                        var _a;
                                        var toolName = toolInvocation.toolName, args = toolInvocation.args;
                                        var toolMessage;
                                        switch (toolName) {
                                            case 'shopifyProducts':
                                                toolMessage = 'Do you need more help?';
                                                break;
                                            default:
                                                break;
                                        }
                                        return (react_1.default.createElement("div", { className: "flex flex-col space-y-2 text-foreground", key: toolInvocation.toolCallId },
                                            react_1.default.createElement(react_markdown_1.default, null, args === null || args === void 0 ? void 0 : args.reason),
                                            (toolName == 'shopifyProducts' &&
                                                Array.isArray(args === null || args === void 0 ? void 0 : args.shopifyHandles) &&
                                                ((_a = args === null || args === void 0 ? void 0 : args.shopifyHandles) === null || _a === void 0 ? void 0 : _a.length) > 0) && (react_1.default.createElement("div", { className: "flex flex-col space-y-2 w-full" },
                                                react_1.default.createElement(components_3.ShopifyProductArray, { enableAddToCart: true, handles: args.shopifyHandles }))),
                                            (toolName == 'shopifyCollection' && (args === null || args === void 0 ? void 0 : args.collectionHandle)) && (react_1.default.createElement("div", { className: "flex flex-col space-y-2 w-full" },
                                                react_1.default.createElement(components_3.ShopifyProductCollection, { shopifyCollection: args.collectionHandle, enableAddToCart: true }))),
                                            !('result' in toolInvocation) && (react_1.default.createElement("div", { className: "w-full flex flex-row space-x-2 justify-between items-center" },
                                                react_1.default.createElement(components_1.Typography, { variant: "body2", className: "text-primary" }, toolMessage),
                                                !loading && (react_1.default.createElement("div", { className: "flex flex-row space-x-2" },
                                                    react_1.default.createElement(react_3.Button, { onPress: function () {
                                                            return dispatchTool(toolInvocation, 'Yes');
                                                        } }, "Sure!"),
                                                    react_1.default.createElement(react_3.Button, { onPress: function () {
                                                            return dispatchTool(toolInvocation, 'No');
                                                        } }, "No thanks")))))));
                                    })))));
                    }))),
            react_1.default.createElement("div", { className: "flex flex-col space-y-2 w-full" },
                react_1.default.createElement(components_2.TextArea, { name: "prompt", placeholder: "Ask a question about our products...", value: input, 
                    //@ts-ignore
                    handleChange: handleInputChange, disableDebounce: true }),
                react_1.default.createElement("div", { className: "flex flex-row space-x-2" },
                    react_1.default.createElement(react_3.Button, { fullWidth: true, onPress: handleChatSubmit, isLoading: isLoading, disabled: isLoading, className: "w-full bg-primary text-primary-foreground", startContent: react_1.default.createElement(components_1.RemixIcon, { name: "ri-gemini-fill", className: "text-white" }) }, isLoading ? 'thinking...' : 'Submit'),
                    react_1.default.createElement(components_1.IconButton, { isIconOnly: true, onPress: stop, className: "bg-primary hover:bg-primary/80 min-w-8" },
                        react_1.default.createElement(components_1.RemixIcon, { name: "ri-stop-fill", className: "text-primary-foreground" })))),
            loading && (react_1.default.createElement("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" },
                react_1.default.createElement(react_3.Spinner, null))))));
};
exports.default = AiShopifyAssistant;
