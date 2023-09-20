"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.default = CustomError;
//# sourceMappingURL=CustomError.js.map