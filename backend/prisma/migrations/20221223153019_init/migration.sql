/*
  Warnings:

  - You are about to drop the column `category_id` on the `Variation` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `Variation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Variation" DROP CONSTRAINT "Variation_category_id_fkey";

-- AlterTable
ALTER TABLE "Variation" DROP COLUMN "category_id",
ADD COLUMN     "product_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Variation" ADD CONSTRAINT "Variation_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
