"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const firebaseConfig_1 = __importDefault(require("../config/firebaseConfig"));
exports.db = firebaseConfig_1.default.firestore();
