"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.put('/update-user-data', authMiddleware_1.authMiddleware, userController_1.updateUser);
router.get('/fetch-user-data', authMiddleware_1.authMiddleware, userController_1.fetchUser);
exports.default = router;
