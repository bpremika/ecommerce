-- DropForeignKey
ALTER TABLE "ProductCategory" DROP CONSTRAINT "ProductCategory_parent_category_id_fkey";

-- AlterTable
ALTER TABLE "ProductCategory" ALTER COLUMN "parent_category_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_parent_category_id_fkey" FOREIGN KEY ("parent_category_id") REFERENCES "ProductCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
