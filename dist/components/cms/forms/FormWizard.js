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
var context_1 = require("../../../context");
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var FormWizardProgress_1 = __importDefault(require("./wizard/FormWizardProgress"));
var FormCard_1 = __importDefault(require("./wizard/FormCard"));
var FormWizardField_1 = __importDefault(require("./wizard/FormWizardField"));
var FormWizardButtons_1 = __importDefault(require("./wizard/FormWizardButtons"));
var components_1 = require("../../../components");
var router_1 = require("next/router");
var FormWizard = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props.py, py = _a === void 0 ? 4 : _a, handle = props.handle, _resource = props.resource, fields = props.fields, url = props.url, startTitle = props.startTitle, startDescription = props.startDescription, startImage = props.startImage, _b = props.startButtonText, startButtonText = _b === void 0 ? 'Start' : _b, _c = props.buttonText, buttonText = _c === void 0 ? 'Submit' : _c, endTitle = props.endTitle, endDescription = props.endDescription, endImage = props.endImage, endButtonText = props.endButtonText, href = props.href;
    var _d = (0, react_1.useState)(false), submitted = _d[0], setSubmitted = _d[1];
    var _e = (0, frontend_js_1.useResource)({
        url: url,
        name: 'document',
    }), loading = _e.loading, findOne = _e.findOne, resource = _e.resource, setResource = _e.setResource, update = _e.update, create = _e.create, removeAttachment = _e.removeAttachment;
    var handleDataChange = function (ev) {
        var name = ev.target.name;
        var value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
        setResource(function (prev) { return (0, frontend_js_1.changeDocumentValue)(prev, name, value); });
    };
    var _f = (0, react_1.useState)(), currentField = _f[0], setCurrentField = _f[1];
    var _g = (0, react_1.useState)(0), currentStep = _g[0], setCurrentStep = _g[1];
    var _h = (0, react_1.useState)(0), totalSteps = _h[0], setTotalSteps = _h[1];
    var _j = (0, react_1.useState)(false), fadeIn = _j[0], setFadeIn = _j[1];
    var _k = (0, react_1.useState)(false), open = _k[0], setOpen = _k[1];
    var handleStartClick = function () {
        setCurrentStep(0);
        setFadeIn(true);
        setOpen(true);
    };
    var handleResetForm = function () {
        setResource({});
        setSubmitted(false);
        setCurrentStep(0);
        setOpen(false);
    };
    var handleSuccess = function () {
        if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
        else {
            handleResetForm();
        }
    };
    var handleRemove = function (name) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, removeAttachment(resource === null || resource === void 0 ? void 0 : resource.id, name)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    resp = void 0;
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, update(resource)];
                case 1:
                    resp = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, create(resource)];
                case 3:
                    resp = _a.sent();
                    _a.label = 4;
                case 4:
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setSubmitted(true);
                        setOpen(false);
                    }
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.log('Error', err_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var handleNextStep = function () {
        setFadeIn(false);
        var nextStep = currentStep + 1;
        if (nextStep > totalSteps) {
            return;
        }
        setTimeout(function () {
            setCurrentStep(nextStep);
            setFadeIn(true);
        }, 500);
    };
    var handlePrevStep = function () {
        var nextStep = currentStep - 1;
        if (nextStep < 0) {
            return;
        }
        setCurrentStep(nextStep);
    };
    (0, react_1.useEffect)(function () {
        if (fields) {
            setTotalSteps(fields.length);
        }
    }, [fields]);
    (0, react_1.useEffect)(function () {
        if (fields) {
            setCurrentField(fields[currentStep]);
        }
    }, [fields, currentStep]);
    (0, react_1.useEffect)(function () {
        if (_resource === null || _resource === void 0 ? void 0 : _resource.id) {
            setResource(_resource);
        }
        else if (handle && url) {
            findOne(handle);
        }
    }, [_resource, handle, url]);
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        !submitted ? (react_1.default.createElement(FormCard_1.default, { title: startTitle, description: startDescription, image: startImage, buttonText: startButtonText, handleClick: handleStartClick })) : (react_1.default.createElement(FormCard_1.default, { title: endTitle, description: endDescription, image: endImage, buttonText: endButtonText, handleClick: handleSuccess })),
        react_1.default.createElement(components_1.Modal, { fullScreen: true, disablePadding: true, open: open, handleClose: function () { return setOpen(false); } },
            react_1.default.createElement(FormWizardProgress_1.default, { currentStep: currentStep, totalSteps: totalSteps }),
            react_1.default.createElement(material_1.Box, { sx: sx.formContainer },
                react_1.default.createElement(material_1.Box, { sx: sx.form },
                    currentField && (react_1.default.createElement(FormWizardField_1.default, { fadeIn: fadeIn, field: currentField, handleChange: handleDataChange, handleRemove: handleRemove, resource: (0, frontend_js_1.flattenDocument)(resource), setResource: setResource })),
                    react_1.default.createElement(FormWizardButtons_1.default, { currentStep: currentStep, totalSteps: totalSteps, handleNextStep: handleNextStep, handlePrevStep: handlePrevStep, handleSubmit: handleSubmit, buttonText: buttonText }))))));
};
exports.default = FormWizard;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'calc(100vh - 200px)',
    },
    form: {
        px: 2,
        py: 4,
        width: '100%',
        maxWidth: '600px',
    },
    button: {
        mt: 2,
    },
    title: {
        textAlign: 'center',
        width: '100%',
    },
};
