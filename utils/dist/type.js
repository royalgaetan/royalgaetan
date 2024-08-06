"use strict";
exports.__esModule = true;
exports.contactFormSchema = void 0;
var zod_1 = require("zod");
exports.contactFormSchema = zod_1.z.object({
    name: zod_1.z
        .string({
        invalid_type_error: "Please enter your real name",
        required_error: "Name is required!"
    })
        .min(3)
        .max(50),
    email: zod_1.z
        .string({
        invalid_type_error: "Please enter a correct email!",
        required_error: "Email is required!"
    })
        .email(),
    message: zod_1.z
        .string({
        invalid_type_error: "Please enter a correct message",
        required_error: "A message is required"
    })
        .min(2)
        .max(2000)
});
