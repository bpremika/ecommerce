"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const product_router_1 = require("./routes/product.router");
const express_session_1 = __importDefault(require("express-session"));
const prisma_1 = require("./common/prisma");
const prisma_session_store_1 = require("@quixo3/prisma-session-store");
const user_router_1 = require("./routes/user.router");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.set("trust proxy", 1); // trust first proxy
app.use((0, express_session_1.default)({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: new prisma_session_store_1.PrismaSessionStore(prisma_1.prisma, {
        checkPeriod: 2 * 60 * 1000,
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
    }),
}));
app.use(user_router_1.userRouter);
app.use("/product", product_router_1.productRouter);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
