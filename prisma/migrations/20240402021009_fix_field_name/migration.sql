/*
  Warnings:

  - You are about to drop the column `maximun_attendeers` on the `events` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "details" TEXT,
    "slug" TEXT NOT NULL,
    "maximun_attendees" INTEGER
);
INSERT INTO "new_events" ("details", "id", "slug", "title") SELECT "details", "id", "slug", "title" FROM "events";
DROP TABLE "events";
ALTER TABLE "new_events" RENAME TO "events";
CREATE UNIQUE INDEX "events_slug_key" ON "events"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
