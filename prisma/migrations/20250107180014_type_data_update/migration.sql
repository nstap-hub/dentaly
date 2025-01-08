/*
  Warnings:

  - Changed the type of `precio` on the `Tratamientos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Tratamientos" DROP COLUMN "precio",
ADD COLUMN     "precio" MONEY NOT NULL;
