/*
  Warnings:

  - Made the column `modified_at` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `deleted_at` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "modified_at" SET NOT NULL,
ALTER COLUMN "deleted_at" SET NOT NULL;
