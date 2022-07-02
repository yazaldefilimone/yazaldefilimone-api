/*
  Warnings:

  - A unique constraint covering the columns `[banner]` on the table `post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url]` on the table `project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[repo]` on the table `project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `stack` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "stack" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "name" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "post_banner_key" ON "post"("banner");

-- CreateIndex
CREATE UNIQUE INDEX "project_title_key" ON "project"("title");

-- CreateIndex
CREATE UNIQUE INDEX "project_url_key" ON "project"("url");

-- CreateIndex
CREATE UNIQUE INDEX "project_repo_key" ON "project"("repo");

-- CreateIndex
CREATE UNIQUE INDEX "stack_name_key" ON "stack"("name");
