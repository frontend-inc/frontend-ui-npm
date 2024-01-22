"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var icons_material_1 = require("@mui/icons-material");
var CellHABTM = function (props) {
  var _a;
  var links = props.value,
    field = props.field,
    handleClick = props.handleClick;
  var text = ""
    .concat(
      (links === null || links === void 0 ? void 0 : links.length) || 0,
      " "
    )
    .concat(
      (_a =
        field === null || field === void 0
          ? void 0
          : field.foreign_collection) === null || _a === void 0
        ? void 0
        : _a.plural_name
    );
  return react_1.default.createElement(
    components_1.CellButton,
    {
      handleClick: handleClick,
      icon: react_1.default.createElement(icons_material_1.CompareArrows, null),
    },
    text
  );
};
exports.default = CellHABTM;
