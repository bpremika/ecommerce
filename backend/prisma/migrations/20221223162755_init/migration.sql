/*
  Warnings:

  - You are about to drop the `_ProductItemToVariationOption` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[productItem_id]` on the table `VariationOption` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productItem_id` to the `VariationOption` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ProductItemToVariationOption" DROP CONSTRAINT "_ProductItemToVariationOption_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductItemToVariationOption" DROP CONSTRAINT "_ProductItemToVariationOption_B_fkey";

-- AlterTable
ALTER TABLE "ProductItem" ALTER COLUMN "SKU" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "VariationOption" ADD COLUMN     "productItem_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_ProductItemToVariationOption";

-- CreateIndex
CREATE UNIQUE INDEX "VariationOption_productItem_id_key" ON "VariationOption"("productItem_id");

-- AddForeignKey
ALTER TABLE "VariationOption" ADD CONSTRAINT "VariationOption_productItem_id_fkey" FOREIGN KEY ("productItem_id") REFERENCES "ProductItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
