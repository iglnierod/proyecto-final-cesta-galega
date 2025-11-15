-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "businessId" INTEGER,
ADD COLUMN     "isGlobal" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "ownerBusinessId" INTEGER;

-- CreateTable
CREATE TABLE "_BusinessCategories" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_BusinessCategories_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_BusinessCategories_B_index" ON "_BusinessCategories"("B");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_ownerBusinessId_fkey" FOREIGN KEY ("ownerBusinessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessCategories" ADD CONSTRAINT "_BusinessCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Business"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessCategories" ADD CONSTRAINT "_BusinessCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
