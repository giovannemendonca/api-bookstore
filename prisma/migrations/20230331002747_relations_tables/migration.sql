/*
  Warnings:

  - You are about to drop the column `bookId` on the `authors` table. All the data in the column will be lost.
  - You are about to drop the column `bookId` on the `publishers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "authors" DROP CONSTRAINT "authors_bookId_fkey";

-- DropForeignKey
ALTER TABLE "publishers" DROP CONSTRAINT "publishers_bookId_fkey";

-- AlterTable
ALTER TABLE "authors" DROP COLUMN "bookId";

-- AlterTable
ALTER TABLE "publishers" DROP COLUMN "bookId";

-- CreateTable
CREATE TABLE "book_authors" (
    "id" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "book_authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookPublisher" (
    "id" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "publisherId" TEXT NOT NULL,

    CONSTRAINT "BookPublisher_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "book_authors" ADD CONSTRAINT "book_authors_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_authors" ADD CONSTRAINT "book_authors_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookPublisher" ADD CONSTRAINT "BookPublisher_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookPublisher" ADD CONSTRAINT "BookPublisher_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "publishers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
