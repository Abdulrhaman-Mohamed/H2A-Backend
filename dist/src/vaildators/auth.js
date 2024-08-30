"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.authSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.authSchema = {
    data: joi_1.default.object({
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().min(8).required(),
        name: joi_1.default.string().required(),
        role: joi_1.default.string().valid("admin", "superadmin", "editor").required()
    })
};
exports.loginSchema = {
    data: joi_1.default.object({
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().min(8).required()
    })
};
//# sourceMappingURL=auth.js.map