/*
  Warnings:

  - You are about to drop the column `businessId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `isGlobal` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `ownerBusinessId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the `_BusinessCategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Category" DROP CONSTRAINT "Category_businessId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Category" DROP CONSTRAINT "Category_ownerBusinessId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_BusinessCategories" DROP CONSTRAINT "_BusinessCategories_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_BusinessCategories" DROP CONSTRAINT "_BusinessCategories_B_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "businessId",
DROP COLUMN "isGlobal",
DROP COLUMN "ownerBusinessId";

-- DropTable
DROP TABLE "public"."_BusinessCategories";
