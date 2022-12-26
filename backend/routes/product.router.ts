import { Router } from "express";
import {
    getManyProductCards,
    getProductPage,
} from "../controller/product.controller";

export const productRouter = Router();
productRouter.get("/", getManyProductCards);
productRouter.get("/productPage/:id", getProductPage);
