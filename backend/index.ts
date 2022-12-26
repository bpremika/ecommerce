import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { productRouter } from "./routes/product.router";
import session, { Session, SessionData } from "express-session";
import { prisma } from "./common/prisma";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import { userRouter } from "./routes/user.router";
declare module "express-session" {
    interface SessionData {
        username: string;
    }
}

declare namespace Express {
    interface Request {
        session: Session & Partial<SessionData>;
    }
}
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.set("trust proxy", 1); // trust first proxy
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
        store: new PrismaSessionStore(prisma, {
            checkPeriod: 2 * 60 * 1000, //ms
            dbRecordIdIsSessionId: true,
            dbRecordIdFunction: undefined,
        }),
    })
);

app.use(userRouter);
app.use("/product", productRouter);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
