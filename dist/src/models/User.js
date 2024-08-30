"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "superadmin", "editor"],
    }
});
const User = (0, mongoose_1.model)('user', userSchema);
exports.default = User;
//# sourceMappingURL=User.js.map