/*
  Warnings:

  - The primary key for the `Workshop` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Workshop` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Workshop" DROP CONSTRAINT "Workshop_pkey",
DROP COLUMN "id",
ALTER COLUMN "activity" DROP DEFAULT,
ALTER COLUMN "enabled" DROP DEFAULT,
ADD CONSTRAINT "Workshop_pkey" PRIMARY KEY ("activity");
