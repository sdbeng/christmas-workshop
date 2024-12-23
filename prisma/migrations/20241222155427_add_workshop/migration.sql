/*
  Warnings:

  - You are about to drop the `Activity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Activity";

-- CreateTable
CREATE TABLE "Workshop" (
    "id" SERIAL NOT NULL,
    "activity" TEXT NOT NULL DEFAULT 'test activity',
    "enabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Workshop_pkey" PRIMARY KEY ("id")
);
