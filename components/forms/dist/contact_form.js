"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var type_1 = require("@/utils/type");
var zod_1 = require("@hookform/resolvers/zod");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var form_1 = require("../ui/form");
var button_1 = require("@/components/ui/button");
var input_1 = require("../ui/input");
var textarea_1 = require("../ui/textarea");
var use_toast_1 = require("@/components/ui/use-toast");
var lu_1 = require("react-icons/lu");
var browser_1 = require("@emailjs/browser");
var ContactForm = function () {
    var _a = react_1.useTransition(), isLoading = _a[0], setTransition = _a[1];
    var toast = use_toast_1.useToast().toast;
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(type_1.contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });
    var onSubmit = function (formData) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setTransition(function () { return __awaiter(void 0, void 0, void 0, function () {
                var templateParams, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            // Init EmailJS
                            browser_1["default"].init({
                                publicKey: process.env.NEXT_PUBLIC_EMAILJS_API_KEY
                            });
                            templateParams = {
                                from_name: formData.name,
                                from_email: formData.email,
                                from_message: formData.message
                            };
                            // Then Send email message to my account
                            return [4 /*yield*/, browser_1["default"].send("gmail_provider", "template_default1", templateParams)];
                        case 1:
                            // Then Send email message to my account
                            _a.sent();
                            form.clearErrors();
                            form.reset();
                            toast({
                                description: "Your message has been sent. You will have my answer by then :)"
                            });
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.log("Failed to send message: " + err_1);
                            toast({
                                variant: "destructive",
                                description: "Oops! An error has occurred. Try later!"
                            });
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); };
    return (react_1["default"].createElement(form_1.Form, __assign({}, form),
        react_1["default"].createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "w-full flex flex-col gap-4 mb-4" },
            react_1["default"].createElement(form_1.FormField, { name: "name", control: form.control, render: function (_a) {
                    var field = _a.field;
                    return (react_1["default"].createElement(form_1.FormItem, null,
                        react_1["default"].createElement(form_1.FormControl, null,
                            react_1["default"].createElement(input_1.Input, __assign({ placeholder: "Your name", className: "customInput" }, field)))));
                } }),
            react_1["default"].createElement(form_1.FormField, { name: "email", control: form.control, render: function (_a) {
                    var field = _a.field;
                    return (react_1["default"].createElement(form_1.FormItem, null,
                        react_1["default"].createElement(form_1.FormControl, null,
                            react_1["default"].createElement(input_1.Input, __assign({ placeholder: "Your email", className: "customInput" }, field)))));
                } }),
            react_1["default"].createElement(form_1.FormField, { name: "message", control: form.control, render: function (_a) {
                    var field = _a.field;
                    return (react_1["default"].createElement(form_1.FormItem, null,
                        react_1["default"].createElement(form_1.FormControl, null,
                            react_1["default"].createElement(textarea_1.Textarea, __assign({ placeholder: "Type your message here...", className: "customInput" }, field)))));
                } }),
            react_1["default"].createElement(button_1.Button, { disabled: isLoading, type: "submit" },
                isLoading && react_1["default"].createElement(lu_1.LuLoader2, { className: "mr-2 h-4 w-4 animate-spin" }),
                isLoading ? "Submitting..." : "Submit message"))));
};
exports["default"] = ContactForm;
