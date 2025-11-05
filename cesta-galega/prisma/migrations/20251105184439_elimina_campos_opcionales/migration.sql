/*
  Warnings:

  - Made the column `address` on table `Business` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `Business` required. This step will fail if there are existing NULL values in that column.
  - Made the column `province` on table `Business` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `Business` required. This step will fail if there are existing NULL values in that column.
  - Made the column `businessType` on table `Business` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `Business` required. This step will fail if there are existing NULL values in that column.
  - Made the column `postalCode` on table `Business` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `total` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `shippingAddress` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `paymentMethod` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `province` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sex` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `birthDate` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `review` on table `UserProduct` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Business" ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "city" SET NOT NULL,
ALTER COLUMN "province" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "businessType" SET NOT NULL,
ALTER COLUMN "phoneNumber" SET NOT NULL,
ALTER COLUMN "postalCode" SET NOT NULL;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "total" SET NOT NULL,
ALTER COLUMN "shippingAddress" SET NOT NULL,
ALTER COLUMN "paymentMethod" SET NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "image" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "province" SET NOT NULL,
ALTER COLUMN "sex" SET NOT NULL,
ALTER COLUMN "birthDate" SET NOT NULL;

-- AlterTable
ALTER TABLE "UserProduct" ALTER COLUMN "review" SET NOT NULL;
