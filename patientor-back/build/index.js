"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/api/ping", (_req, res) => {
    res.send("hello pingis");
});
const PORT = 3003;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
