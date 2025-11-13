/*
  Warnings:

  - Made the column `enabled` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `discount` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `discounted` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `deleted` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "enabled" SET NOT NULL,
ALTER COLUMN "discount" SET NOT NULL,
ALTER COLUMN "discounted" SET NOT NULL,
ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "deleted" SET NOT NULL;
