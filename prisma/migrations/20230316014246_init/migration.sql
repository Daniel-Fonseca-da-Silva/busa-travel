/*
  Warnings:

  - You are about to alter the column `state` on the `ticket` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(2)`.
  - You are about to alter the column `document` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(5)`.
  - A unique constraint covering the columns `[document]` on the table `driver` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `driver` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `document` to the `driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tel` to the `driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tel` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "driver" ADD COLUMN     "adm" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "document" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "tel" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ticket" ALTER COLUMN "state" SET DATA TYPE CHAR(2);

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "tel" TEXT NOT NULL,
ALTER COLUMN "document" SET DATA TYPE CHAR(5);

-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contact_email_key" ON "contact"("email");

-- CreateIndex
CREATE UNIQUE INDEX "driver_document_key" ON "driver"("document");

-- CreateIndex
CREATE UNIQUE INDEX "driver_email_key" ON "driver"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
