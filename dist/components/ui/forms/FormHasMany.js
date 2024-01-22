"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../../hooks");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var FormField_1 = __importDefault(require("./FormField"));
var index_1 = require("../../../constants/index");
var lodash_1 = require("lodash");
var FormHasMany = function (props) {
  var handle = props.handle,
    _a = props.buttonText,
    buttonText = _a === void 0 ? "Submit" : _a,
    _b = props.variant,
    variant = _b === void 0 ? "contained" : _b,
    fields = props.fields,
    url = props.url,
    foreignUrl = props.foreignUrl;
  var _c = (0, react_1.useState)(false),
    submitted = _c[0],
    setSubmitted = _c[1];
  var _d = (0, hooks_1.useResource)({
      name: "document",
      url: url,
    }),
    loading = _d.loading,
    addLinks = _d.addLinks;
  var _e = (0, hooks_1.useResource)({
      name: "document",
      url: foreignUrl,
    }),
    foreignLoading = _e.loading,
    resource = _e.resource,
    setResource = _e.setResource,
    update = _e.update,
    create = _e.create,
    handleChange = _e.handleChange,
    removeAttachment = _e.removeAttachment;
  var handleDataChange = function (ev) {
    var name = ev.target.name;
    var value =
      ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setResource(function (prev) {
      var _a;
      return __assign(__assign({}, prev), {
        data: __assign(
          __assign({}, prev.data),
          ((_a = {}), (_a[name] = value), _a)
        ),
      });
    });
  };
  var handleRemove = function (name) {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4 /*yield*/,
              removeAttachment(
                resource === null || resource === void 0 ? void 0 : resource.id,
                name
              ),
            ];
          case 1:
            _a.sent();
            return [2 /*return*/];
        }
      });
    });
  };
  var handleSubmit = function (e) {
    return __awaiter(void 0, void 0, void 0, function () {
      var resp, addResp, err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 7, , 8]);
            resp = void 0;
            addResp = void 0;
            if (
              !(resource === null || resource === void 0 ? void 0 : resource.id)
            )
              return [3 /*break*/, 2];
            return [4 /*yield*/, update(resource)];
          case 1:
            resp = _a.sent();
            return [3 /*break*/, 4];
          case 2:
            return [4 /*yield*/, create(resource)];
          case 3:
            resp = _a.sent();
            _a.label = 4;
          case 4:
            if (!(resp === null || resp === void 0 ? void 0 : resp.id))
              return [3 /*break*/, 6];
            return [4 /*yield*/, addLinks(handle, [resp.id])];
          case 5:
            addResp = _a.sent();
            if (addResp === null || addResp === void 0 ? void 0 : addResp.id) {
              setSubmitted(true);
            }
            _a.label = 6;
          case 6:
            return [3 /*break*/, 8];
          case 7:
            err_1 = _a.sent();
            console.log("Error", err_1);
            return [3 /*break*/, 8];
          case 8:
            return [2 /*return*/];
        }
      });
    });
  };
  return !submitted
    ? react_1.default.createElement(
        material_1.Stack,
        { spacing: 1, sx: sx.root },
        fields === null || fields === void 0
          ? void 0
          : fields.map(function (field) {
              return index_1.SYSTEM_FIELDS.includes(field.name)
                ? react_1.default.createElement(FormField_1.default, {
                    key: field.id,
                    field: field,
                    value: (0, lodash_1.get)(resource, field.name),
                    handleChange: handleChange,
                    handleRemove: handleRemove,
                  })
                : react_1.default.createElement(FormField_1.default, {
                    key: field.id,
                    field: field,
                    value: (0, lodash_1.get)(
                      resource === null || resource === void 0
                        ? void 0
                        : resource.data,
                      field.name
                    ),
                    handleChange: handleDataChange,
                  });
            }),
        react_1.default.createElement(
          material_1.Button,
          {
            variant: variant,
            onClick: handleSubmit,
            disabled: loading,
            endIcon: react_1.default.createElement(components_1.ButtonLoader, {
              color: "primary",
              loading: foreignLoading,
            }),
          },
          buttonText
        )
      )
    : react_1.default.createElement(components_1.Placeholder, {
        enableBorder: true,
        icon: react_1.default.createElement(lucide_react_1.Check, { size: 32 }),
        title: "Success",
        description: "Your form has been submitted",
        actions: react_1.default.createElement(
          material_1.Button,
          {
            color: "secondary",
            variant: "outlined",
            onClick: function () {
              return setSubmitted(false);
            },
          },
          "Done"
        ),
      });
};
exports.default = FormHasMany;
var sx = {
  root: {
    width: "100%",
  },
};
