/*
  Warnings:

  - You are about to drop the `WorkshopActivities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "WorkshopActivities";

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "activity" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);
