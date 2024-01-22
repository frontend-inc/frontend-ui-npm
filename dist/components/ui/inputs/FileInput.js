"use strict";
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
var react_dropzone_1 = __importDefault(require("react-dropzone"));
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var FileInput = function (props) {
  var fileUrl = props.fileUrl,
    handleUpload = props.handleUpload,
    handleDelete = props.handleDelete;
  var _a = (0, react_1.useState)(false),
    editing = _a[0],
    setEditing = _a[1];
  var _b = (0, react_1.useState)(),
    file = _b[0],
    setFile = _b[1];
  var _c = (0, react_1.useState)([]),
    files = _c[0],
    setFiles = _c[1];
  var _d = (0, react_1.useState)(false),
    isUploading = _d[0],
    setIsUploading = _d[1];
  var _e = (0, react_1.useState)(false),
    isUploaded = _e[0],
    setIsUploaded = _e[1];
  var _f = (0, react_1.useState)(false),
    dropzoneActive = _f[0],
    setDropzoneActive = _f[1];
  var onDrop = function (files) {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        setIsUploading(true);
        setIsUploaded(false);
        handleUpload(files[0]);
        setEditing(false);
        setIsUploading(false);
        setIsUploaded(true);
        setFiles([]);
        setFile(null);
        return [2 /*return*/];
      });
    });
  };
  var onDragEnter = function (files) {
    setFiles(files);
    setDropzoneActive(true);
  };
  var onDragLeave = function (files) {
    setFiles(files);
    setDropzoneActive(false);
  };
  var handleDownloadClick = function () {
    return window.open(fileUrl, "_blank");
  };
  return react_1.default.createElement(
    material_1.Box,
    null,
    fileUrl &&
      !editing &&
      react_1.default.createElement(
        react_1.default.Fragment,
        null,
        react_1.default.createElement(
          material_1.Button,
          { onClick: handleDownloadClick },
          react_1.default.createElement(icons_material_1.InsertDriveFile, {
            sx: sx.icon,
          })
        ),
        handleDelete &&
          react_1.default.createElement(
            material_1.Button,
            { sx: sx.button, size: "small", onClick: handleDelete },
            "Remove"
          )
      ),
    editing ||
      (!fileUrl &&
        //@ts-ignore
        react_1.default.createElement(
          react_dropzone_1.default,
          {
            sx: sx.dropZone,
            disableClick: false,
            onDrop: onDrop,
            onDragEnter: onDragEnter,
            onDragLeave: onDragLeave,
            multiple: false,
          },
          !isUploaded &&
            !isUploading &&
            !dropzoneActive &&
            react_1.default.createElement(
              material_1.Typography,
              { variant: "overline" },
              "Upload file"
            ),
          isUploaded &&
            react_1.default.createElement(
              material_1.Typography,
              { variant: "overline" },
              "Upload complete"
            ),
          !isUploaded &&
            !isUploading &&
            dropzoneActive &&
            react_1.default.createElement(
              material_1.Typography,
              { variant: "overline" },
              "Drop file"
            ),
          !isUploaded &&
            isUploading &&
            react_1.default.createElement(
              material_1.Typography,
              { variant: "overline" },
              "Uploading ..."
            ),
          isUploading &&
            react_1.default.createElement(material_1.LinearProgress, null)
        ))
  );
};
exports.default = FileInput;
var sx = {
  icon: {
    height: 48,
    width: 48,
    color: "primary.main",
  },
  dropZone: {
    m: 0,
    height: 140,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: function (theme) {
      return "1px dotted ".concat(theme.palette.text.secondary);
    },
    bgcolor: "background.default",
    textAlign: "center",
    mb: 2,
  },
  button: {
    fontSize: 11,
  },
};
