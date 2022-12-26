import { prisma } from "../common/prisma";
import { Request, Response } from "express";
import { ProductCardsDTO, ProductPageDTO } from "../dto/product.dto";
import { AddNewProductDTO } from "../dto/product.dto";

export const getShoppingBag = async (req: Request, res: Response) =>{
    
}

export const addNewProduct = async(req:Request, res:Response) =>{
    const product : AddNewProductDTO = req.body;
    


}
export const getProductPage = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const product = await prisma.product.findUnique({
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
  } else {
    const productPageDTO: ProductPageDTO = {
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
};
export const getManyProductCards = async (req: Request, res: Response) => {
  const category = req.query.category as string | null;
  if (category == null) {
    const productCards = await prisma.product.findMany({
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
    } else {
      const productCardsDTO: ProductCardsDTO = {
        total: productCards.length,
        productCards,
      };
      res.status(200).json(productCardsDTO);
    }
    return;
  }
  const isProductCategory = await prisma.productCategory.findUnique({
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
  } else {
    const productCards = await prisma.product.findMany({
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
    const productCardsDTO: ProductCardsDTO = {
      total: productCards.length,
      productCards,
    };
    res.status(200).json(productCardsDTO);
  }
};
