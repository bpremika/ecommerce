-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "modified_at" DROP NOT NULL,
ALTER COLUMN "deleted_at" DROP NOT NULL;
