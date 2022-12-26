"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getManyProductCards = exports.getProductPage = exports.addNewProduct = exports.getShoppingBag = void 0;
const prisma_1 = require("../common/prisma");
const getShoppingBag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getShoppingBag = getShoppingBag;
const addNewProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = req.body;
});
exports.addNewProduct = addNewProduct;
const getProductPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const product = yield prisma_1.prisma.product.findUnique({
        where: {
            id: id,
        },
        include: {
            Variation: {
                include: {
                    VariationOption: {
                        include: {
                            product_item: true,
                        },
                    },
                },
            },
        },
    });
    if (product == null) {
        res.status(404).json({ message: "Not found" });
    }
    else {
        const productPageDTO = {
            id: product.id,
            name: product.name,
            product_img: product.product_img,
            price: product.price,
            desc: product.desc,
            variation: product.Variation.map((e) => {
                return {
                    name: e.name,
                    option: e.VariationOption.map((e) => {
                        return {
                            value: e.value,
                            quantity: e.product_item.quantity,
                            SKU: e.product_item.SKU,
                            price: e.product_item.price,
                            product_img: e.product_item.product_img,
                        };
                    }),
                };
            }),
        };
        res.status(200).json(productPageDTO);
    }
});
exports.getProductPage = getProductPage;
const getManyProductCards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = req.query.category;
    if (category == null) {
        const productCards = yield prisma_1.prisma.product.findMany({
            select: {
                id: true,
                name: true,
                product_img: true,
                price: true,
            },
        });
        if (productCards == null) {
            res.status(404).json({
                message: "No item found",
            });
        }
        else {
            const productCardsDTO = {
                total: productCards.length,
                productCards,
            };
            res.status(200).json(productCardsDTO);
        }
        return;
    }
    const isProductCategory = yield prisma_1.prisma.productCategory.findUnique({
        select: {
            name: true,
        },
        where: {
            name: category,
        },
    });
    if (isProductCategory == null) {
        res.status(404).json({
            message: "Not found",
        });
        return;
    }
    else {
        const productCards = yield prisma_1.prisma.product.findMany({
            select: {
                id: true,
                name: true,
                product_img: true,
                price: true,
            },
            where: {
                category: {
                    name: category,
                },
            },
        });
        const productCardsDTO = {
            total: productCards.length,
            productCards,
        };
        res.status(200).json(productCardsDTO);
    }
});
exports.getManyProductCards = getManyProductCards;
