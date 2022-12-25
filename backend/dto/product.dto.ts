export interface ProductCardDTO {
  id: number;
  name: string;
  product_img: String;
  price: number;
}

export interface ProductCardsDTO {
    total: number;
    productCards :ProductCardDTO[];
  }

export interface ProductPageDTO {
    id: number;
    name: string;
    product_img: String;
    price: number;
    desc:String;
    variation : variantDTO[];
  }

export interface variantDTO{
    name : string;
    option : variantOptionDTO[];
}

export interface variantOptionDTO{
    value : string;
    quantity : number;
    SKU : string;
    price : number;
    product_img : string;
}
