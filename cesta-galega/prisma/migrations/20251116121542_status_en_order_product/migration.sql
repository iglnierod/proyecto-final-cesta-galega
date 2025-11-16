/*
  Warnings:

  - Added the required column `status` to the `OrderProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderProduct" ADD COLUMN     "status" TEXT NOT NULL;
