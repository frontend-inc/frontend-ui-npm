"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSegment = exports.useTikTok = exports.useFacebookPixel = void 0;
var useFacebookPixel_1 = require("./useFacebookPixel");
Object.defineProperty(exports, "useFacebookPixel", {
  enumerable: true,
  get: function () {
    return __importDefault(useFacebookPixel_1).default;
  },
});
var useTikTok_1 = require("./useTikTok");
Object.defineProperty(exports, "useTikTok", {
  enumerable: true,
  get: function () {
    return __importDefault(useTikTok_1).default;
  },
});
var useSegment_1 = require("./useSegment");
Object.defineProperty(exports, "useSegment", {
  enumerable: true,
  get: function () {
    return __importDefault(useSegment_1).default;
  },
});
